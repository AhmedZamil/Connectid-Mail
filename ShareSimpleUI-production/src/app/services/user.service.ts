import { Injectable } from '@angular/core';
import { ApiBaseService } from '../services/api-base.service';
import config from '../config';

@Injectable()
export class UserService {
    constructor(private http: ApiBaseService
    ) { }

    getUserInfo(email) {
        return this.http.get(config.apiendpoint.getuserbymail + '/' + email);
    }
    

    getPackages() {
        return this.http.get(config.apiendpoint.getpackages);
    }

    adduser(data) {
        return this.http.post(config.apiendpoint.adduser, data);
    }

    editUser(id,data) {
        return this.http.put(config.apiendpoint.adduser + '/' + id , data)
    }

    addpackage(data) {
        return this.http.post(config.apiendpoint.getpackages, data);
    }

    editpackage(id,data) {
        return this.http.put(config.apiendpoint.getpackages + '/' + id , data)
    }


    editCompany(id,data) {
        return this.http.put(config.apiendpoint.addcompany + '/' + id , data)
    }

    addCompany(data) {
        return this.http.post(config.apiendpoint.addcompany, data);
    }
    getCompany(id) {
        return this.http.get(config.apiendpoint.addcompany + "/" + id);
    }
}