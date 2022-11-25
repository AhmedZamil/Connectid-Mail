import { CommonService, AdminService, PostdataService, Storage } from '../../services';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { OtpService } from '../../services/otp.service';

import config from "../../config";
import { FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
declare const fabric: any;

@Component({
  selector: 'app-trusted-link',
  templateUrl: './trusted-link.component.html',
  styleUrls: ['./trusted-link.component.scss']
})
export class TrustedLinkComponent implements OnInit {
  tlKey: string;
  company: any;
  trustedLink: any = {};
  consent: any;
  loading: boolean;

  otpSendForm: FormGroup;
  otpMatchForm: FormGroup;
  consentForm: FormGroup;
  tuestedLinkDataForm: FormGroup;

  tuestedLinkFiles: any[];

  constructor(private router: Router, private cd: ChangeDetectorRef,
    route: ActivatedRoute, public location: Location,
    private formBuilder: FormBuilder, private storage: Storage, private otpService: OtpService, private postdataService: PostdataService, private adminService: AdminService, private commonService: CommonService) {
    this.tlKey = route.snapshot.params['tlKey'];
    this.trustedLink.step = 0;
    this.consent = {};

    this.otpSendForm = this.formBuilder.group({
      email: ["", [Validators.required, ValidationService.emailValidator]]
    });

    this.otpMatchForm = this.formBuilder.group({
      otpPasscode: ["", [Validators.required]]
    });

    this.consentForm = this.formBuilder.group({
      consent1: [false, this.commonService.truefalseValidator]
    });

    this.tuestedLinkDataForm = this.formBuilder.group({
      message: ["", [Validators.required]],
      files: [[], [Validators.required]]
    });
  }

  ngOnInit() {
    //this.trustedLink = this.storage.get("trustedLink")
    this.loading = true;
    this.postdataService.getTrustedLink(this.tlKey).subscribe(
      (data) => {
        if (data && data.company) {
          this.company = data.company;
          // if (this.trustedLink == null || this.trustedLink.id !== data.id) {
          this.trustedLink = data;
          this.trustedLink.step = 4;
          //   this.storage.set("trustedLink", this.trustedLink);
          // }
        }
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendotp() {
    if (this.otpSendForm.valid) {
      let postObj = { receiver: this.otpSendForm.value.email, resourceId: this.trustedLink.id };
      this.otpService.sendOtp(postObj).subscribe(
        (data) => {
          console.log(data);
          if (data && data.otpExpDate) {
            this.trustedLink.step = 2;
            //this.storage.set("trustedLink", this.trustedLink);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  matchotp() {
    if (this.otpMatchForm.valid) {
      let postObj = { receiver: this.otpSendForm.value.email, resourceId: this.trustedLink.id, otp: this.otpMatchForm.value.otpPasscode };
      this.otpService.matchOtp(postObj).subscribe(
        (data) => {
          if (data && data.otpMatch) {
            this.adminService
              .getconsent(this.company.id, config.consentType.values.RequestData)
              .subscribe(consent => {
                console.log(consent);
                if (consent.consentText) {
                  this.trustedLink.step = 3;
                  this.consent = consent;
                  //this.storage.set("trustedLink", this.trustedLink);
                  setTimeout(this.fabricInitialization, 1000);
                } else {
                  this.trustedLink.step = 4;
                }
              });
          } else {
            console.log(data.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  consentConfirm() {
    if (this.consentForm.valid) {
      this.trustedLink.step = 4;
    }
  }

  public dropped(event) {
    if (event.files.length > 0 && !this.loading) {
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

  onFileChange(event) {
    let filecount = event.target.files && event.target.files.length;
    if (filecount > 0 && !this.loading) {
      for (let i = 0; i < filecount; i++) {
        this.uploadFile(event.target.files[i]);
      }
    }
  }

  uploadFile(file) {
    // this.loading = true;
    // let selecteddata = this.requestDatas.controls.find(x => x.value.id == id);
    // let uploadFile = { id: selecteddata.value.fieldValue.length + 1, file: file, uploaded: 'uploading' };
    // selecteddata.value.fieldValue.push(uploadFile);
    // selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
    // let uploaddata = { postDataId: this.postdataId, postDataFieldId: id, senderEmail: this.sender.email, file: file, receiverId: this.receiver.id };

    // this.postdataService.uploadfile(uploaddata).subscribe(data => {
    //   if (data) {
    //     this.loading = false;
    //     selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).uploaded = 'uploaded';
    //     selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).id = data.fileId;
    //     selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).fileName = data.fileName;
    //     selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
    //     this.cd.detectChanges();
    //   }
    // }, error => {
    //   this.loading = false;
    //   selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).uploaded = (error.error && error.error.text) || 'failed';
    //   selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
    //   this.cd.detectChanges();
    // });
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
}
