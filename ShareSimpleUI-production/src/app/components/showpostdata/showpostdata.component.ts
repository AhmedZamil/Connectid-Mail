import { Component, OnInit, Pipe, PipeTransform, ElementRef } from '@angular/core';
import { CommonService, Storage, PostdataService } from '../../services';
import { Router } from '@angular/router';
import config from '../../config';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare const fabric: any;

// @Pipe({ name: 'safe' })
// export class SafePipe implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer) { }
//   transform(url) {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }
// }

declare const $: any;

@Component({
  selector: 'app-showpostdata',
  templateUrl: './showpostdata.component.html',
  styleUrls: ['./showpostdata.component.scss']
})
export class ShowpostdataComponent implements OnInit {

  postdata: any;
  key: string;
  receiverId: string;
  loading: boolean = false;
  dialogComponent: any;
  viewDialogComponent: any;
  viewerClass: string = "docviewer screen-normal";
  viewFileUrl: SafeUrl;
  dataEntity: any;
  userfolder = [];
  folderId: string;
  isPersonal: boolean;
  saveFailed: boolean;
  issaveddata: boolean;
  timerId: any = null;
  constructor(private router: Router,
    private storage: Storage,
    private postdataService: PostdataService,
    public commonService: CommonService,
    public sanitizer: DomSanitizer,
    public el: ElementRef) {

    this.key = this.storage.get('key');
    this.receiverId = this.storage.get('showpostdatareceiverId');
  }

  ngOnInit() {
    this.loading = true;
    this.key && this.receiverId &&
      this.postdataService.getshowpostdata(this.key, this.receiverId).subscribe(data => {

        if (data && data.postDataFiles) {
          let remainingDays = data.postDataFiles[0].expDate && this.commonService.dateDiff(data.postDataFiles[0].expDate);
          if (remainingDays >= 0) {
            this.postdata = data.postDataFields;
            this.dataEntity = data;

            this.postdataService.isSaved(this.dataEntity.id, this.receiverId).subscribe(x => {
              this.issaveddata = x.data;
            }, error => {

            });

          }
          this.loading = false;
        }
      }, error => {
        this.loading = false;

      })
  }

  ngAfterViewInit() {
    this.fabricInitialize();
  }

  converUrl(url) {
    url = config.api.base + '/assets/PreviewDoc/#' + url
    return url;
  }


  openViewDialog(obj) {
    var iframe = this.el.nativeElement.querySelector('.docviewer');
    var progress_container = this.el.nativeElement.querySelector('.docviewer-progress');
    iframe.hidden = true;
    progress_container.hidden = false;
    this.viewDialogComponent.open();
    let fileurl = this.commonService.getFileViewUrl(obj, "/api/postdata/viewfile/");
    iframe.src = '';
    setTimeout(() => {
      this.viewFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileurl);
    }, 100);
    this.timerId = setInterval(() => {
      iframe.src = '';
      this.viewFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileurl);
    }, 2000);
  }
  iframeLoaded() {
    var iframe = this.el.nativeElement.querySelector('.docviewer');
    if (iframe.src.indexOf("https://docs.google.com/gview") != -1 || iframe.src.indexOf('/assets/PreviewDoc/#') != -1) {
      var progress_container = this.el.nativeElement.querySelector('.docviewer-progress');
      iframe.hidden = false;
      progress_container.hidden = true;
      if (this.timerId)
        clearInterval(this.timerId);
    }
  }
  CloseViewDialog() {
    this.viewDialogComponent.close();
    if (this.timerId)
      clearInterval(this.timerId);
  }
  toggleDialogScreen() {
    if (this.viewerClass.indexOf("screen-normal") != -1) {
      this.viewerClass = "docviewer screen-full";
    }
    else {
      this.viewerClass = "docviewer screen-normal";
    }
  }
  openDialog() {
    this.fabricInitialize();
    this.postdataService.getUserFolder(this.dataEntity.senderId).subscribe(data => {
      if (data) {
        this.userfolder = data;
        this.folderId = '';
        this.isPersonal = null;
        this.saveFailed = null;
        this.dialogComponent.open();
      }
    }, error => {
    });

  }

  fabricInitialize() {
    let example = document.querySelector(".docs-DialogExample-blocking");
    let dialog = example.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);

    let viewdialog = document.querySelector(".viewfileDialog");
    let dialogView = viewdialog.querySelector(".ms-Dialog");
    this.viewDialogComponent = new fabric['Dialog'](dialogView);
  }

  selecteddata(folderid, ispersonal) {
    this.folderId = folderid;
    this.isPersonal = ispersonal;
  }

  savedata() {
    this.loading = true;
    this.postdataService.savepostdata(this.folderId, this.isPersonal, this.dataEntity).subscribe(data => {
      if (data) {
        this.loading = false;
        this.saveFailed = false;
        this.issaveddata = true;
        // !this.isPersonal && (this.issaveddata = true);
        this.dialogComponent.close();
      }
    }, error => {
      this.loading = false;
      this.saveFailed = true;
    })

  }

}
