import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { Package } from '../../models';
declare const fabric: any;
import config from '../../config';
declare const Office: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  companyForm: FormGroup;
  registrationForm: FormGroup;
  packages: Package[] = [];
  company: any;
  loading: boolean = false;
  isregistration: boolean = false;
  companySizeOption = [
    { 'name': '1-10 employees', 'value': '1-10 employees' },
    { 'name': '11-20 employees', 'value': '11-20 employees' },
    { 'name': '21-30 employees', 'value': '21-30 employees' },
    { 'name': '31-40 employees', 'value': '31-40 employees' },
    { 'name': '41-50 employees', 'value': '41-50 employees' }
  ];
  coderesponse: any;
  config = config;
  constructor(private fb: FormBuilder,
    private router: Router,
    public userservice: AdminService,
    public commonService: CommonService,
    private storage: Storage) {
    // this.registrationForm = this.fb.group({
    //   company: ['', Validators.required],
    //   address: '',
    //   companySize: ['', Validators.required]
    // });
    this.registrationForm = this.fb.group({
      id: [''],
      company: ['', this.commonService.noWhitespaceValidator],
      address: ['', this.commonService.noWhitespaceValidator],
      packageid: [''],
      domain: [''],
      webSite: [''],
      countryCode: ['', Validators.required],
      phone: ['', this.commonService.noWhitespaceValidator],
      city: ['', this.commonService.noWhitespaceValidator],
      postalCode: ['', this.commonService.noWhitespaceValidator],
      country: ['', Validators.required],
      cvr: [''],
    });

  }

  ngOnInit() {
    this.coderesponse = this.storage.get('coderesponse');
    let user = this.storage.get('user');
    if (Office && Office.context && Office.context.mailbox && Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress) {
      if (user && user.company && user.company.id) {

        this.loading = true;
        this.isregistration = false;
        this.company = user.company;
        let name = Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.displayName;
        let email = Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress;

        let accesstoken = this.coderesponse.user.shareSimpleToken;
        let expiresOn = this.coderesponse.authenticationResult.expiresOn;
        let extendedExpiresOn = this.coderesponse.authenticationResult.extendedExpiresOn;

        let requestdata = { name: name, type: false, isActive: false, email: email, companyId: user.company.id, accessToken: accesstoken, expiresOn: expiresOn, extendedExpiresOn: extendedExpiresOn };
        this.addnewuser(requestdata);
      } else {
        this.loading = true;
        this.isregistration = true;
        this.userservice.getPackages().subscribe(data => {
          if (data) {
            let orgination = this.coderesponse.graphOrganization && this.coderesponse.graphOrganization.displayName;

            orgination && this.registrationForm.patchValue({
              company: orgination
            });

            this.loading = false;
            this.packages = data;
          }
        }, error => {
          this.loading = false;
        });
      }
    }

  }

  ngAfterViewInit() {
    this.fabricInitialization();
  }

  registrationSubmit() {

    if (Office && Office.context && Office.context.mailbox && Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress) {

      this.loading = true;
      let name = Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.displayName;
      let email = Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress;
      let companyinfo;
      let fromdata = this.registrationForm.value;
      let domain = email.substring(email.lastIndexOf("@") + 1);
      let companydata = {
        name: fromdata.company,
        address: fromdata.address,
        packageId: fromdata.packageprize,
        domain: domain,
        webSite: fromdata.webSite,
        countryCode: fromdata.countryCode,
        phone: fromdata.phone,
        city: fromdata.city,
        postalCode: fromdata.postalCode,
        country: fromdata.country
      };

      this.userservice.addCompany(companydata).subscribe(data => {
        if (data && data.id) {
          this.company = data;
          let accesstoken = this.coderesponse.user.shareSimpleToken;
          let expiresOn = this.coderesponse.authenticationResult.expiresOn;
          let extendedExpiresOn = this.coderesponse.authenticationResult.extendedExpiresOn;

          let requestdata = { name: name, type: true, isActive: true, isContactPerson: true, email: email, companyId: data.id, accessToken: accesstoken, expiresOn: expiresOn, extendedExpiresOn: extendedExpiresOn };
          this.addnewuser(requestdata);
        }
      }, error => {
        this.loading = false;
      });
    }
  }

  fabricInitialization() {
  }

  addnewuser(requestdata) {
    this.userservice.adduser(requestdata).subscribe(data => {
      if (data) {

        this.loading = false;
        if (requestdata.isActive) {
          this.storage.remove('user');
          data.company = this.company;
          this.storage.set('user', data);
          this.router.navigate([config.routes.action]);
        } else {
          this.router.navigate([config.routes.inactiveuser]);
        }
      }
    }, error => {
      this.loading = false;
    });
  }

}
