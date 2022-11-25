import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {

  public folders = [];
  private folderSource = [];
  dialogComponent: any;
  filterForm: FormGroup;
  loading = false;
  private companyId = '';

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;
  message: string;
  status: any;

  constructor(private adminUserService: AdminUserService,
    private commonService: CommonService,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage, ) {

    this.filterForm = this.fb.group({
      searchText: ''
    });

    this.companyId = this.storage.get('companyId');
    this.status = this.storage.get('userstatus');
    this.loading = true;
    this.loaduser(this.companyId);

  }

  ngOnInit() {

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {

      let filterkey = data.toString().trim().toUpperCase();
      this.folders = (filterkey == "") ? this.folderSource :
        this.folderSource.filter(x =>
          x.userModel.name.toString().toUpperCase().includes(filterkey)
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

  loaduser(companyId) {
    this.adminUserService.getFolders(companyId).subscribe(data => {
      this.loading = false;
      if (this.status == 'a') {
        this.folders = data;
      } else {
        this.folders = data.filter(x => x.userModel.id == this.status);
      }
      this.folderSource = this.folders;
      this.viewcounts();
    }, error => {
      this.loading = false;
    })
  }

  viewcounts() {
    this.entityCount = this.folders.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

  sumfiles(files) {
    let filecount = 0;
    files.forEach(element => {
      filecount = filecount + element.noOfFiles;
    });
    return filecount;
  }

}
