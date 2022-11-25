import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare const fabric: any;

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.scss']
})
export class AdminuserComponent implements OnInit {

  public users = [];
  private userSource = [];
  private companylist = [];
  private companyId = '';
  private selectedUserId = '';

  loggedInUser;
  dialogComponent: any;
  userForm: FormGroup;
  filterForm: FormGroup;
  loading = false;
  showGoBack = false;

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;
  message: string;
  showerror: boolean = false;

  constructor(
    private adminUserService: AdminUserService,
    private userService: AdminService,
    private commonService: CommonService,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage, private translate: TranslateService) {

    this.companyId = this.storage.get('companyId');
    this.loading = true;
    this.loaduser(this.companyId);

    this.filterForm = this.fb.group({
      searchText: ''
    });

    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      companyId: [this.companyId],
      type: [false],
      isActive: [true]
    });
  }

  loaduser(companyId) {
    this.adminUserService.getAdminUser(companyId).subscribe(data => {
      this.loading = false;
      this.users = data.filter(function (u) {
        return u.isDeleted !== true;
      });
      this.userSource = this.users;
      this.viewcounts();
    }, error => {
      this.loading = false;
    })
  }

  ngOnInit() {
    this.loggedInUser = this.storage.get('user');
    this.showGoBack = this.loggedInUser ? this.loggedInUser.isSuperAdmin : false;

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {

      let filterkey = data.toString().trim().toUpperCase();
      this.users = (filterkey == "") ? this.userSource :
        this.userSource.filter(x =>
          x.name.toString().toUpperCase().includes(filterkey) ||
          x.email.toString().toUpperCase().includes(filterkey)
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

  openUserdialog(id?) {

    this.fabricInitialize();
    if (id != undefined) {
      this.translate.get('Edit User').subscribe((res: string) => {
        this.message = res;
      });
      let user = this.users.find((u) => u.id == id);
      this.userForm.controls['id'].setValue(user.id);
      this.userForm.controls['name'].setValue(user.name);
      this.userForm.controls['email'].setValue(user.email);
      this.userForm.controls['type'].setValue(user.type);
      this.userForm.controls['isActive'].setValue(user.isActive);
    } else {
      this.translate.get('Add User').subscribe((res: string) => {
        this.message = res;
      });
      this.userForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
      this.userForm.controls['name'].setValue('');
      this.userForm.controls['email'].setValue('');
      this.userForm.controls['type'].setValue(false);
      this.userForm.controls['isActive'].setValue(true);
    }

    this.dialogComponent.open();
    this.showerror = false;
  }

  userSubmit() {
    this.loading = true;
    this.showerror = false;
    let data = this.userForm.value;
    if (data.id && data.id != '00000000-0000-0000-0000-000000000000') {
      data.updatedBy = this.loggedInUser.id;
      this.userService.editUser(data.id, data).subscribe(data => {
        if (data.isExists) {
          this.showerror = true;
          this.loading = false;
        }
        else {
          this.dialogComponent.close();
          this.showerror = false;
          this.loaduser(data.companyId);
        }
      });
    } else {
      data.createdBy = this.loggedInUser.id;
      this.userService.adduser(data).subscribe(data => {
        if (data.isExists) {
          this.showerror = true;
          this.loading = false;
        }
        else {
          this.dialogComponent.close();
          this.showerror = false;
          this.loaduser(data.companyId);
        }
      });
    }
  }

  ngAfterViewInit() {
    this.fabricInitialize();
  }

  fabricInitialize() {
    let userDialog = document.querySelector(".userdialog");
    let dialog = userDialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
  }

  viewcounts() {
    this.entityCount = this.users.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

  openDeleteConfirmationDialog(id) {
    let userDialog = document.querySelector(".deleteConfirmationDialog");
    let dialog = userDialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
    this.selectedUserId = id;
    this.dialogComponent.open();
  }

  userDelete() {
    this.userService.deleteUser(this.selectedUserId).subscribe(
      (res) => {
        console.log(res);
        let userIndex = this.users.findIndex((u) => u.id == this.selectedUserId);
        this.users.splice(userIndex, 1);
        this.dialogComponent.close();
      },
      (error) => { console.log(error) }
    );
  }

}
