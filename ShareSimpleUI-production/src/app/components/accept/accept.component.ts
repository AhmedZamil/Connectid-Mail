import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadpermissionFile } from '../../models';
import { SharefileService } from '../../services';
import { ActivatedRoute } from '@angular/router';
declare const fabric: any;
import config from '../../config';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {
  dkey = '';
  files: DownloadpermissionFile[] = [];
  selectedfiles: DownloadpermissionFile[] = [];
  sender: any;
  receiver: any;
  requestDownloadId: any;
  loading: boolean = false;

  constructor(private router: Router,
    route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    public sharefileservice: SharefileService,
  ) {
    this.dkey = route.snapshot.params['dkey'] && route.snapshot.params['dkey'];
  }

  ngOnInit() {

    this.loading = true;
    this.dkey &&
      this.sharefileservice.getacceptrequestfiles(this.dkey).subscribe(data => {
        data && (this.files = data.files);
      
        this.loading = false;
        this.sender = data.sender.id;
        this.receiver = data.receiver.id;
        this.requestDownloadId = data.requestDownloadId;
        this.files.map(x => x.isSelected = true);
        this.selectedfiles = this.files;
        this.cd.detectChanges();
        this.fabricInitialization();
      }, error => {
        this.loading = false;
      });
  }

  ngAfterViewInit() {
    this.fabricInitialization();
  }

  fabricInitialization() {
    var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
    for (var i = 0; i < CheckBoxElements.length; i++) {
      new fabric['CheckBox'](CheckBoxElements[i]);
    }
  }

  selectfile(id) {
    
    this.files.map(f => (f.fileId === id) && (f.isSelected = !f.isSelected));
    this.selectedfiles = this.files.filter(f => f.isSelected === true);
  }

  requestsent() {
    
    this.loading = true;
    let requestdata = { id: this.requestDownloadId, receiverId: this.receiver, senderId: this.sender, files: this.selectedfiles }
    this.sharefileservice.acceptdownloadrequest(requestdata).subscribe(data => {
      
      this.loading = false;
      this.router.navigate([config.routes.permissiongranted, 'a']);
    }, error => {
      this.loading = false;
    });

  }

}
