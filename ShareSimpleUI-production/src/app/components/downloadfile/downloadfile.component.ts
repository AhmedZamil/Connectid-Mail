import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService, Storage, SharefileService } from '../../services';
import config from '../../config';
import { File } from '../../models';

import {saveAs} from 'file-saver';
import { Response } from '@angular/http';

@Component({
  selector: 'app-downloadfile',
  templateUrl: './downloadfile.component.html',
  styleUrls: ['./downloadfile.component.scss']
})
export class DownloadfileComponent implements OnInit {

  files: File[] = [];
  status: string;
  loading: boolean = false;
  days: any;


  constructor(private router: Router,
    public sharefileservice: SharefileService,
    private commonService: CommonService,
    private storage: Storage) { }

  ngOnInit() {

    this.status = this.storage.get('status');

    if (this.status == 'sharedata1') {
      this.loading = true;
      let otp = this.storage.get('otp');
      otp &&
        this.sharefileservice.getfiles(otp).subscribe(data => {
          if (data) {
            this.days = data.files[0].expDate && this.commonService.dateDiff(data.files[0].expDate);
            if (this.days >= 0) {
              this.files = data.files;
              this.files.forEach(f => {
                f.downloadUrl = config.api.base + '/api/file/downloadblob' +'/' + f.fileId;
              });
            }
            this.loading = false;
          }
        }, error => {
          this.loading = false;
        });
    } else if (this.status == 'downloadpermission') {
      this.loading = true;
      let otp = this.storage.get('key');
      otp &&
        this.sharefileservice.getacceptrequestfiles(otp).subscribe(data => {
          data && (this.files = data.files);

          this.files.forEach(f => {
            f.downloadUrl = config.api.base + '/api/file/downloadblob' +'/' + f.fileId;
          });
          this.loading = false;
        }, error => {
          this.loading = false;
        });
    }


  }

  downloadfile(fileid){
    this.sharefileservice.downloadfile(fileid).subscribe(data => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      saveAs(blob, 'test.png');
      // return data;
    });
  }

}
