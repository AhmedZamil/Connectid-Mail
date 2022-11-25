import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DownloadpermissionFile } from '../../models';
import { CommonService, Storage, SharefileService } from '../../services';
import { Router } from '@angular/router';
import config from '../../config';
declare const fabric: any;

@Component({
  selector: 'app-downloadpermissionfile',
  templateUrl: './downloadpermissionfile.component.html',
  styleUrls: ['./downloadpermissionfile.component.scss']
})
export class DownloadpermissionfileComponent implements OnInit {

  files: DownloadpermissionFile[] = [];
  selectedfiles: DownloadpermissionFile[] = [];
  sender: any;
  receiver: any;
  loading: boolean = false;

  constructor(private router: Router,
    public sharefileservice: SharefileService,
    private cd: ChangeDetectorRef,
    private storage: Storage) {
  }

  ngOnInit() {
    this.loading = true;
    let otp = this.storage.get('otp');
    otp &&
      this.sharefileservice.getfiles(otp).subscribe(data => {
        data && (this.files = data.files);

        this.loading = false;
        this.sender = data.sender;
        this.receiver = data.receiver.id;
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
    let requestdata = { receiverId: this.receiver, senderId: this.sender.id, files: this.selectedfiles }
    this.sharefileservice.sendDownloadPermission(requestdata).subscribe(data => {

      this.loading = false;
      this.router.navigate([config.routes.permissiongranted, 'u']);
    }, error => {
      this.loading = false;
    });
  }

  cancel() {
    this.router.navigate([config.routes.viewfile]);
  }

}
