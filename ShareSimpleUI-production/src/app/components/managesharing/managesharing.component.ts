import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-managesharing',
  templateUrl: './managesharing.component.html',
  styleUrls: ['./managesharing.component.scss']
})
export class ManagesharingComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

}
