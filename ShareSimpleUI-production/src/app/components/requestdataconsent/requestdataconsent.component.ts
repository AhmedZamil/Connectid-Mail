import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { CommonService, Storage, AdminService } from "../../services";
import config from "../../config";
import { TranslateService } from "@ngx-translate/core";
declare const fabric: any;

@Component({
  selector: "app-requestdataconsent",
  templateUrl: "./requestdataconsent.component.html",
  styleUrls: ["./requestdataconsent.component.scss"]
})
export class RequestdataconsentComponent implements OnInit {
  consentForm: FormGroup;
  messagesharefiledownload: string;
  messagesharefileview: string;
  messagerequestdata: string;
  message: string;
  status: string;
  companyId: string;
  consentMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storage: Storage,
    public commonService: CommonService,
    public adminService: AdminService,
    private translate: TranslateService
  ) {
    this.consentForm = this.fb.group({
      consent1: [false, this.commonService.truefalseValidator]
    });
    this.translate
      .get(
        "You are about to become a Data Controller. Before you can download this data, you must consent to the terms below"
      )
      .subscribe((res: string) => {
        this.messagesharefiledownload = res;
      });

    this.translate
      .get(
        "You are about to become a Data Owner. Before you can view this data, you must consent to the senders terms."
      )
      .subscribe((res: string) => {
        this.messagesharefileview = res;
      });

    this.translate
      .get("Please read the details of the consent being requested.")
      .subscribe((res: string) => {
        this.messagerequestdata = res;
      });
  }

  ngOnInit() {
    this.status = this.storage.get("status");
    this.companyId =
      this.storage.get("companynameurl") &&
      this.storage.get("companynameurl").id;

    //sharedata1/downloadpermission=download, showpostdata/sharedata0=view,
    if (this.status == "sharedata1" || this.status == "downloadpermission") {
      this.message = this.messagesharefiledownload;
      this.adminService
        .getconsent(this.companyId, config.consentType.values.ShareData)
        .subscribe(data => {
          this.translate.get(data.consentText).subscribe((res: string) => {
            this.consentMessage = res;
          });
          // this.consentMessage = data.consentText;
        });
    } else if (this.status == "sharedata0") {
      this.message = this.messagesharefileview;
      this.adminService
        .getconsent(this.companyId, config.consentType.values.ShareData)
        .subscribe(data => {
          this.translate.get(data.consentText).subscribe((res: string) => {
            this.consentMessage = res;
          });
          //this.consentMessage = data.consentText;
        });
    } else if (this.status == "postdata") {
      this.message = this.messagerequestdata;
      this.adminService
        .getconsent(this.companyId, config.consentType.values.RequestData)
        .subscribe(data => {
          this.translate.get(data.consentText).subscribe((res: string) => {
            this.consentMessage = res;
          });
          // this.consentMessage = data.consentText;
        });
    }
  }

  ngAfterViewInit() {
    this.fabricInitialization();
  }

  fabricInitialization() {
    var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
    for (var i = 0; i < CheckBoxElements.length; i++) {
      new fabric["CheckBox"](CheckBoxElements[i]);
    }

    var ButtonElements = document.querySelectorAll(".ms-Button");
    for (var i = 0; i < ButtonElements.length; i++) {
      new fabric["Button"](ButtonElements[i]);
    }
  }

  confirm() {
    //sharedata1/downloadpermission=download, sharedata0=view,postdata=post,showpostdata=show post data
    if (this.status == "sharedata1" || this.status == "downloadpermission") {
      this.router.navigate([config.routes.downloadfile]);
    } else if (this.status == "sharedata0") {
      this.router.navigate([config.routes.viewfile]);
    } else if (this.status == "postdata") {
      this.router.navigate([config.routes.requestsubmit]);
    }
  }
}
