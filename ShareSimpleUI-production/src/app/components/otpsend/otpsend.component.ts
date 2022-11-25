import { PostdataService } from './../../services/postdata.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { CommonService, SharefileService, Storage, AdminService } from "../../services";
import config from "../../config";
import { Receivermail } from "../../models";
declare const fabric: any;

@Component({
  selector: "app-otpsend",
  templateUrl: "./otpsend.component.html",
  styleUrls: ["./otpsend.component.scss"]
})
export class OtpsendComponent implements OnInit {
  otpsendForm: FormGroup;
  otpmatchForm: FormGroup;
  key = "";
  status = "";
  companyId = "";
  requiredConsent = "";
  emails = [];
  sharedata: any;
  selectedReceiver: any;
  optsend: boolean = true;
  otp = "";
  company: any;
  otpexpire: any;
  message: string;
  isLinkExpired: boolean;
  optStep: number;

  constructor(
    private fb: FormBuilder,
    route: ActivatedRoute,
    public commonService: CommonService,
    private storage: Storage,
    public sharefileservice: SharefileService,
    private postDataService: PostdataService,
    private adminService: AdminService,
    private router: Router, private translate: TranslateService
  ) {
    this.key = route.snapshot.params["key"] && route.snapshot.params["key"];
    this.status =
      route.snapshot.params["status"] && route.snapshot.params["status"];
    this.companyId = this.storage.get("companynameurl") && this.storage.get("companynameurl").id;
    if (this.key != "" && this.status != "") {
      this.storage.remove("key");
      this.storage.remove("status");
      this.storage.set("key", this.key);
      this.storage.set("status", this.status);
    }

    this.otpsendForm = this.fb.group({
      email: ["", Validators.required]
    });

    this.otpmatchForm = this.fb.group({
      otppasscode: ["", Validators.required]
    });
  }
  //
  ngOnInit() {
    this.status == "postdata" &&
      this.otpsendForm.controls.email.valueChanges.subscribe(x => {
        let quesryData = this.emails.find(data => data.receiverId == x);
        if (quesryData && quesryData.isFilled) {
          this.isLinkExpired = true;
        } else {
          this.isLinkExpired = false;
        }
      });

    if (this.status == "downloadpermission") {
      this.adminService
        .getconsent(this.companyId, config.consentType.values.ShareData)
        .subscribe(data => {
          if (data.consentText) {
            this.router.navigate([config.routes.requestconsent]);
          } else {
            this.router.navigate([config.routes.downloadfile]);
          }
        });
    } else if (this.status == "showpostdata") {
      this.storage.remove("key");
      let keys = this.key.split("_");
      if (keys.length === 2) {
        this.key = keys[0];
        this.storage.set("key", this.key);
        this.storage.set("showpostdatareceiverId", keys[1]);
      }

      this.sharefileservice.getpostdatashowreceiver(this.key).subscribe(
        data => {
          let receiver = {
            id: data.sender.id,
            receiverEmail: data.sender.email,
            receiverId: data.sender.id
          };
          this.emails.push(receiver);
          this.company = data.company;
          this.storage.set("companynameurl", this.company);
          if (this.company.isOtpRequestdataView === false) {
            this.storage.remove("otp");
            this.storage.set("otp", this.key);
            this.router.navigate([config.routes.showpostdata]);
          }
        },
        error => { }
      );
    } else {
      this.sharefileservice.getReceivers(this.key, this.status).subscribe(
        data => {
          this.sharedata = data.sharedata;
          this.emails = data.receivers;
          this.company = data.company;
          this.storage.set("companynameurl", this.company);
        },
        error => { }
      );
    }
    this.optStep = 1;
    this.selectedReceiver = { mobile: '+8801717890883', receiverEmail: '' };
  }

  ngAfterViewInit() { }

  sendotp() {
    if (this.status == "showpostdata") {
      this.optsend = false;
      this.sharefileservice.getpostdatashowotp(this.key).subscribe(data => {
        if (data) {
          this.otpexpire = data.otpExpDate;
          this.otp = this.key;
        }
      });
    } else {
      let receiverid = this.otpsendForm.value.email;
      if (receiverid) {
        this.optsend = false;
        let requestObj = { ReceiverId: receiverid, OtpStep: this.optStep };
        this.sharefileservice
          .sendOtp(requestObj, this.status)
          .subscribe(data => {
            if (data) {
              let selectedmails = data.receiver;
              this.otpexpire = data.otpExpDate;
              let test = this.commonService.minuteDiff(this.otpexpire);
              this.otp = selectedmails && selectedmails.otp;
              if (data.errorMessage) {
                console.log(data.errorMessage);
              }
            }
          });
      }
    }
  }

  matchotp() {
    if (
      this.otpmatchForm.value.otppasscode.trim() === this.otp.trim() &&
      this.commonService.minuteDiff(this.otpexpire) > 0
    ) {
      this.storage.remove("otp");
      this.storage.remove("optexpire");
      this.storage.set("otp", this.otp);
      this.storage.set("optexpire", this.otpexpire);

      if (this.status == "sharedata0") {
        if (!this.moreVerification()) {
          this.router.navigate([config.routes.viewfile]);
        }
      } else if (this.status == "showpostdata") {
        this.postDataService.receiveByRequestor(this.key, this.storage.get("showpostdatareceiverId")).subscribe(
          (resp) => {
            console.log(resp);
          });
        this.router.navigate([config.routes.showpostdata]);
      } else {
        if (this.status == "sharedata1") {
          if (!this.moreVerification()) {
            this.adminService
              .getconsent(this.companyId, config.consentType.values.ShareData)
              .subscribe(data => {
                console.log('Consent:', data);
                if (data.consentText) {
                  this.router.navigate([config.routes.requestconsent]);
                } else {
                  this.router.navigate([config.routes.downloadfile]);
                }
              });
          }
        } else {
          this.adminService
            .getconsent(this.companyId, config.consentType.values.RequestData)
            .subscribe(data => {
              if (data.consentText) {
                this.router.navigate([config.routes.requestconsent]);
              } else {
                this.router.navigate([config.routes.requestsubmit]);
              }
            });
        }
      }
    } else if (this.commonService.minuteDiff(this.otpexpire) < 0) {
      this.translate
        .get("One time password is expired.")
        .subscribe((res: string) => {
          this.message = res;
        });
    } else {
      this.translate
        .get("Wrong one time password.")
        .subscribe((res: string) => {
          this.message = res;
        });
    }
  }

  fabricInitialize() {
    var SpinnerElements = document.querySelectorAll(".ms-Spinner");
    for (var i = 0; i < SpinnerElements.length; i++) {
      new fabric["Spinner"](SpinnerElements[i]);
    }
  }

  private moreVerification() {
    if (this.optStep === 1 && this.sharedata.smsAuthenticationEnabled) {
      this.message = '';
      this.optStep = 2;
      this.otpmatchForm.reset();
      this.selectedReceiver = this.emails.find(x => x.receiverId == this.otpsendForm.value.email);
      this.sendotp();
      return true;
    } else
      return false;
  }
}
