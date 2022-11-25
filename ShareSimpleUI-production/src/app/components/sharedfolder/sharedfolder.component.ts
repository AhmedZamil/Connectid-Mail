import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService, AdminUserService, Storage } from '../../services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
declare const fabric: any;

@Component({
  selector: 'app-sharedfolder',
  templateUrl: './sharedfolder.component.html',
  styleUrls: ['./sharedfolder.component.scss']
})
export class SharedfolderComponent implements OnInit {
  companyId = '';
  company: any;
  sharedfolders = [];
  sharedfolderSource = [];
  filterForm: FormGroup;
  folderForm: FormGroup;
  loading = false;
  dialogComponent: any;
  deletedialogComponent: any;
  deletedRow: any;
  user: any;
  isTrustedLink: boolean;
  linkConfig: any;

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;
  message: string;
  status: any;
  deletemessage: any;

  constructor(
    private adminUserService: AdminUserService,
    private commonService: CommonService,
    private companyService: CompanyService,
    public location: Location,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage, private translate: TranslateService
  ) {

    this.companyId = this.storage.get('companyId');
    this.user = this.storage.get('user');
    this.status = (this.user && this.user.type === true) ? 'a' : this.storage.get('userstatus');

    this.folderForm = this.fb.group({
      id: [''],
      folderName: ['', this.commonService.noWhitespaceValidator],
      companyId: [this.companyId]
    });

    this.filterForm = this.fb.group({
      searchText: ''
    });

    this.loading = true;
    this.linkConfig = {};
    this.loadSharedfolders(this.companyId, this.status);
    this.isTrustedLink = route.snapshot.url.findIndex(function (x) { return x.path === 'tl' }) > -1 ? true : false;
    if (this.isTrustedLink) {
      this.companyService.getCompany(this.companyId).subscribe(
        (data) => {
          if (data) {
            this.company = data;
          }
        },
        error => {
          console.log(error);
        }
      );

      this.commonService.getAppLinkConfig().subscribe(
        (data) => {
          this.linkConfig = data;
        },
        error => {
          console.log(error);
        });
    }
  }

  ngOnInit() {
    this.filterForm.controls.searchText.valueChanges.subscribe(data => {
      let filterkey = data.toString().trim().toUpperCase();
      this.sharedfolders = (filterkey == "") ? this.sharedfolderSource :
        this.sharedfolderSource.filter(x =>
          x.adminFolder.folderName.toString().toUpperCase().includes(filterkey) ||
          x.noOfFiles.toString().toUpperCase().includes(filterkey) ||
          x.sharedWith.toString().toUpperCase().includes(filterkey)
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

  loadSharedfolders(id, status) {
    this.adminUserService.getSharedFolder(id, status).subscribe(data => {
      this.loading = false;
      if (data) {
        if (this.isTrustedLink) {
          this.sharedfolders = data.filter(x => x.adminFolder.isTrustedLink === true);
        } else {
          this.sharedfolders = data.filter(x => (x.adminFolder.isTrustedLink === false || x.adminFolder.isTrustedLink === null));
        }
        this.sharedfolderSource = this.sharedfolders;
        this.viewcounts();
      }
    }, error => {
      this.loading = false;
    })
  }

  viewcounts() {
    this.entityCount = this.sharedfolders.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

  createFolder(data?) {
    this.fabricInitialize();
    if (data != undefined) {
      if (this.isTrustedLink) {
        this.translate
          .get("Edit Trusted Link")
          .subscribe((res: string) => {
            this.message = res;
          });
      }
      else {
        this.translate
          .get("Edit Folder")
          .subscribe((res: string) => {
            this.message = res;
          });
      }
      this.folderForm.controls['id'].setValue(data.id);
      this.folderForm.controls['folderName'].setValue(data.folderName);
    } else {
      if (this.isTrustedLink) {
        this.translate
          .get("Add Trusted Link")
          .subscribe((res: string) => {
            this.message = res;
          });
      } else {
        this.translate
          .get("Add Folder")
          .subscribe((res: string) => {
            this.message = res;
          });
      }
      this.folderForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
      this.folderForm.controls['folderName'].setValue('');
    }

    this.dialogComponent.open();
  }

  addfolderdata() {
    this.loading = true;
    let data = this.folderForm.value;
    if (data.id && data.id != '00000000-0000-0000-0000-000000000000') {
      this.adminUserService.updatefolder(data.id, data).subscribe(data => {
        this.dialogComponent.close();
        this.loadSharedfolders(this.companyId, this.status);
      });
    } else if (data.id == '00000000-0000-0000-0000-000000000000') {
      data.isTrustedLink = true;
      this.adminUserService.addnewfolder(data).subscribe(data => {
        this.dialogComponent.close();
        this.loadSharedfolders(this.companyId, this.status);
      });
    }
  }

  fabricInitialize() {
    let dialogTemplate = document.querySelector(".folderDialog");
    let dialog = dialogTemplate.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);

    let removeDialog = document.querySelector(".deletefolder");
    let remove = removeDialog.querySelector(".ms-Dialog");
    this.deletedialogComponent = new fabric['Dialog'](remove);
  }

  removefolder() {
    let test = this.deletedRow;
    this.adminUserService.deleteSharedFolder(this.deletedRow.id).subscribe(data => {
      if (data.isSuccess) {
        this.deletedialogComponent.close();
        this.loadSharedfolders(this.companyId, this.status);
      } else {
        this.deletemessage = data;
      }
    });
  }

  deleteFolder(data) {
    this.deletemessage = null;
    this.deletedRow = data;
    this.fabricInitialize();
    this.deletedialogComponent.open();
  }

}
