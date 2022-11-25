import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService, AdminUserService, AdminService, Storage } from '../../services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  public logs = [];
  private logSource = [];
  private companyId = '';
  filterForm: FormGroup;
  loading = false;
  showReceivedDate = false;

  displayLength: number = 10;
  currentPage: number = 1;
  entityCount: number = 0;
  entitystart: number = 1;
  entityend: number;
  NameLabel: string;
  SenderEmailLabel: string;
  ReceiverEmailLabel: string;

  constructor(
    private userService: AdminService,
    private commonService: CommonService,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: Storage
  ) {
    this.companyId = this.storage.get('companyId');

    this.filterForm = this.fb.group({
      searchText: '',
      logkey: ['sharedata', Validators.required]
    });
  }


  ngOnInit() {
    this.loading = true;
    let logkey = this.filterForm.value.logkey;
    this.showlogs(logkey);

    this.filterForm.controls.searchText.valueChanges.subscribe(data => {
      
      let filterkey = data.toString().trim().toUpperCase();
      this.logs = (filterkey == "") ? this.logSource :
        this.logSource.filter(x =>
          x.sender.name.toString().toUpperCase().includes(filterkey) ||
          x.sender.email.toString().toUpperCase().includes(filterkey) ||
          (x.receivers.map(x => x.receiverEmail).toString().toUpperCase().includes(filterkey)) ||
          (x.files.map(x => x.name).toString().toUpperCase().includes(filterkey))
        );

      this.currentPage = 1;
      this.entitystart = 1;
      this.viewcounts();

    });

    this.filterForm.controls.logkey.valueChanges.subscribe(data => {
      
      if (data == '' || !data) {
        this.logs = this.logSource;
      } else {
        this.loading = true;
        this.showlogs(data);
      }
    });

  }

  showlogs(logkey) {
    if(logkey=="sharedata"){
      this.SenderEmailLabel="Sender Email";
      this.ReceiverEmailLabel="Receivers Email";
      this.NameLabel="Sender Name";
      this.showReceivedDate=false;
    }
    else{
      this.SenderEmailLabel="Receiver Email";
      this.ReceiverEmailLabel="Sender Email";
      this.NameLabel="Receiver Name";
      this.showReceivedDate=true;
    }
    this.userService.getlogs(this.companyId, logkey).subscribe(data => {
      this.loading = false;
      this.logs = data;
      this.logSource = this.logs;
      this.viewcounts();
    }, error => {
      this.loading = false;
    })
  }

  pageChanged(pageNumber: number) {
    this.currentPage = pageNumber;
    this.entitystart = this.commonService.getStart(this.currentPage);
    this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
  }

  viewcounts() {
    this.entityCount = this.logs.length;
    this.entityend = this.commonService.getEndForFirst(this.entityCount);
  }

}
