import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { CommonService, SharefileService } from '../../services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { Observable } from 'rxjs';
import config from '../../config';
declare const fabric: any;
declare const Office: any;

@Component({
  selector: 'app-sharefiles',
  templateUrl: './sharefiles.component.html',
  styleUrls: ['./sharefiles.component.scss']
})
export class SharefilesComponent implements OnInit {

  sharefileForm: FormGroup;
  loading: boolean = false;
  istocc: boolean = false;
  showLink: boolean = true;
  public fileId: number = 0;
  public files = [];
  private subscription: ISubscription;
  stopCondition: boolean = true;
  otplink = config.ui.base + 'otp';
  sharedataId = '';

  constructor(public commonService: CommonService,
    public sharefileservice: SharefileService,
    private fb: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef) {
    this.sharefileForm = this.fb.group({
      downloadview: ['', Validators.required],
      to: [[]],
      cc: [[]]
    });
  }

  ngOnInit() {

    this.sharefileForm.statusChanges.subscribe(x => {
      this.cd.detectChanges();
    });

    this.stopCondition = (Office && Office.context && Office.context.displayLanguage) ? false : true;
    this.subscription = Observable.interval(2000)
      .takeWhile(() => !this.stopCondition)
      .subscribe(i => {
        (this.files.length > 0) && this.toccRead()
      });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onFileChange(event) {
    let filecount = event.target.files && event.target.files.length;
    if (filecount > 0 && !this.loading) {
      for (let i = 0; i < filecount; i++) {
        this.uploadFile(event.target.files[i]);
      }
    }
  }

  public dropped(event) {
    if (event.files.length == 1 && !this.loading) {
      for (const droppedFile of event.files) {
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            this.uploadFile(file);
            this.cd.detectChanges();
          });
        } else {
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
          console.log(droppedFile.relativePath, fileEntry);
        }
      }
    }
  }

  uploadFile(file) {
    this.loading = true;
    this.fileId = this.fileId + 1;
    let uploadFile = { id: this.fileId, file: file, uploaded: 'uploading' };
    if (Office && Office.context && Office.context.mailbox && Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress) {
      let uploaddata = { senderEmail: Office.context.mailbox.userProfile.emailAddress, file: file, shareDataId: this.sharedataId };
      this.files.push(uploadFile);
      this.sharefileservice.uploadfile(uploaddata).subscribe(data => {
        if (data && data.shareDataId) {
          this.loading = false;
          this.files.find(x => x.id === uploadFile.id).uploaded = 'uploaded';
          this.files.find(x => x.id === uploadFile.id).id = data.fileId
          this.sharedataId = data.shareDataId;
          this.cd.detectChanges();
          this.showLink = true;
          this.checkchange();
        }
      }, error => {
        this.loading = false;
        this.files.find(x => x.id === uploadFile.id).uploaded = (error.error && error.error.text) || 'failed';
        this.cd.detectChanges();
      });
    }
  }

  removefile(id) {
    this.loading = true;
    let index = this.files.findIndex(f => f.id === id);
    this.sharefileservice.deletefile(id).subscribe(data => {
      if (data) {

        this.loading = false;
        this.files.splice(index, 1);
        if (this.files.length === 0) {
          (this.sharefileForm.reset());
          this.sharedataId = '';
        }
        this.cd.detectChanges();
        this.showLink = true;
        this.checkchange();
      }
    }, error => {
      this.loading = false;
    });


  }

  checkchange() {
    if (this.sharefileForm.value.downloadview == 'view') {
      this.files.forEach(file => {
        let fname = file.file.name;
        let fext = fname.split('.').pop().toLowerCase();
        if (fext != 'pdf' && fext != 'txt' && fext != 'png' && fext != 'gif' && fext != 'jpg' && fext != 'jpeg') {
          this.showLink = false;
        }
      });

    } else {
      this.showLink = true;
    }
  }

  addInsertLink() {

    let message = "You have been sent " + this.files.length + " files:";
    let filesname = '';

    this.files.forEach(element => {
      filesname = filesname + '<div style="padding-bottom: 5px;font-size:13px;">' + element.file.name + '</div>'
    });
    let linktype = (this.sharefileForm.value.downloadview == 'download') ? 'Download files' : (this.sharefileForm.value.downloadview == 'view') ? 'View files' : '';
    let mode = (linktype == 'Download files') ? 1 : 0;

    this.sharefileservice.getSharedataLink(this.sharedataId, mode).subscribe(x => {
      if (x && x.key) {

        this.otplink = this.otplink + '/' + x.key + '/sharedata' + mode;
        let link = '<div style="padding-top: 10px;padding-bottom: 10px;"><a style="text-decoration: none" href=' + this.otplink + ' ><span style="background-color: #0078d7;color: white;height: 32px;min-width: 80px;padding: 1px 10px 2px;">&nbsp;' + linktype + '&nbsp;</span></a>' +
          '<div style="color:#B3B3B3;font-size:10px;text-align: right;padding-right: 5px;">Powered by <b>Connectid&nbsp;&nbsp;</b></div>' +
          '</div>';
        let self = this;

        let item = Office.context.mailbox.item;
        item.body.getTypeAsync(
          function (result) {
            if (result.status == Office.AsyncResultStatus.Failed) {
            }
            else {
              let htmlcontent =
                '<div style="background-color: #f4f4f4;">' +
                '<div style="font-weight: 550;padding-bottom: 15px;">'
                + message + '</div>' +
                filesname +
                link +
                '</div>';
              if (result.value == Office.MailboxEnums.BodyType.Html) {
                item.body.setSelectedDataAsync(
                  htmlcontent,
                  {
                    coercionType: Office.CoercionType.Html,
                    asyncContext: { var3: 1, var4: 2 }
                  },
                  function (asyncResult) {
                    if (asyncResult.status ==
                      Office.AsyncResultStatus.Failed) {
                    }
                    else {
                      self.sharedataId && self.updatereceiver();
                    }
                  });
              }
              else {
                item.body.setSelectedDataAsync(
                  'Value is not html type.',
                  {
                    coercionType: Office.CoercionType.Text,
                    asyncContext: { var3: 1, var4: 2 }
                  },
                  function (asyncResult) {
                    if (asyncResult.status ==
                      Office.AsyncResultStatus.Failed) {
                    }
                    else {
                    }
                  });
              }
            }
          });
      }
    }, error => {

    });


  }

  toccRead() {
    let self = this;
    Office.context.mailbox.item.to.getAsync(result => {
      let email = result.value.map(x => x.emailAddress);
      self.sharefileForm.patchValue({ to: email });
      this.istocc = ((email.length > 0) || (self.sharefileForm.value.cc.length > 0)) ? true : false;
    });

    Office.context.mailbox.item.cc.getAsync(result => {
      let email = result.value.map(x => x.emailAddress)
      self.sharefileForm.patchValue({ cc: email });
      this.istocc = ((email.length > 0) || (self.sharefileForm.value.to.length > 0)) ? true : false;
    });
    // this.showLink = true;
    //  this.checkchange();
  }

  updatereceiver() {
    this.loading = true;
    let receiver: string[] = [];
    (this.sharefileForm.value.to.length > 0) &&
      (receiver = this.sharefileForm.value.to);

    (this.sharefileForm.value.cc.length > 0) &&
      (receiver = receiver.concat(this.sharefileForm.value.cc));

    let updatedata = { receiverEmails: receiver, shareDataId: this.sharedataId };

    this.sharefileservice.updatereceivers(updatedata).subscribe(data => {
      this.loading = false;
      data && this.router.navigate([config.routes.confirm]);
    }, error => {
      this.loading = false;
    });
  }

}
