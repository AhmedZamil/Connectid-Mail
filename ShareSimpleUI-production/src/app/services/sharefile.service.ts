import { Injectable } from '@angular/core';
import { ApiBaseService } from '../services/api-base.service';
import config from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptionsArgs, Headers } from '@angular/http';

@Injectable()
export class SharefileService {
    constructor(private http: ApiBaseService,
        private http_local: HttpClient,
    ) { }

    uploadfile(queryobject) {
        let _formData = new FormData();
        _formData.append("senderEmail", queryobject.senderEmail);
        _formData.append("file", queryobject.file);
        _formData.append("mode", queryobject.mode);
        _formData.append("shareDataId", queryobject.shareDataId);

        let value = JSON.parse(localStorage.getItem('user'));

        // let options:RequestOptionsArgs =  {};
        // options['headers'] = options.headers || new Headers();

        // set content type
        //options.headers.append('Content-Type', config.api.contentType);
        // let headers;

        // if (value && value.accessToken && value.id) {
        //     headers = new HttpHeaders()
        //     .set('token', value.accessToken)
        //     .set('userid', value.id);
        // }

        // let httpOptions = {headers: new HttpHeaders({})};

        // if (value && value.accessToken && value.id) {
        //     httpOptions.headers = httpOptions.headers.append('token', value.accessToken);
        //     httpOptions.headers = httpOptions.headers.append('userid', value.id);
        // }

        // const observable: any = this.http_local.post(this.http.getServiceURL(config.apiendpoint.uploadfile, true), 
        // _formData, { headers: headers });

        const observable = this.http.post(config.apiendpoint.uploadfile, _formData)

        return observable;
    }

    updatereceivers(queryobject) {
        return this.http.post(config.apiendpoint.updatereceiver, queryobject);
    }

    getSharedataLink(id, mode) {
        return this.http.post(config.apiendpoint.getsharedatalink + '/' + id + '/' + mode);
    }

    getReceivers(key, status) {
        let endpoint = (status == 'postdata') ? config.apiendpoint.postdatareceivers : config.apiendpoint.receivers;
        return this.http.get(endpoint + '/' + key);
    }

    sendOtp(requestObj, status) {
        if (status == 'postdata') {
            return this.http.post(config.apiendpoint.postdatasendotp + '/' + requestObj.ReceiverId);
        } else {
            return this.http.post(config.apiendpoint.sendotp, requestObj);
        }
    }

    getfiles(otp) {
        return this.http.get(config.apiendpoint.getfiles + '/' + otp);
    }

    deletefile(id) {
        return this.http.delete(config.apiendpoint.deletefile + '/' + id);
    }

    sendDownloadPermission(data) {
        return this.http.post(config.apiendpoint.senddownloadrequest, data);
    }

    rejectrequest(dkey) {
        return this.http.delete(config.apiendpoint.rejectrequestdownload + '/' + dkey);
    }

    getacceptrequestfiles(dkey) {
        return this.http.get(config.apiendpoint.getacceptrequestfiles + '/' + dkey);
    }

    downloadfile(fileid) {
        return this.http.get(config.apiendpoint.downloadfile + '/' + fileid);
    }

    acceptdownloadrequest(data) {
        return this.http.post(config.apiendpoint.acceptdownloadrequest, data);
    }

    //post data show
    getpostdatashowreceiver(key) {
        return this.http.post(config.apiendpoint.showpostdatamails + '/' + key);
    }
    //post data show otp
    getpostdatashowotp(key) {
        return this.http.post(config.apiendpoint.showpostdataotp + '/' + key);
    }

    getviewbloburl(fileid) {
        return this.http.get(config.apiendpoint.viewbloburl + '/' + fileid);
    }
    deletetemp() {
        return this.http.delete(config.apiendpoint.deletetemp);
    }
}