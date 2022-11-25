import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { SharefileService } from "../../services";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-reject",
  templateUrl: "./reject.component.html",
  styleUrls: ["./reject.component.scss"]
})
export class RejectComponent implements OnInit {
  dkey = "";
  message: string;
  loading: boolean = false;

  constructor(
    route: ActivatedRoute,
    public sharefileservice: SharefileService,
    private translate: TranslateService
  ) {
    this.dkey = route.snapshot.params["dkey"] && route.snapshot.params["dkey"];
  }

  ngOnInit() {
    this.loading = true;
    this.dkey &&
      this.sharefileservice.rejectrequest(this.dkey).subscribe(
        data => {
          this.loading = false;
          // data &&
          //   (this.message = 'Request rejected successfully.');
          if (data) {
            this.translate
              .get("Request rejected successfully.")
              .subscribe((res: string) => {
                this.message = res;
              });
          }
        },
        error => {
          this.loading = false;
        }
      );
  }
}
