import { Component, OnInit } from '@angular/core';
import { CommonService, Storage } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public commonService: CommonService,
    route: ActivatedRoute,
    private storage: Storage) {
  }

  ngOnInit() {
  }

}