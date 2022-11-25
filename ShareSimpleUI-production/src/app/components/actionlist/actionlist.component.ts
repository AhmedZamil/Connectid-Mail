import { Component, OnInit } from '@angular/core';
import { CommonService, Storage } from '../../services';

@Component({
  selector: 'app-actionlist',
  templateUrl: './actionlist.component.html',
  styleUrls: ['./actionlist.component.scss']
})
export class ActionlistComponent implements OnInit {
  constructor(
    public commonService: CommonService,
    private storage: Storage
  ) { }

  ngOnInit() {
    let user = this.storage.get('user');
    if (user && (user.type || !user.type)) {
      this.commonService.SetAdmin(user);
    }
  }

}
