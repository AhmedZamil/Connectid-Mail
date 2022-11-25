import { Injectable } from '@angular/core';
import { ApiBaseService } from '../services/api-base.service';
import { RequestOptionsArgs } from '@angular/http';
import config from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdminUserService {
    constructor(private http: ApiBaseService,
        private http_local: HttpClient,
    ) { }

    getAdminUser(companyid) {
        return this.http.get(config.apiendpoint.adduser + '/company/' + companyid);
    }

    getFolders(companyid) {
        return this.http.get(config.apiendpoint.folders + '/' + companyid);
    }

    getUserfolder(userid) {
        return this.http.get(config.apiendpoint.userfolder + '/' + userid);
    }

    getBillingInfo(companyid) {
        return this.http.get(config.apiendpoint.billing + '/' + companyid);
    }

    getUserById(id) {
        return this.http.get(config.apiendpoint.adduser + '/' + id);
    }

    getsharedfolderroot(id, status) {
        let apiend = (status === 'a') ? config.apiendpoint.sharedfolderroot + '/' + id : config.apiendpoint.sharedfolderuserroot + '/' + status;
        return this.http.get(apiend);
    }

    getSharedFolder(id, status) {
        let url = (status == 'a') ? config.apiendpoint.sharedfolder + '/' + id : config.apiendpoint.usersharedfolder + '/' + status;
        return this.http.get(url);
    }

    getSharedFolderFile(id,userid) {
        return this.http.get(config.apiendpoint.sharedfolderfile + '/' + id + '/' +userid);
    }

    getSharedUsers(id) {
        return this.http.get(config.apiendpoint.shareduser + '/' + id);
    }

    getuserbycompany(id) {
        return this.http.get(config.apiendpoint.userbycomapny + '/' + id);
    }
    getactiveusersbycompany(id) {
      return this.http.get(config.apiendpoint.userbycomapny + '/' + id+'?onlyActive=true');
    }
    removeshareduser(data) {
        return this.http.post(config.apiendpoint.removeusersharedfolder, data);
    }

    addusertosharedfolder(data) {
        return this.http.post(config.apiendpoint.addusersharedfolder, data)
    }

    addnewfolder(data) {
        return this.http.post(config.apiendpoint.addnewfolder, data);
    }

    updatefolder(id, data) {
        return this.http.put(config.apiendpoint.addnewfolder + '/' + id, data);
    }

    deleteSharedFolder(id) {
        return this.http.delete(config.apiendpoint.addnewfolder + '/' + id);
    }

}
