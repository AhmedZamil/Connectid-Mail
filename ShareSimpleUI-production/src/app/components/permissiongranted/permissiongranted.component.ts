import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-permissiongranted",
  templateUrl: "./permissiongranted.component.html",
  styleUrls: ["./permissiongranted.component.scss"]
})
export class PermissiongrantedComponent implements OnInit {
  key = "";
  message = "";
  constructor(route: ActivatedRoute, private translate: TranslateService) {
    this.key = route.snapshot.params["key"] && route.snapshot.params["key"];
  }

  ngOnInit() {
    if (this.key == "a") {
      this.translate.get("Permission granted.").subscribe((res: string) => {
        this.message = res;
      });
    } else if (this.key == "u") {
      this.translate
        .get("Your request has been sent.")
        .subscribe((res: string) => {
          this.message = res;
        });
    } else if (this.key == "p") {
      this.translate
        .get("Your data has been sent.")
        .subscribe((res: string) => {
          this.message = res;
        });
    } else {
      this.message = "";
    }

    //this.message = (this.key == 'a') ? 'Permission granted.' : (this.key == 'u') ? 'Your request has been sent.' : (this.key == 'p') ? 'Your data has been sent.' : '';
  }
}
