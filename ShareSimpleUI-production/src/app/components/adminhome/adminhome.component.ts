import { TranslateService } from "@ngx-translate/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { CommonService, Storage, AuthenticationService } from "../../services";
import { Location } from "@angular/common";
import { ISubscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import config from "../../config";
declare const fabric: any;

@Component({
  selector: "app-adminhome",
  templateUrl: "./adminhome.component.html",
  styleUrls: ["./adminhome.component.scss"]
})
export class AdminhomeComponent implements OnInit {
  private companyId = "";
  private userId = "";
  public usertype: any;
  selectmodule = "user";
  navLinks = [];
  showGoBack = false;
  stopCondition: boolean = true;
  private subscription: ISubscription;
  windowview: any;
  dialogComponent: any;
  authlink = '';

  constructor(
    private router: Router,
    route: ActivatedRoute,
    public location: Location,
    private storage: Storage,
    private authenticationService: AuthenticationService,
    private commonService: CommonService,
    private translate: TranslateService
  ) {
    this.companyId = route.snapshot.params["id"];
    if (this.companyId) {
      this.storage.set("companyId", this.companyId);
    }
    this.userId = route.firstChild.params["value"]["id"];
  }

  ngOnInit() {
    this.getuserbyid();
  }
  loadview() {
    let route = this.location.path(true);
    let user = this.storage.get("user");
    if (route.includes("home")) {
      this.selectmodule = "user";
      if (user && user.isActive && user.company.id && user.type !== null) {
        this.usertype = user.type;
        this.router.navigate([
          config.routes.admin + "/" + this.companyId
        ]);
      } else {
        this.storage.remove("user");
        if (this.authlink === '') {
          this.commonService.getAdAppClientId().subscribe(data => {
            this.authlink = config.api.AuthLink(data);
            window.location.href = this.authlink;
          }, error => {
            console.log(error);
          });
        } else {
          window.location.href = this.authlink;
        }
      }
    } else if (route.includes("log")) {
      this.selectmodule = "logs";
    } else if (
      route.includes("folders") ||
      route.includes("root") ||
      route.includes("file") ||
      route.includes("userfolder") ||
      route.includes("sharedfolder") ||
      route.includes("sharedfolderfile")
    ) {
      this.selectmodule = "root";
      if (user && this.userId && this.userId != "a") {
        user.id != this.userId && (user = null);
      }
      if (!user) {
        this.storage.remove("user");
        window.location.href = this.authlink;
      }
    } else if (route.includes("consent")) {
      this.selectmodule = "consent";
    } else if (route.includes("billing")) {
      this.selectmodule = "billing";
    } else if (route.includes("company")) {
      this.selectmodule = "settings";
    }

    this.showGoBack = this.storage.get("user")
      ? this.storage.get("user").isSuperAdmin
      : false;
  }
  checkcode(code, isRedirect) {
    if (code) {
      // this.windowview.close();
      this.stopCondition = true;
      this.authenticationService
        .getauthwithuserresponse(code)
        .subscribe(data => {
          // data.user.type = true;
          this.storage.set("user", data.user);
          if (data.user.type && data.user.isActive) {
            isRedirect &&
              this.router.navigate([
                config.routes.admin +
                "/" +
                data.user.company.id +
                "_" +
                data.user.type
              ]);
          } else {
            this.dialogComponent.open();
          }
        });
    }
  }
  readCode(isRedirect) {
    this.stopCondition = false;
    this.subscription = Observable.interval(2000)
      .takeWhile(() => !this.stopCondition)
      .subscribe(i => {
        let code = this.storage.get("code");
        if (code) {
          // this.windowview.close();
          this.stopCondition = true;
          this.authenticationService
            .getauthwithuserresponse(code)
            .subscribe(data => {
              // data.user.type = true;
              this.storage.set("user", data.user);
              if (data.user.type && data.user.isActive) {
                isRedirect &&
                  this.router.navigate([
                    config.routes.admin +
                    "/" +
                    data.user.company.id +
                    "_" +
                    data.user.type
                  ]);
              } else {
                this.dialogComponent.open();
              }
            });
        }
      });
  }

  routecheck(data) {
    this.selectmodule = data;
  }
  getuserbyid() {
    if (this.userId && this.userId != "a") {
      this.authenticationService
        .getUserInfoById(this.userId)
        .subscribe(data => {
          this.storage.set("user", data);
          if (data && data.language) {
            this.translate.use(data.language);
          }
          this.loadview();
        });
    } else {
      this.loadview();
    }
  }
}
