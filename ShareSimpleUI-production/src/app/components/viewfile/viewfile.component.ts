import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService, Storage, SharefileService } from '../../services';
import config from '../../config';
import { File } from '../../models';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
declare const fabric: any;

@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.component.html',
  styleUrls: ['./viewfile.component.scss']
})
export class ViewfileComponent implements OnInit {

  files: File[] = [];
  dialogComponent: any;
  viewfileUrl: string;
  loading: boolean = false;
  viewDialogComponent: any;
  viewerClass: string = "pdfviewer screen-normal";
  viewFileUrl: SafeUrl;
  days: any;
  timerId: any = null;
  constructor(private router: Router,
    public sharefileservice: SharefileService,
    private commonService: CommonService,
    private cd: ChangeDetectorRef,
    private storage: Storage,
    public sanitizer: DomSanitizer,
    public el: ElementRef) { }

  ngOnInit() {
    this.loading = true;
    let otp = this.storage.get('otp');
    otp &&
      this.sharefileservice.getfiles(otp).subscribe(data => {

        data.files.forEach(file => {
          let fname = file.name;
          let fext = fname.split('.').pop();
          let fileUrl = file.fileUrl;
          // convertion
          // if (fext == 'docx' || fext == 'xlsx'){
          //   let path = fileUrl.replace('//','');
          //   var localpath = path.substring(path.indexOf('/') + 1, path.lastIndexOf('/'));
          //   let filepath = fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length);
          //   let odtfilename = filepath.split('.')[0] + '.odt';
          //   let odsfilename = filepath.split('.')[0] + '.ods';
          //   fext == 'docx' && (file.fileUrl = config.api.base + '/assets/PreviewDoc/#/files/' + localpath + '/' + odtfilename);
          //   (fext == 'xlsx') && (file.fileUrl = config.api.base + '/assets/PreviewDoc/#/files/' + localpath + '/' + odsfilename);
          // } else {
          //   file.fileUrl = config.api.base + '/assets/PreviewDoc/#' + fileUrl;
          // }
          // file.fileUrl = config.api.base + '/assets/PreviewDoc/#' + fileUrl;
          let vfileurl = config.api.base + '/api/file/downloadblob' +'/' + file.fileId;
          file.fileUrl = '/assets/PreviewDoc/#' + vfileurl;
          // file.fileUrl = vfileurl;
        });
        this.loading = false;
        if (data) {
          this.days = data.files[0].expDate && this.commonService.dateDiff(data.files[0].expDate);
          if (this.days >= 0) {
            this.files = data.files;
          }
        }
      }, error => {
        this.loading = false;

      })
  }
  ngAfterViewInit() {
    this.fabricInitialize();
  }
  
  OpenViewDialog(obj) {
    var iframe = this.el.nativeElement.querySelector('.pdfviewer');
    var progress_container = this.el.nativeElement.querySelector('.docviewer-progress');
    iframe.hidden = true;
    progress_container.hidden = false;
    this.viewDialogComponent.open();
    let fileurl = this.commonService.getFileViewUrl(obj, "/api/file/viewfile/");
    iframe.src = '';
    setTimeout(() => {
      this.viewFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileurl);
    }, 100);
    this.timerId = setInterval(() => {
      iframe.src = '';
      this.viewFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileurl);
    }, 2000);
  }
  iframeLoaded() {
    var iframe = this.el.nativeElement.querySelector('.pdfviewer');
    if (iframe.src.indexOf("https://docs.google.com/gview") != -1 || iframe.src.indexOf('/assets/PreviewDoc/#') != -1) {
      var progress_container = this.el.nativeElement.querySelector('.docviewer-progress');
      iframe.hidden = false;
      progress_container.hidden = true;
      if (this.timerId)
        clearInterval(this.timerId);
    }
  }
  CloseViewDialog() {
    this.viewDialogComponent.close();
    if (this.timerId)
      clearInterval(this.timerId);
  }
  toggleDialogScreen() {
    if (this.viewerClass.indexOf("screen-normal") != -1) {
      this.viewerClass = "pdfviewer screen-full";
    }
    else {
      this.viewerClass = "pdfviewer screen-normal";
    }
  }
  fabricInitialize() {

    let viewdialog = document.querySelector(".viewfileDialog");
    let dialogView = viewdialog.querySelector(".ms-Dialog");
    this.viewDialogComponent = new fabric['Dialog'](dialogView);
  }


  downloadpermission() {
    this.router.navigate([config.routes.downloadpermission])
  }

}
