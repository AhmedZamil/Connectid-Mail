import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userfolder',
  templateUrl: './userfolder.component.html',
  styleUrls: ['./userfolder.component.scss']
})
export class UserfolderComponent implements OnInit {
  userId = '';
  companyId = '';
  public userfolders = [];
  private userfolderSource = [];
  filterForm: FormGroup;
  loading = false;

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;
  message: string;
  status: any;

  constructor(
    private adminUserService: AdminUserService,
    private commonService: CommonService,
    public location: Location,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage,
  ) {

    this.userId = route.snapshot.params['id'];
    this.storage.set('folderUser', this.userId);
    this.companyId = this.storage.get('companyId');
    this.status = this.storage.get('userstatus');

    this.filterForm = this.fb.group({
      searchText: ''
    });

    this.loading = true;
    this.loaduser(this.userId);
  }

  ngOnInit() {

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {

      let filterkey = data.toString().trim().toUpperCase();
      this.userfolders = (filterkey == "") ? this.userfolderSource :
        this.userfolderSource.filter(x =>
          x.fileFolder.toString().toUpperCase().includes(filterkey)
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
      data.forEach(element => {
        let days = element.postDataFiles[0] && this.commonService.dateDiff(element.postDataFiles[0].expDate);
        // if (days && (days >= 0)){

        const groupedCollection = element.postDataFiles.reduce((previous, current) => {

          if (!previous[current['fileFolder']]) {
            previous[current['fileFolder']] = [current];
          } else {
            previous[current['fileFolder']].push(current);
          }

          return previous;
        }, {});

        let pFiles = Object.keys(groupedCollection).map(key => ({ key, files: groupedCollection[key] }));

        pFiles.forEach(f => {
          this.userfolders.push({
            senderName: element.senderName,
            noOfFiles: f.files.length,
            sentDate: element.sentDate,
            id: element.id,
            fileFolder: f.key,
            expDate: days
          });
        });

        //}
      });

      this.userfolderSource = this.userfolders;
      this.message = this.userfolders[0] && this.userfolders[0].senderName;
      this.viewcounts();
    }, error => {
      this.loading = false;
    })
  }

  viewcounts() {
    this.entityCount = this.userfolders.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }
}
