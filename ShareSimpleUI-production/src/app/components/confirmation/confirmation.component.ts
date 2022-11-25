import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services';
import config from '../../config';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

}
