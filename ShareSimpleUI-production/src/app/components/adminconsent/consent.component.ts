import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import config from '../../config';
import { TranslateService } from '@ngx-translate/core';

declare const fabric: any;

@Component({
  selector: 'app-adminconsent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})

export class AdminConsentComponent implements OnInit {
  public consents = [];
  private consentSource = [];
  private companyId = '';
  dialogComponent: any;
  consentForm: FormGroup;
  filterForm: FormGroup;
  loading = false;
  message: string;
  showerror: boolean = false;

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;
  config = config;

  constructor(
    private adminService: AdminService,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private commonService: CommonService,
    private storage: Storage, private translate: TranslateService ) {
    this.companyId = this.storage.get('companyId');
    this.loading = true;
    this.loadconsents();

    this.consentForm = this.fb.group({
      id: [''],
      companyId: [this.companyId],
      name: ['', Validators.required],
      consenttext: ['', Validators.required],
      type: ['', Validators.required],
      isActive: ['', Validators.required],
    });

    this.filterForm = this.fb.group({
      searchText: ''
    });
  }

  loadconsents() {
    this.adminService.getconsents(this.companyId).subscribe(data => {
      this.loading = false;
      this.consents = data;
      this.consentSource = this.consents;
      this.viewcounts();
    }, error => {
      this.loading = false;
    })
  }

  ngOnInit() {

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {

      let filterkey = data.toString().trim().toUpperCase();
      this.consents = (filterkey == "") ? this.consentSource :
        this.consentSource.filter(x =>
          x.name.toString().toUpperCase().includes(filterkey) ||
          x.consentText.toString().toUpperCase().includes(filterkey)
        );

      this.currentPage = 1;
      this.entitystart = 1;
      this.viewcounts();

    });

  }

  pageChanged(pageNumber: number) {
    this.currentPage = pageNumber;
    this.entitystart = this.commonService.getStart(this.currentPage);
    this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
  }

  openConsentdialog(id?) {
    this.showerror = false;
    this.fabricInitialize();
    if (id != undefined) {
      this.translate.get('Edit Consent').subscribe((res: string) => {
        this.message = res;
      });
      let consentObj = this.consents.find((u) => u.id == id);
      this.consentForm.controls['id'].setValue(consentObj.id);
      this.consentForm.controls['name'].setValue(consentObj.name);
      this.consentForm.controls['consenttext'].setValue(consentObj.consentText);
      this.consentForm.controls['type'].setValue(consentObj.type);
      this.consentForm.controls['isActive'].setValue(consentObj.isActive);

    } else {
      this.translate.get('Add Consent').subscribe((res: string) => {
        this.message = res;
      });
      this.consentForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
      this.consentForm.controls['name'].setValue('');
      this.consentForm.controls['consenttext'].setValue('');
      this.consentForm.controls['type'].setValue(config.consentType.values.RequestData);
      this.consentForm.controls['isActive'].setValue(false);
    }

    this.dialogComponent.open();

  }

  packageSubmit() {
    this.loading = true;
    let data = this.consentForm.value;
    data.id && data.id != '00000000-0000-0000-0000-000000000000' &&
      this.adminService.editconsent(data.id, data).subscribe(data => {
        if (data == 'Falied'){
          this.showerror = true;
          this.loading = false;
        } else {
          this.dialogComponent.close();
          this.loadconsents();
        }
       
      })

    data.id == '00000000-0000-0000-0000-000000000000' &&
      this.adminService.addconsent(data).subscribe(data => {
        this.dialogComponent.close();
        this.loadconsents();
      })
  }

  ngAfterViewInit() {
    this.fabricInitialize();
  }

  fabricInitialize() {
    let consentdialog = document.querySelector(".consentdialog");
    let dialog = consentdialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
  }

  viewcounts() {
    this.entityCount = this.consents.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

}
