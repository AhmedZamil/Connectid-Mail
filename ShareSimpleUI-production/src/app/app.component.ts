import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "../app/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private storage: Storage, public translate: TranslateService) {
    translate.setDefaultLang("en-US");
    let user = this.storage.get("user");
    if (user && user.language) {
      this.translate.use(user.language);
    } else {
      let browserLanguage = translate.getBrowserCultureLang();
      if (browserLanguage == "en") browserLanguage = "en-US";
      if (browserLanguage == "da") browserLanguage = "da-DK";
      if (browserLanguage) {
        translate.use(browserLanguage);
      } else {
        translate.use("en-US");
      }
    }
  }

  ngOnInit() {}
}
