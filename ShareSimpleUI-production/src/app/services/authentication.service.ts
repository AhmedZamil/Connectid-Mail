import { Injectable } from '@angular/core';
import { ApiBaseService } from '../services/api-base.service';
import config from '../config';

@Injectable()
export class AuthenticationService {
    constructor(private http: ApiBaseService) { }

    getauthresponse(email) {
        let emialjson = { email: email }
        return this.http.post(config.apiendpoint.auth, emialjson);
    }

    getauthwithuserresponse(code) {
        let codejson = { code: code }
        return this.http.post(config.apiendpoint.authcode, codejson);
    }
    getUserInfoById(Id) {
        return this.http.get(config.apiendpoint.getuserbyId + '/' + Id);
    }

}