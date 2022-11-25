import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService, AdminUserService, Storage } from '../../services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import config from '../../config';
import { TranslateService } from '@ngx-translate/core';
declare const fabric: any;

@Component({
  selector: 'app-sharedfolderfile',
  templateUrl: './sharedfolderfile.component.html',
  styleUrls: ['./sharedfolderfile.component.scss']
})
export class SharedfolderfileComponent implements OnInit {
  folderId = '';
  companyId = '';
  public sharedfolderfiles = [];
  private sharedfolderfilesSource = [];
  public users = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: any = {};
  public sharedUser = [];
  public sharedfolder: any;
  filterForm: FormGroup;
  loading = false;
  dialogComponent: any;
  user: any;

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;
  status: any;
  public isCollapsed = true;

  constructor(
    private adminUserService: AdminUserService,
    private commonService: CommonService,
    private router: Router,
    public location: Location,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage,
    private translate: TranslateService
  ) {

    this.folderId = route.snapshot.params['folderid'];
    this.companyId = this.storage.get('companyId');
    this.status = this.storage.get('userstatus');
    this.user = this.storage.get('user');
    this.sharedfolder = {};

    this.filterForm = this.fb.group({
      searchText: ''
    });

    this.loading = true;
    if (this.folderId) {
      this.loaduser(this.folderId);
      this._renderdata(this.folderId);
    }

    this.dropdownSettings = {
      singleSelection: false,
      idField: "id",
      textField: "name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
      searchPlaceholderText: "Search"
    }

    this.translate
      .get("Search")
      .subscribe((res: string) => {
        this.dropdownSettings.searchPlaceholderText = res;
      });

  }

  ngOnInit() {

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {

      let filterkey = data.toString().trim().toUpperCase();
      this.sharedfolderfiles = (filterkey == "") ? this.sharedfolderfilesSource :
        this.sharedfolderfilesSource.filter(x =>
          x.name.toString().toUpperCase().includes(filterkey)
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

  loaduser(id) {
    if (this.user) {
      this.adminUserService.getSharedFolderFile(id, this.user.id).subscribe(data => {
        this.loading = false;
        this.sharedfolderfiles = data;
        this.sharedfolderfiles.forEach(element => {
          element.expDate = this.commonService.dateDiff(element.expDate) && this.commonService.dateDiff(element.expDate);
          element.downloadUrl = config.api.base + '/api/file/downloadblob' + '/' + element.fileId;
          element.type = this.commonService.getFileTypeIcon(element.name)

        });
        this.sharedfolderfilesSource = this.sharedfolderfiles;
        this.viewcounts();
      }, error => {
        this.loading = false;
      });
    } else {
      this.loading = false;
    }

  }

  _renderdata(id) {
    this.adminUserService.getSharedUsers(id).subscribe(data => {
      if (data && data.folder) {
        this.sharedUser = data.users;
        this.sharedfolder = data.folder;
        if (this.sharedfolder.isTrustedLink) {
          this.sharedfolder.trustedLink = config.ui.base + '/#/trustedlink/' + btoa(data.folder.id);
        }
      } else {
        this.router.navigate([
          config.routes.admin + "/" + this.companyId + "/root/" + this.user.id
        ]);
      }
    }, error => {

    });
  }

  viewcounts() {
    this.entityCount = this.sharedfolderfiles.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

  copyLink() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.sharedfolder.trustedLink;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  fabricInitialize() {
    let userDialog = document.querySelector(".userdialog");
    let dialog = userDialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
  }

  managesharing() {
    this.fabricInitialize();
    this.dialogComponent.open();
  }

  removeuser(id) {
    let entity = { userId: id, folderId: this.folderId };
    this.adminUserService.removeshareduser(entity).subscribe(data => {
      if (data) {
        this._renderdata(this.folderId);
        this.isCollapsed = true;
      }
    }, error => {

    });

  }

  adduser() {
    let companyid = this.storage.get('companyId');
    this.isCollapsed &&
      this.adminUserService.getactiveusersbycompany(companyid).subscribe(data => {
        if (data) {
          this.isCollapsed = !this.isCollapsed;
          this.dropdownList = [];
          this.selectedItems = [];
          data.forEach(element => {
            this.user.id != element.id && this.filteruser(element.id) &&
              this.dropdownList.push({
                id: element.id,
                name: element.name
              });
          });
        }
      }, error => {

      });
  }

  filteruser(id) {
    let index = this.sharedUser.findIndex(x => x.id == id);
    return (index == -1) ? true : false;
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  closed() {
    this.dialogComponent.close()
    this.isCollapsed = true;
  }

  saveuser() {
    let entity = { userIds: this.selectedItems, folderId: this.folderId };
    this.adminUserService.addusertosharedfolder(entity).subscribe(data => {
      if (data) {
        this._renderdata(this.folderId);
        this.isCollapsed = true;
      }
    }, error => {

    });

  }

  cancel() {
    this.selectedItems = [];
    this.isCollapsed = true;
  }

}
