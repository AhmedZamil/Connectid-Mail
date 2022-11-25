import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService, Storage, AdminService, AdminUserService, LoggerService } from '../../services';
import { Router } from '@angular/router';
import config from '../../config';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  isback: boolean = true;
  adminUrl = '';
  myfolderUrl = '';
  isAdmin: boolean = false;
  private subscription: ISubscription;
  private adminsubscription: ISubscription;
  alertcount: number = 0;

  constructor(public location: Location,
    private router: Router,
    private storage: Storage,
    public userService: AdminService,
    private adminUserService: AdminUserService,
    private cd: ChangeDetectorRef,
    public commonService: CommonService,
    private logger: LoggerService) {
  }

  ngOnInit() {
    this.storage.remove('otp');
    this.storage.remove('status');
    this.storageCode();
    this.subscription = this.commonService.activeAdmin.subscribe(x => {
      if (x.company.id && x.isActive) {
        this.isAdmin = x.type;
        this.adminUrl = config.ui.base + 'admin/' + x.company.id + '_' + this.isAdmin;
        this.myfolderUrl = config.ui.base + 'admin/' + x.company.id + '_' + this.isAdmin + '/root/' + x.id;

        this.adminsubscription = this.adminUserService.getUserfolder(x.id).subscribe(data => {
          this.alertcount = 0;
          data.forEach(element => {
            let days = element.postDataFiles[0] && this.commonService.dateDiff(element.postDataFiles[0].expDate);
            if (days && (days >= 0) && (days < 6) && (element.noOfFiles > 0)) {
              this.alertcount = this.alertcount + element.noOfFiles;
            }
          });
        }, error => {
        })

        this.cd.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
    this.adminsubscription && this.adminsubscription.unsubscribe();
  }


  back() {
    this.backcheck(this.location.path(true)) &&
      this.location.back();
  }


  storageCode() {
    let code = this.getParam('code');
    let state = this.getParam('state');
    if (code && code != '') {
      this.storage.set('code', code);
    }
  }

  getParam(name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
      return null;
    } else {
      return decodeURI(results[1]) || 0;
    }
  }

  backcheck(data) {
    if (data) {
      if (data == '/home/welcome' || data == '/home/registration' || data == '/home/actions' || data == '/home/inactiveuser') {
        return false;
      } else {
        return true;
      }
    }
  }
}
