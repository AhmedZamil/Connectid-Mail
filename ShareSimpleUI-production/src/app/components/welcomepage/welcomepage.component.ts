import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import {
  CommonService,
  Storage,
  AdminService,
  AuthenticationService,
  LoggerService
} from "../../services";
import config from "../../config";
import { ISubscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-welcomepage",
  templateUrl: "./welcomepage.component.html",
  styleUrls: ["./welcomepage.component.scss"]
})
export class WelcomepageComponent implements OnInit, OnDestroy {
  authlink = '';
  public codeUnsubscribe: any;
  windowview: any;
  stopCondition: boolean = true;
  private subscription: ISubscription;
  private authsubscription: ISubscription;
  loading: boolean = false;
  companyInactive = false;
  userwindowview: any;
  intervalIndex: number = 1;

  constructor(
    private router: Router,
    public commonService: CommonService,
    public userService: AdminService,
    public authenticationService: AuthenticationService,
    private storage: Storage,
    private logger: LoggerService,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.loading = true;
    let me = this;

    let code = me.storage.get("code");
    let user = this.storage.get("user");
    if (!code) {
      this.authorize()
    } else if (!user) {
      this.setUserInStorage();
    } else {
      this.redirectToUserPage(user);
    }
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
    this.authsubscription && this.authsubscription.unsubscribe();
  }

  readCode() {
    var self: any = this;
    this.stopCondition = false;
    // this.logger.log("starting reading auth code interval. welcomepageCpmt-line-105");
    this.subscription = Observable.interval(2000)
      .takeWhile(() => !this.stopCondition)
      .subscribe(i => {
        // this.logger.log("parsing subscribtion result. Index: " + self.intervalIndex + ". welcomepageCpmt-line-109");
        let code = this.storage.get("code");
        if (code) {
          // this.windowview.close();
          this.stopCondition = true;

          this.authenticationService
            .getauthwithuserresponse(code)
            .subscribe(data => {
              this.storage.set("coderesponse", data);
              this.router.navigate([config.routes.registration]);
            });
        }
        self.intervalIndex++;
      });
  }

  checkcode(code) {
    if (code) {
      this.stopCondition = true;

      this.authenticationService
        .getauthwithuserresponse(code)
        .subscribe(data => {
          this.storage.set("user", data.user);
          this.redirectToUserPage(data.user);
        });
    }
  }

  setUserInStorage() {
    let me = this;
    this.stopCondition = false;
    this.subscription = Observable.interval(2000)
      .takeWhile(() => !this.stopCondition)
      .subscribe(i => {
        let code = me.storage.get("code");
        if (code) {
          this.stopCondition = true;

          this.authenticationService
            .getauthwithuserresponse(code)
            .subscribe(data => {
              if (data.issuccess) {
                this.storage.set("user", data.user);
                if (data.user.language) {
                  this.translate.use(data.user.language);
                }
                this.redirectToUserPage(data.user);
              } else {
                me.storage.remove("code");
                this.authorize();
              }
            });
        }
      });
  }

  redirectToUserPage(user) {
    if (user.company.isActive === false) {
      this.companyInactive = true;
      this.loading = false;
    }
    else if (user.isActive && user.company && user.company.isActive) {
      let returnUrl = this.storage.get('returnUrl');
      if (returnUrl) {
        this.storage.remove('returnUrl');
        this.router.navigate([returnUrl]);
      }
      else if (user.isSuperAdmin) {
        this.router.navigate([config.routes.superuserhome]);
      } else if (user.type === true) {
        this.router.navigate([
          config.routes.admin + "/" + user.company.id
        ]);
      } else if (user.type === false) {
        this.router.navigate([
          config.routes.admin + "/" + user.company.id + "/root/" + user.id
        ]);
      }
    } else {
      this.loading = false;
    }
  }

  authorize() {
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
}
