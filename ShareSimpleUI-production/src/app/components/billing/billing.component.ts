import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  public billings = [];
  private billingsSource = [];
  filterForm: FormGroup;
  loading = false;
  companyId = '';

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;

  constructor(
    private adminUserService: AdminUserService,
    private commonService: CommonService,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage,
  ) {

    //this.userId = route.snapshot.params['id'];
    this.companyId = this.storage.get('companyId');

    this.filterForm = this.fb.group({
      searchText: ''
    });

    this.loading = true;
    this.loaduser(this.companyId);
  }

  ngOnInit() {

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {

      let filterkey = data.toString().trim().toUpperCase();
      this.billings = (filterkey == "") ? this.billingsSource :
        this.billingsSource.filter(x =>
          x.yearmonth.toString().toUpperCase().includes(filterkey) ||
          x.noOfShared.toString().toUpperCase().includes(filterkey) ||
          x.noOfPostData.toString().toUpperCase().includes(filterkey) ||
          x.noOfUsers.toString().toUpperCase().includes(filterkey)
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

  loaduser(companyid) {
    this.adminUserService.getBillingInfo(companyid).subscribe(data => {
      this.loading = false;
      this.billings = data;
      this.billingsSource = this.billings;
      this.viewcounts();
    }, error => {
      this.loading = false;
    })
  }

  viewcounts() {
    this.entityCount = this.billings.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

}
