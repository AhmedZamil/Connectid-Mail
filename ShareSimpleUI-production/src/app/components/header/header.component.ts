import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '../../services';
import config from '../../config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() company: any;
  companyname: string = '';
  companyurl: string = '../../../assets/ss_logo.png';
  constructor(
    private storage: Storage,
  ) { }

  ngOnInit() {

    let storagecompany = this.storage.get('companynameurl');
    if (this.company) {
      this.company = this.company;
    } else {
      this.company = storagecompany && storagecompany;
    }

    if (this.company && this.company.name && this.company.logoUrl) {
      this.companyname = this.company.name;
      this.companyurl = config.api.base + this.company.logoUrl;
    } else {
      this.companyname = 'Connectid Mail';
      this.companyurl = '../../../assets/ss_logo.png';
    }
  }

}
