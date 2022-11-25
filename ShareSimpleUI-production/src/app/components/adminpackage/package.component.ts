import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

declare const fabric: any;

@Component({
  selector: 'app-adminpackage',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})

export class AdminPackageComponent implements OnInit {
  public packages = [];
  private packageSWource = [];
  private companyId = '';
  dialogComponent: any;
  packageForm: FormGroup;
  filterForm: FormGroup;
  loading = false;

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;

  constructor(
    private adminUserService: AdminUserService,
    private userService: AdminService,
    private router: Router,
    route: ActivatedRoute,
    private commonService: CommonService,
    private fb: FormBuilder,
    private storage: Storage, ) {
    this.companyId = this.storage.get('companyId');
    this.loading = true;
    this.loadpackages(this.companyId);

    this.filterForm = this.fb.group({
      searchText: ''
    });

    this.packageForm = this.fb.group({
      id: [''],
      packageName: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  loadpackages(companyId) {
    this.userService.getPackages().subscribe(data => {
      this.loading = false;
      this.packages = data;
      this.packageSWource = this.packages;
      this.viewcounts();
    }, error => {
      this.loading = false;
    })
  }

  ngOnInit() {
    this.filterForm.controls.searchText.valueChanges.subscribe(data => {
    
      let filterkey = data.toString().trim().toUpperCase();
      this.packages = (filterkey == "") ? this.packageSWource :
        this.packageSWource.filter(x =>
          x.packageName.toString().toUpperCase().includes(filterkey) ||
          x.price.toString().toUpperCase().includes(filterkey)
        );

      this.currentPage = 1;
      this.entitystart = 1;
      this.viewcounts();

    });
  }

  openPackagedialog(id?) {
    this.fabricInitialize();
    if (id != undefined) {
      let packageObj = this.packages.find((u) => u.id == id);
      this.packageForm.controls['id'].setValue(packageObj.id);
      this.packageForm.controls['packageName'].setValue(packageObj.packageName);
      this.packageForm.controls['price'].setValue(packageObj.price);

    } else {
      this.packageForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
      this.packageForm.controls['packageName'].setValue('');
      this.packageForm.controls['price'].setValue('');
    }

    this.dialogComponent.open();

  }

  packageSubmit() {
    this.loading = true;
    let data = this.packageForm.value;
    data.id && data.id != '00000000-0000-0000-0000-000000000000' &&
      this.userService.editpackage(data.id, data).subscribe(data => {
        this.dialogComponent.close();
        this.loadpackages(data.companyId);
      })

    data.id == '00000000-0000-0000-0000-000000000000' &&
      this.userService.addpackage(data).subscribe(data => {
        this.dialogComponent.close();
        this.loadpackages(data.companyId);
      })
  }

  ngAfterViewInit() {
    this.fabricInitialize();
  }

  pageChanged(pageNumber: number) {
    this.currentPage = pageNumber;
    this.entitystart = this.commonService.getStart(this.currentPage);
    this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
  }

  fabricInitialize() {
    let userDialog = document.querySelector(".packagedialog");
    let dialog = userDialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
  }

  viewcounts() {
    this.entityCount = this.packages.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

}
