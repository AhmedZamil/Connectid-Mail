import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import config from '../../config';

@Component({
  selector: 'app-userfiles',
  templateUrl: './userfiles.component.html',
  styleUrls: ['./userfiles.component.scss']
})
export class UserfilesComponent implements OnInit {

  folderId = '';
  folderUser = '';
  public userfiles = [];
  private userfilesSource = [];
  filterForm: FormGroup;
  loading = false;
  modifieddate: any;
  user: any;

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;
  companyId: '';
  messageSender: string;
  messageFileFolder: string;
  status: any;

  constructor(
    private adminUserService: AdminUserService,
    private commonService: CommonService,
    private router: Router,
    public location: Location,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage,
  ) {

    this.folderId = route.snapshot.params['id'];
    this.messageFileFolder = route.snapshot.params['foldername'];
    this.companyId = this.storage.get('companyId');
    this.folderUser = this.storage.get('folderUser');
    this.status = this.storage.get('userstatus');
    this.user = this.storage.get('user');

    this.filterForm = this.fb.group({
      searchText: ''
    });

    this.loading = true;
    this.folderUser &&
      this.loaduser(this.folderUser);
  }

  ngOnInit() {

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {

      let filterkey = data.toString().trim().toUpperCase();
      this.userfiles = (filterkey == "") ? this.userfilesSource :
        this.userfilesSource.filter(x =>
          x.name.toString().toUpperCase().includes(filterkey)
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

  loaduser(userid) {

    this.adminUserService.getUserfolder(userid).subscribe(data => {
      this.loading = false;
      let files = [];
      files = data.filter(x => x.id === this.folderId);
      files.forEach(file => {
        this.modifieddate = file && file.sentDate && file.sentDate;
        if (file && file.postDataFiles) {
          this.messageSender = file.senderName;
          if (this.user.id == userid) {
            let userfiles = file.postDataFiles.filter(f => f.fileFolder == this.messageFileFolder);
            userfiles.forEach(element => {
              element.expDate = this.commonService.dateDiff(element.expDate) && this.commonService.dateDiff(element.expDate)
              element.downloadUrl = config.api.base + '/api/file/downloadblob' + '/' + element.fileId;
              element.type = this.commonService.getFileTypeIcon(element.name)
            });
            if (userfiles.length > 0)
              this.userfilesSource = this.userfiles = userfiles;
          }
        }

        this.viewcounts();
      });
    }, error => {
      this.loading = false;
    })
  }

  viewcounts() {
    this.entityCount = this.userfiles.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

}
