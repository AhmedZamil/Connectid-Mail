import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  customerId: string;
  company: any;
  unSubscribed: boolean;
  translateParam: any;
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private commonService: CommonService,
    private companyService: CompanyService) {
    this.customerId = route.snapshot.params["id"];
    this.unSubscribed = false;
    this.translateParam = { url: "" };
  }

  ngOnInit() {
    this.commonService.getAppLinkConfig().subscribe(
      (data) => {
        this.translateParam = { url: data.overViewPersonal };
      },
      error => {
        console.log(error);
      }
    );
    this.companyService.getCompany(this.customerId).subscribe(
      data => {
        if (data) {
          this.company = data;
          if (data.isDeleted || data.isActive === false)
            this.unSubscribed = true;
        }
        else {
          window.location.href = '/';
        }
      },
      error => {
        this.unSubscribed = true;
      }
    );
  }

  deleteCompany() {
    this.companyService.unsubscribe(this.customerId).subscribe(
      data => {
        console.log(data);
        this.unSubscribed = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  closeWindow() {
    window.location.href = '/';
  }
}
