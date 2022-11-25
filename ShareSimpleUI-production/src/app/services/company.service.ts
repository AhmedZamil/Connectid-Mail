import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { HttpClient } from '@angular/common/http';
import config from '../config';

@Injectable()
export class CompanyService {

  constructor(private http: ApiBaseService,
    private http_local: HttpClient,
  ) { }

  getCompany(id) {
    return this.http.get(config.apiendpoint.addcompany + "/" + id);
  }

  deleteCompany(id) {
    return this.http.delete(config.apiendpoint.addcompany + "/" + id);
  }

  unsubscribe(id) {
    return this.http.get(config.apiendpoint.addcompany + '/UnSubscribe/' + id);
  }
}
