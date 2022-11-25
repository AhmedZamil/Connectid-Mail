import { Injectable } from '@angular/core';
import { ApiBaseService } from '../services/api-base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../config';

@Injectable()
export class AdminService {
    constructor(private http: ApiBaseService,
        private http_local: HttpClient,
    ) { }

    //user
    getUserInfo(email) {
        return this.http.get(config.apiendpoint.getuserbymail + '/' + email);
    }

    adduser(data) {
        return this.http.post(config.apiendpoint.adduser, data);
    }

    editUser(id, data) {
        return this.http.put(config.apiendpoint.adduser + '/' + id, data)
    }
    deleteUser(id) {
        return this.http.delete(config.apiendpoint.adduser + '/' + id);
    }

    //package
    getPackages() {
        return this.http.get(config.apiendpoint.getpackages);
    }

    addpackage(data) {
        return this.http.post(config.apiendpoint.getpackages, data);
    }

    editpackage(id, data) {
        return this.http.put(config.apiendpoint.getpackages + '/' + id, data)
    }

    //company
    getCompanyList(activeOnly = false) {
        var url = config.apiendpoint.superadmin;
        if (activeOnly) {
            url += "?activeOnly=" + activeOnly;
        }
        return this.http.get(url);
    }

    editCompanyPackage(id, data) {
        return this.http.put(config.apiendpoint.editcompanyprice + '/' + id, data)
    }

    editCompany(id, data) {
        return this.http.put(config.apiendpoint.addcompany + '/' + id, data)
    }

    addCompany(data) {
        return this.http.post(config.apiendpoint.addcompany, data);
    }

    updateCompanyLogo(file, companyId) {
        let _formData = new FormData();
        _formData.append("file", file);
        const observable: any = this.http_local.post(this.http.getServiceURL(config.apiendpoint.addcompany, true) + '/logo/' + companyId, _formData);
        return observable;
    }

    getCompany(id) {
        return this.http.get(config.apiendpoint.addcompany + "/" + id);
    }

    unsubscribeCompany(id) {
        return this.http.get(config.apiendpoint.addcompany + "/UnSubscribe/" + id);
    }

   resubscribeCompany(id) {
    return this.http.get(config.apiendpoint.addcompany + "/ReSubscribe/" + id);
    }

    //consent 
    addconsent(data) {
        return this.http.post(config.apiendpoint.consent, data);
    }

    editconsent(id, data) {
        return this.http.put(config.apiendpoint.consent + '/' + id, data)
    }

    getconsents(companyid) {
        return this.http.get(config.apiendpoint.consent + '/' + companyid);
    }

    getconsent(companyid, type) {
        return this.http.get(config.apiendpoint.consent + '/type/' + companyid + '/' + type);
    }

    //config
    editStorage(id, data) {
        return this.http.put(config.apiendpoint.config + '/' + id, data)
    }

    addStorage(data) {
        return this.http.post(config.apiendpoint.config, data);
    }
    getStorage(id) {
        return this.http.get(config.apiendpoint.config + "/" + id);
    }
    getStorageByCompId(companyid) {
        return this.http.get(config.apiendpoint.config + "/company/" + companyid);
    }

    //logs
    getlogs(companyid, logfor) {
        let apiend = (logfor == 'sharedata') ? config.apiendpoint.logsharedata : config.apiendpoint.logpostdata;
        return this.http.get(apiend + '/' + companyid);
    }

    getbilling() {

    }
    sendMailOnDemand(data, contactname, contactemail, integrationtype, emailfrom) {
        return this.http.post(config.apiendpoint.sendMailOnDemand + "/" + contactname + "/" + contactemail + "/" + integrationtype + "/" + emailfrom, data);
    }
    updateCompanyContactPerson(prevcontactid, newcontactid) {
        return this.http.post(config.apiendpoint.updateCompanyContact + '/updatecompanycontact/' + prevcontactid + '/' + newcontactid);
    }


}
