import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import config from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostdataService {
    constructor(private http: ApiBaseService,
        private http_local: HttpClient,
    ) { }

    uploadfile(queryobject) {
        let _formData = new FormData();
        _formData.append("senderEmail", queryobject.senderEmail);
        _formData.append("file", queryobject.file);
        _formData.append("postDataId", queryobject.postDataId);
        _formData.append("postDataFieldId", queryobject.postDataFieldId);
        _formData.append("receiverId", queryobject.receiverId);

        // let value = JSON.parse(localStorage.getItem('user'));

        // // let options:RequestOptionsArgs =  {};
        // // options['headers'] = options.headers || new Headers();

        // let httpOptions = {headers: new HttpHeaders({})};

        // if (value && value.accessToken && value.id) {
        //     httpOptions.headers = httpOptions.headers.append('token', value.accessToken);
        //     httpOptions.headers = httpOptions.headers.append('userid', value.id);
        // }

        // const observable: any = this.http_local.post(this.http.getServiceURL(config.apiendpoint.postdatafileupload, true), _formData, httpOptions);

        const observable = this.http.post(config.apiendpoint.postdatafileupload, _formData)
        return observable;
    }

    addPostData(data) {
        return this.http.post(config.apiendpoint.postdata, data);
    }

    getPostDataLink(id, mode) {
        return this.http.post(config.apiendpoint.postdatalink + '/' + id + '/' + mode);
    }

    getTrustedLink(key: string) {
        return this.http.get(config.apiendpoint.trustedLink + '/' + key);
    }

    updatereceivers(queryobject) {
        return this.http.post(config.apiendpoint.updatepostdatareceiver, queryobject);
    }

    deletepostdata(id) {
        return this.http.delete(config.apiendpoint.deletepostdata + '/' + id);
    }

    getfiels(otp) {
        return this.http.get(config.apiendpoint.getpostdatafiled + '/' + otp);
    }

    updatepostdatafield(data) {
        return this.http.post(config.apiendpoint.postdataupdatefiled, data);
    }

    deletepostdatafile(id) {
        return this.http.delete(config.apiendpoint.postdatafiledelete + '/' + id);
    }

    getshowpostdata(key, receiverid) {
        return this.http.get(config.apiendpoint.postdata + '/' + key + '/' + receiverid);
    }

    receiveByRequestor(postDataKey, receiverid) {
        return this.http.get(config.apiendpoint.postdata + '/receiveByRequestor/' + postDataKey + '/' + receiverid);
    }

    getUserFolder(id) {
        return this.http.get(config.apiendpoint.usersharedfolder + '/' + id);
    }

    savepostdata(folderid, ispersonal, data) {
        return this.http.post(config.apiendpoint.savedata + '/' + folderid + '/' + ispersonal, data);
    }

    isSaved(postdataid, receiverid) {
        return this.http.post(config.apiendpoint.isSaved + '/' + postdataid + '/' + receiverid);
    }

    getviewbloburl(fileid) {
        return this.http.get(config.apiendpoint.postbloburl + '/' + fileid);
    }
    deletetemp() {
        return this.http.delete(config.apiendpoint.deletetemppost);
    }

}