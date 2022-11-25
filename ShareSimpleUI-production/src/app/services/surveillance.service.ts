import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import config from '../config';

@Injectable()
export class SurveillanceService {
    constructor(private http: ApiBaseService
    ) { }

    getEnums() {
        return this.http.get(config.apiendpoint.surveillance + '/enums');
    }
    getSurveillances(searchOptions) {
        return this.http.post(config.apiendpoint.surveillance, searchOptions);
    }
    getSurveillance(id) {
        return this.http.get(config.apiendpoint.surveillance + '/' + id);
    }
}
