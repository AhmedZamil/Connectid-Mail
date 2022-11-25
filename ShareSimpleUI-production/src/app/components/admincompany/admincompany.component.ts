import { TranslateService } from "@ngx-translate/core";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import {
  CommonService,
  Storage,
  AdminService,
  AdminUserService
} from "../../services";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import {
  UploadEvent,
  UploadFile,
  FileSystemFileEntry,
  FileSystemDirectoryEntry
} from "ngx-file-drop";
import { Company, Package } from "../../models";
import config from "../../config";
import { error } from "util";
declare const fabric: any;

@Component({
  selector: "app-admincompany",
  templateUrl: "./admincompany.component.html",
  styleUrls: ["./admincompany.component.scss"]
})
export class AdminCompany implements OnInit {
  private companyId = "";
  private company: Company;
  configComp: any;
  daysParam: any;
  public companyPackages: Package[];
  public isSuccess = false;
  public message: string;
  public alert: string;
  companylogoUrl = "";
  loading = false;
  companyForm: FormGroup;
  configForm: FormGroup;
  config = config;
  showerror: boolean = false;
  demandDialogComponent: any;
  public users = [];
  public companyContactId = "";
  public companyContactName = "";
  public companyContactEmail = "";
  public integrationLabel: string;

  constructor(
    private commonService: CommonService,
    private storage: Storage,
    private userservice: AdminService,
    private fb: FormBuilder,
    private adminUserService: AdminUserService,
    private cd: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    this.companyId = this.storage.get("companyId");
    this.loading = true;
    this.loadCompany(this.companyId);
    this.loadConfig(this.companyId);
    this.loaduser(this.companyId);
    this.loadPackages();

    this.companyForm = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      address: ["", Validators.required],
      packageid: [""],
      domain: [""],
      webSite: [""],
      countryCode: ["", Validators.required],
      phone: ["", Validators.required],
      city: ["", Validators.required],
      postalCode: ["", Validators.required],
      country: ["", Validators.required],
      cvr: [""],
      contactpersonid: [""],
      logoUrl: [this.companylogoUrl],
      isOtpRequestdataView: [],
      autoRenewal: [],
      isActive: [],
      isDeleted: [],
      deletedTime: [],
      created: [],
      updated: [],
      crmId: [],
      economicId: [],
      billingStartDate: []
    });

    this.configComp = {};

    this.configForm = this.fb.group({
      id: [""],
      fileAvailability: [
        "",
        [Validators.required, Validators.max(32), Validators.min(1)]
      ],
      companyId: [this.companyId]
    });
    // this.cononChanges();
  }

  ngOnInit() {
    this.daysParam = { value: 30 };
  }

  // cononChanges(): void {
  //   this.configForm.get('fileAvailability').valueChanges.subscribe(val => {
  //     this.daysParam = { value: val };
  //   });
  // }

  comapnySubmit() {
    this.loading = true;
    let data = this.companyForm.value;
    data.logoUrl = this.companylogoUrl;
    data.PrevContactId =
      this.companyContactId != "" ? this.companyContactId : undefined;
    let NewContactId =
      data.contactpersonid != "" ? data.contactpersonid : undefined;
    let compId = data.id;

    this.userservice.editCompany(data.id, data).subscribe(
      data => {
        if (NewContactId) {
          this.userservice
            .updateCompanyContactPerson(
              this.companyContactId != "" ? this.companyContactId : undefined,
              NewContactId
            )
            .subscribe(
              data => {
                if (this.companyContactId != NewContactId) {
                  this.loaduser(compId);
                }
                this.isSuccess = true;
                this.loading = false;
              },
              error => {
                this.loading = false;
              }
            );
        }
        this.isSuccess = true;
        this.translate
          .get("Record updated successfully")
          .subscribe((res: string) => {
            this.message = res;
          });
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }

  configSubmit() {
    this.loading = true;
    let data = this.configForm.value;
    data.companyId = this.companyId;
    this.userservice.editStorage(data.id, data).subscribe(
      data => {
        this.isSuccess = true;
        this.translate
          .get("Record updated successfully")
          .subscribe((res: string) => {
            this.message = res;
          });
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }

  loadPackages() {
    this.userservice.getPackages().subscribe(
      data => {
        this.companyPackages = data;
      },
      error => {
        this.loading = false;
      }
    );
  }

  loadCompany(companyId) {
    this.userservice.getCompany(companyId).subscribe(
      data => {
        this.loading = false;
        this.company = data;
        this.companyForm.controls["id"].setValue(this.company.id);
        this.companyForm.controls["name"].setValue(this.company.name);
        this.companyForm.controls["address"].setValue(this.company.address);
        this.companyForm.controls["packageid"].setValue(this.company.packageId);
        this.companyForm.controls["domain"].setValue(this.company.domain);
        this.companyForm.controls["webSite"].setValue(this.company.webSite);
        this.companyForm.controls["countryCode"].setValue(
          this.company.countryCode ? this.company.countryCode : ""
        );
        this.companyForm.controls["phone"].setValue(this.company.phone);
        this.companyForm.controls["city"].setValue(this.company.city);
        this.companyForm.controls["postalCode"].setValue(
          this.company.postalCode
        );
        this.companyForm.controls["country"].setValue(
          this.company.country ? this.company.country : ""
        );
        this.companyForm.controls["cvr"].setValue(this.company.cvr);
        this.companyForm.controls["isOtpRequestdataView"].setValue(
          this.company.isOtpRequestdataView
        );

        this.companyForm.controls["autoRenewal"].setValue(this.company.autoRenewal);
        this.companyForm.controls["isActive"].setValue(this.company.isActive);
        this.companyForm.controls["isDeleted"].setValue(this.company.isDeleted);
        this.companyForm.controls["deletedTime"].setValue(this.company.deletedTime);
        this.companyForm.controls["created"].setValue(this.company.created);
        this.companyForm.controls["updated"].setValue(this.company.updated);
        this.companyForm.controls["crmId"].setValue(this.company.crmId);
        this.companyForm.controls["economicId"].setValue(this.company.economicId);
        this.companyForm.controls["billingStartDate"].setValue(this.company.billingStartDate);

        //logo
        this.companylogoUrl = data.logoUrl;
      },
      error => {
        this.loading = false;
      }
    );
  }
  loaduser(companyId) {
    this.adminUserService.getAdminUser(companyId).subscribe(
      data => {
        this.loading = false;
        this.users = data;
        let selectedUser = this.users.find(d => d.isContactPerson == true);
        if (selectedUser) {
          this.companyForm.controls["contactpersonid"].setValue(
            selectedUser.id
          );

          this.companyContactId = selectedUser.id;
          this.companyContactName = selectedUser.name;
          this.companyContactEmail = selectedUser.email;
        }
      },
      error => {
        this.loading = false;
      }
    );
  }

  loadConfig(companyId) {
    this.userservice.getStorageByCompId(companyId).subscribe(
      data => {
        this.loading = false;
        this.configComp = data;
        this.configForm.controls["id"].setValue(this.configComp.id);
        this.configForm.controls["fileAvailability"].setValue(
          this.configComp.fileAvailability
            ? this.configComp.fileAvailability
            : this.configComp.configFileAvailability
        );
        this.configForm.controls["companyId"].setValue(
          this.configComp.companyId
        );
        this.daysParam = { value: this.configComp.configFileAvailability };
      },
      error => {
        this.loading = false;
      }
    );
  }

  public dropped(event) {
    if (event.files.length == 1) {
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
    let fext = file.name
      .split(".")
      .pop()
      .toLowerCase();
    if (
      (fext != "png" && fext != "gif" && fext != "jpg" && fext != "jpeg") ||
      file.size > config.ui.logoSize
    ) {
      this.showerror = true;
    } else {
      this.loading = true;
      this.showerror = false;
      this.userservice.updateCompanyLogo(file, this.company.id).subscribe(
        data => {
          if (data) {
            this.loading = false;
            this.companylogoUrl = data.logoUrl;
            this.cd.detectChanges();
          }
        },
        error => {
          this.loading = false;
          this.cd.detectChanges();
        }
      );
    }
  }

  onFileChange(event) {
    let filecount = event.target.files && event.target.files.length;
    if (filecount > 0) {
      for (let i = 0; i < filecount; i++) {
        this.uploadFile(event.target.files[i]);
      }
    }
  }

  confirmSendMail(integrationlabel) {
    let onDemandDialog = document.querySelector(".ondemanddialogue");
    let ondemandconfirmation = onDemandDialog.querySelector(".ms-Dialog");
    this.demandDialogComponent = new fabric["Dialog"](ondemandconfirmation);
    this.integrationLabel = integrationlabel;
    this.demandDialogComponent.open();
  }

  sendMailSPIntegration(integrationtype) {
    this.loading = true;
    let data = this.companyForm.value;
    let currentuseremail = JSON.parse(localStorage.getItem("user")).email;
    if (this.companyContactEmail == "") {
      this.demandDialogComponent.close();
      this.alert = "alert-failed";
      this.translate
        .get("Please add a contact person")
        .subscribe((res: string) => {
          this.message = res;
        });
      return;
    }
    this.userservice
      .sendMailOnDemand(
        data,
        this.companyContactName,
        this.companyContactEmail,
        integrationtype,
        currentuseremail
      )
      .subscribe(
        data => {
          this.demandDialogComponent.close();
          this.isSuccess = true;
          this.translate
            .get("Mail Sent succesfully")
            .subscribe((res: string) => {
              this.message = res;
            });
          this.loading = false;
        },
        error => {
          this.demandDialogComponent.close();
          this.alert = "alert-failed";
          this.translate.get("Mail sending failed").subscribe((res: string) => {
            this.message = res;
          });
          this.loading = false;
          return;
        }
      );
  }
}
