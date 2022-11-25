import { Component, OnInit, Input } from '@angular/core';
import config from '../../config';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  poweredByLink: string;

  constructor(

  ) { }

  ngOnInit() {
    this.poweredByLink = config.ui.base;
  }

}
