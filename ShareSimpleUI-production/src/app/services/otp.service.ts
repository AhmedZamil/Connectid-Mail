import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import config from '../config';

@Injectable()
export class OtpService {

  constructor(private http: ApiBaseService) { }

  sendOtp(postObj: any) {
    return this.http.post(config.apiendpoint.sendOtp, postObj);
  }

  matchOtp(postObj: any) {
    return this.http.post(config.apiendpoint.matchOtp, postObj);
  }

}
