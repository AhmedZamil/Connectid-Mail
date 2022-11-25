import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

declare const fabric: any;

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.scss']
})
export class SuperuserComponent implements OnInit {
  lang: string;
  public company = [];
  private companySource = [];

  selectedCustomerId;
  loggedInUser;
  dialogComponent: any;
  companyForm: FormGroup;
  filterForm: FormGroup;
  loading = false;
  customerSaving = false;
  subNunsubcribing = false;
  isEdit: boolean;
  priceUnit: string[] = ['EUR', 'DKK', 'USD'];

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;

  constructor(
    private adminService: AdminService,
    private commonService: CommonService,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage
  ) {

    this.filterForm = this.fb.group({
      searchText: '',
      activeOnly: true
    });

    this.companyForm = this.fb.group({
      id: [''],
      name: ['', this.commonService.noWhitespaceValidator],
      address: ['', this.commonService.noWhitespaceValidator],
      packageId: [''],
      domain: ['', this.commonService.noWhitespaceValidator],
      transactionPrice: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0)]],
      priceUnit: ['', Validators.required],
      promotionCode: [''],
      isActive: ['', Validators.required]
    });
  }

  loadCompanies() {
    this.loggedInUser = this.storage.get('user');

    this.adminService.getCompanyList(this.filterForm.value.activeOnly).subscribe(data => {
      this.loading = false;
      this.companySource = data;
      this.company = this.companySource;
      this.viewcounts();
    }, error => {
      this.loading = false;
    })
  }

  ngOnInit() {
    this.loading = true;
    this.loadCompanies();

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {

      let filterkey = data.toString().trim().toUpperCase();
      this.company = (filterkey == "") ? this.companySource :
        this.companySource.filter(x =>
          x.isDeleted !== true &&
          (x.name.toString().toUpperCase().includes(filterkey) ||
            (x.adminUser.name && x.adminUser.name.toString().toUpperCase().includes(filterkey)) ||
            (x.adminUser.email && x.adminUser.email.toString().toUpperCase().includes(filterkey)))
        );
      this.currentPage = 1;
      this.entitystart = 1;
      this.viewcounts();
    });

  }

  ngAfterViewInit() {
    this.fabricInitialize();
  }

  pageChanged(pageNumber: number) {
    this.currentPage = pageNumber;
    this.entitystart = this.commonService.getStart(this.currentPage);
    this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
  }

  openUserdialog(id?) {

    this.fabricInitialize();
    if (id != undefined) {
      this.isEdit = true;
      let comapny = this.company.find((u) => u.id == id);
      this.companyForm.controls['id'].setValue(comapny.id);
      this.companyForm.controls['name'].setValue(comapny.name);
      this.companyForm.controls['domain'].setValue(comapny.domain);
      this.companyForm.controls['address'].setValue(comapny.address);
      this.companyForm.controls['packageId'].setValue(comapny.package.id);
      this.companyForm.controls['transactionPrice'].setValue(comapny.package.transactionPrice);
      this.companyForm.controls['price'].setValue(comapny.package.price);
      this.companyForm.controls['priceUnit'].setValue(comapny.package.priceUnit);
      this.companyForm.controls['isActive'].setValue(comapny.isActive);
      this.companyForm.controls['promotionCode'].setValue(comapny.promotionCode);
    } else {
      this.isEdit = false;
      this.companyForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
      this.companyForm.controls['name'].setValue('');
      this.companyForm.controls['address'].setValue('');
      this.companyForm.controls['packageId'].setValue('00000000-0000-0000-0000-000000000000');
      this.companyForm.controls['domain'].setValue('');
      this.companyForm.controls['transactionPrice'].setValue(0);
      this.companyForm.controls['price'].setValue(0);
      this.companyForm.controls['priceUnit'].setValue('EUR');
      this.companyForm.controls['isActive'].setValue(false);
      this.companyForm.controls['promotionCode'].setValue('');
    }

    this.dialogComponent.open();

  }

  userSubmit() {
    this.customerSaving = true;
    let data = this.companyForm.value;
    data.id && data.id != '00000000-0000-0000-0000-000000000000' && this.adminService.editCompanyPackage(data.id, data).subscribe(data => {
      this.dialogComponent.close();
      this.loadCompanies();
      this.customerSaving = false;
    },
      error => {
        this.customerSaving = false;
        console.log(error);
      }
    );

    data.id == '00000000-0000-0000-0000-000000000000' && this.adminService.addCompany(data).subscribe(data => {
      this.dialogComponent.close();
      this.loadCompanies();
      this.customerSaving = false;
    },
      error => {
        this.customerSaving = false;
        console.log(error);
      }
    );
  }

  fabricInitialize() {
    let userDialog = document.querySelector(".userdialog1");
    let dialog = userDialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
  }

  viewcounts() {
    this.entityCount = this.company.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

  openUnsubscribeDialog(id) {
    let userDialog = document.querySelector(".companyUnsubscribeDialog");
    let dialog = userDialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
    this.selectedCustomerId = id;
    this.dialogComponent.open();
  }
  openResubscribeDialog(id) {
    let userDialog = document.querySelector(".companyResubscribeDialog");
    let dialog = userDialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
    this.selectedCustomerId = id;
    this.dialogComponent.open();
  }
  unsubscribeCustomer() {
    this.subNunsubcribing = true;
    this.adminService.unsubscribeCompany(this.selectedCustomerId).subscribe(
      (res) => {
        console.log('Customer unsubscribed successfully.');
        this.loadCompanies();
        let customerIndex = this.company.findIndex((c) => {
          return c.id == this.selectedCustomerId;
        });
        this.company.splice(customerIndex, 1);
        this.subNunsubcribing = false;
        this.dialogComponent.close();
      },
      (error) => {
        this.subNunsubcribing = false;
        console.log(error);
      }
    );
  }
  resubscribeCustomer() {
    this.subNunsubcribing = true;
    this.adminService.resubscribeCompany(this.selectedCustomerId).subscribe(
      (res) => {
        console.log('Customer resubscribed successfully.');
        this.loadCompanies();
        let customerIndex = this.company.findIndex((c) => {
          return c.id == this.selectedCustomerId;
        });
        this.company.splice(customerIndex, 1);
        this.subNunsubcribing = false;
        this.dialogComponent.close();
      },
      (error) => {
        this.subNunsubcribing = false;
        console.log(error);
      }
    );
  }
}
