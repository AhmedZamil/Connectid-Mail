import { Component, OnInit } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { CommonService, Storage, AuthenticationService } from '../../services';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import config from '../../config';
declare const fabric: any;

@Component({
  selector: 'app-superuserhome',
  templateUrl: './superuserhome.component.html',
  styleUrls: ['./superuserhome.component.scss']
})
export class SuperuserhomeComponent implements OnInit {
  windowview: any;
  authlink = '';
  stopCondition: boolean = true;
  private subscription: ISubscription;
  dialogComponent: any;
  selectmodule = "customers";
  constructor(
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute,
    public location: Location,
    private authenticationService: AuthenticationService,
    private commonService: CommonService
  ) {

  }

  ngOnInit() {
    let path = this.location.path(true);
    if (path.includes("surveillance")) {
      this.selectmodule = 'surveillance';
    } else if (path.includes("home")) {
      this.selectmodule = 'customers';
    }
  }
  ngOnDestroy() {
    this.subscription &&
      this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.fabricInitialize();
  }

  fabricInitialize() {
    let userDialog = document.querySelector(".userdialog");
    let dialog = userDialog.querySelector(".ms-Dialog");
    this.dialogComponent = new fabric['Dialog'](dialog);
  }
  routecheck(data) {
    this.selectmodule = data;
  }
}
