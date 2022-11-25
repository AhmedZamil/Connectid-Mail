import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rootfolder',
  templateUrl: './rootfolder.component.html',
  styleUrls: ['./rootfolder.component.scss']
})
export class RootfolderComponent implements OnInit {
  loggedInUser: any;
  loggedInCompany: any;
  public rootfolders: any;
  loading = false;
  private companyId = '';
  private status = '';

  message: string;

  constructor(private adminUserService: AdminUserService,
    private commonService: CommonService,
    private router: Router,
    route: ActivatedRoute,
    private storage: Storage, private companyService: CompanyService) {

    this.status = route.snapshot.params['id'];
    this.storage.remove('userstatus');
    this.storage.set('userstatus', this.status);
    this.companyId = this.storage.get('companyId');
    this.loading = true;
    this.loggedInUser = this.storage.get('user');
    this.loadCompanyInfo(this.companyId);
    this.loadFolders(this.companyId);
  }

  ngOnInit() {
  }

  loadFolders(companyId) {
    this.adminUserService.getsharedfolderroot(companyId, this.status).subscribe(data => {
      this.loading = false;
      this.rootfolders = data;
    }, error => {
      this.loading = false;
    })
  }

  loadCompanyInfo(companyId) {
    this.companyService.getCompany(companyId).subscribe(
      (data) => {
        this.loggedInCompany = data;
      },
      error => {

      }
    );
  }

}
