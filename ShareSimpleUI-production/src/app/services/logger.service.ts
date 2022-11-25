import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import config from '../config';

@Injectable()
export class LoggerService {

    constructor(private http: ApiBaseService) { }

    log(message: string) {
        var url: string = config.apiendpoint.createLog + '?message=' + message;
        return this.http.post(url);
    }
}