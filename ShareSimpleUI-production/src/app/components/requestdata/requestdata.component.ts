import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, PostdataService, LoggerService } from '../../services';
import { ISubscription } from "rxjs/Subscription";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import config from '../../config';
declare const Office: any;

@Component({
  selector: 'app-requestdata',
  templateUrl: './requestdata.component.html',
  styleUrls: ['./requestdata.component.scss']
})
export class RequestdataComponent implements OnInit {

  requestDataForm: FormGroup;
  otplink = config.ui.base + 'otp';
  private subscription: ISubscription;
  stopCondition: boolean = true;
  to: string[] = [];
  cc: string[] = [];
  loading: boolean = false;
  id: string = '';
  istocc: boolean = false;
  intervalIndex: number = 1;

  constructor(private fb: FormBuilder,
    private router: Router,
    public commonService: CommonService,
    public postdataservice: PostdataService,
    private logger: LoggerService
  ) {
    let initrequestDataObject = this.fb.group({
      fieldName: ['', this.commonService.noWhitespaceValidator],
      fieldType: ['', Validators.required]
    });

    this.requestDataForm = this.fb.group({
      requestDataList: this.fb.array([initrequestDataObject])
    });

  }

  ngOnInit() {
    var self = this;
    this.requestDatas;
    // this.logger.log("starting toccread interval. requestdatacmpt-line-50");
    this.stopCondition = (Office && Office.context && Office.context.displayLanguage) ? false : true;
    this.subscription = Observable.interval(2000)
      .takeWhile(() => !this.stopCondition)
      .subscribe(i => {
        // this.logger.log("parsing tcc read interval result. Interval Index: " + self.intervalIndex +" requestdatacmpt-line-55");
        this.toccRead()
      });

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get requestDatas(): FormArray {
    return this.requestDataForm.get('requestDataList') as FormArray;
  };

  addRequestDatas() {
    let initrequestDataObject = this.fb.group({
      fieldName: ['', this.commonService.noWhitespaceValidator],
      fieldType: ['', Validators.required]
    });
    this.requestDatas.push(initrequestDataObject);
  }


  addInsertLink() {
    let message = "The following information is being requested from you. Use the 'Enter data' button below to share this information securely.";
    let self = this;

    let dataname = '';
    this.requestDatas.value.forEach(element => {
      dataname = dataname + '<div style="padding-bottom: 5px;font-size:13px;">' + element.fieldName + '</div>'
    });

    this.postdataservice.getPostDataLink(this.id, 0).subscribe(x => {
      if (x && x.key) {
        this.otplink = this.otplink + '/' + x.key + '/postdata';
        let link = '<div style="padding-top: 10px;padding-bottom: 10px;"><a style="text-decoration: none" href=' + this.otplink + ' ><span style="background-color: #0078d7;color: white;height: 32px;min-width: 80px;padding: 1px 10px 2px;">&nbsp;Enter data&nbsp;</span></a>' +
          '<div style="color:#B3B3B3;font-size:10px;text-align: right;padding-right: 5px;">Powered by <b>Connectid&nbsp;&nbsp;</b></div>' +
          '</div>';

        let item = Office.context.mailbox.item;
        item.body.getTypeAsync(
          function (result) {
            if (result.status == Office.AsyncResultStatus.Failed) {
            }
            else {

              let htmlcontent =
                '<div style="background-color: #f4f4f4;">' +
                '<div style="font-weight: 550;padding-bottom: 10px;">' + message + '</div>'
                + dataname
                + link
                + '</div>';

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
                      self.id && self.updatereceiver();
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
    });


  }

  removefile(index) {
    this.requestDatas.removeAt(index);
  }

  uploadrequestdata() {
    let postdata = this.requestDatas.value;
    if (Office && Office.context && Office.context.mailbox && Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress) {

      if (postdata) {
        this.loading = true;
        let uploaddata = { senderEmail: Office.context.mailbox.userProfile.emailAddress, postDataFields: postdata };
        this.postdataservice.addPostData(uploaddata).subscribe(data => {
          if (data && data.id) {
            this.loading = false;
            this.id = data.id;
            this.addInsertLink();
          }
        }, error => {
          this.loading = false;
        });
      }

    }
  }

  toccRead() {
    let self = this;
    Office.context.mailbox.item.to.getAsync(result => {
      let email = result.value.map(x => x.emailAddress);
      this.to = email;
      this.istocc = ((this.to.length > 0) || (this.cc.length > 0)) ? true : false;
    });

    Office.context.mailbox.item.cc.getAsync(result => {
      let email = result.value.map(x => x.emailAddress)
      this.cc = email;
      this.istocc = ((this.to.length > 0) || (this.cc.length > 0)) ? true : false;
    });
  }

  updatereceiver() {
    this.loading = true;
    let receiver: string[] = [];
    (this.to.length > 0) &&
      (receiver = this.to);

    (this.cc.length > 0) &&
      (receiver = receiver.concat(this.cc));

    let updatedata = { receiverEmails: receiver, postDataId: this.id };
    this.postdataservice.updatereceivers(updatedata).subscribe(data => {
      this.loading = false;
      data && this.router.navigate([config.routes.confirm]);
    }, error => {
      this.loading = false;
    });
  }

}
