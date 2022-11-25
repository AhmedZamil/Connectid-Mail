import { ApiBaseService } from './api-base.service';
import { Injectable } from '@angular/core';
import config from '../config';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {
  public activeAdmin = new Subject<any>();

  constructor(private http: ApiBaseService) { }

  getEndForFirst(entityCount) {
    return ((entityCount >= 10) ? 10 : entityCount);
  }

  getStart(currentPage) {
    return ((currentPage - 1) * 10) + 1
  }

  getEnd(entitystart, entityCount) {
    return ((entitystart + 9) > entityCount) ? entityCount :
      (entitystart + 9);
  }

  public SetAdmin(data) {
    this.activeAdmin.next(data);
  }

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value.toString() || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { 'required': true }
  }

  public truefalseValidator(control: FormControl) {
    return (control.value && (control.value === true || control.value === false)) ? null : { 'required': true }
  }

  dateDiff(fromdate) {
    let diff = Math.floor(new Date(fromdate).getTime() - new Date().getTime());
    let dayconverter = 1000 * 60 * 60 * 24;
    let days = (Math.floor(diff / dayconverter)) + 1;
    return days;
  }

  minuteDiff(fromdate) {
    let diff = Math.floor(new Date(fromdate).getTime() - new Date().getTime());
    let dayconverter = 1000 * 60;
    let days = Math.floor(diff / dayconverter);
    return days;
  }

  getFileTypeIcon(fileName: string): string {
    var icon = 'other.png'
    fileName = fileName ? fileName.toLowerCase() : "";
    if (fileName.includes('.txt')) {
      icon = 'text.png';
    } else if (fileName.includes('.pdf')) {
      icon = 'pdf.png';
    } else if (fileName.includes('.doc') || fileName.includes('.docx')) {
      icon = 'docx.png';
    } else if (fileName.includes('.zip') || fileName.includes('.rar')) {
      icon = 'icon_zip_file.png';
    } else if (fileName.includes('.xls') || fileName.includes('.xlsx')) {
      icon = 'icon_xls_file.png';
    } else if (fileName.includes('.ppt') || fileName.includes('.pptx')) {
      icon = 'ppt.png';
    }
    return icon;
  }
  getFileViewUrl(fileInfo: any, fileApiBaseUrl: string): string {
    var fileNameParts = fileInfo && fileInfo.name ? fileInfo.name.toLowerCase().split('.') : '';
    var fileExt = fileNameParts.length <= 1 ? "" : fileNameParts[fileNameParts.length - 1];
    var fileApiUrl = config.api.base + fileApiBaseUrl + fileInfo.fileId + "/" + fileInfo.name;
    var fileurl = '';
    if (fileExt == 'pdf' || fileExt == 'doc' || fileExt == 'docx' || fileExt == 'xls' || fileExt == 'xlsx' || fileExt == 'ppt' || fileExt == 'pptx')
      fileurl = 'https://docs.google.com/gview?url=' + fileApiUrl + '&embedded=true';
    else
      fileurl = '/assets/PreviewDoc/#' + fileApiUrl;
    return fileurl
  }

  getAdAppClientId() {
    return this.http.get(config.apiendpoint.adAppClientId);
  }

  getAppLinkConfig() {
    return this.http.get(config.apiendpoint.AppConfig + '/LinkConfig');
  }
}
