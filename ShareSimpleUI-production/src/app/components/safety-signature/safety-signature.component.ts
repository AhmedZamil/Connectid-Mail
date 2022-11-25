import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-signature',
  templateUrl: './safety-signature.component.html',
  styleUrls: ['./safety-signature.component.scss']
})
export class SafetySignatureComponent implements OnInit {
  linkConfig: any;
  constructor(private commonService: CommonService) {
    this.linkConfig = [];
  }

  ngOnInit() {
    this.commonService.getAppLinkConfig().subscribe(
      (data) => {
        this.linkConfig = data;
      },
      error => {
        console.log(error);
      });
  }

}
