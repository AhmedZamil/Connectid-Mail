import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { ConnectionBackend, RequestOptions, RequestOptionsArgs, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Storage } from '../services';
import config from '../config';

@Injectable()
export class ApiBaseService extends Http {

  requests: boolean = false;
  _requestsCount: number = 0;

  constructor(
    protected _backend: ConnectionBackend,
    protected _defaultOptions: RequestOptions
  ) {
    super(_backend, _defaultOptions);
  }

  private _headers(options?: RequestOptionsArgs) {
    options = options || {};
    options['headers'] = options.headers || new Headers();
    options.headers.set('Cache-Control', 'no-cache');
    options.headers.set('Pragma', 'no-cache');
    let value=null;
    try{
    value = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    }
    catch(ex){}
    // set content type
    //options.headers.append('Content-Type', config.api.contentType);
    if (value && value.shareSimpleToken && value.id) {
      options.headers.append('token', value.shareSimpleToken);
      options.headers.append('userid', value.id);
    }
    return options;
  }

  private _snakecase(obj: Object) {
    let _regex = /([a-z])([A-Z])/g;

    return obj ? Object.keys(obj).reduce((output, item) => {
      output[item.replace(_regex, '$1_$2').toLowerCase()] = obj[item];
      return output;
    }, {}) : obj;
  }

  private _camelcase(obj: Object) {
    let _regex = /(_)(\w)/g;

    return obj ? Object.keys(obj).reduce((output, item) => {
      output[item.replace(_regex, '$2').toUpperCase()] = obj[item];
      return output;
    }, {}) : obj;
  }

  private _serialize(value: any): string {
    return JSON.stringify(value) || '{}';
  }

  private _deserialize(res: Observable<Response>): any {
    return res
      .map(res => {
        let data = null;
        try{
          data = res['_body'] && res.json() || {};
        }catch{
          data = res['_body'];
        }
        // let data = res['_body'] && res.json() || {};
        return (data);
      })
      .catch(res => {
        if (res.status >= 500 && res.status < 600) {
          let data: any;

          try {
            data = res.json() || {};
          } catch (e) {
            data = this._error(res.text(), res.status);
          }
          return Observable.throw(res.text());
        }
        if (res.status >= 400 && res.status < 500) {
          let data = res.json() || {};
          return Observable.throw(data);
        }

        // return Observable.throw(res.text());
        return res['_body'];
      });
  }

  private _encode(params?: any): URLSearchParams {
    if (params instanceof URLSearchParams) return params;
    let searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => params[key] !== null && searchParams.set(key, params[key]));
    return searchParams;
  }

  private _error(message: string, status: number = 400): any {
    return {
      error: {
        code: status,
        message: message || 'Server error (${status})',
      }
    };
  }

  get(url: string, params?: any, options?: RequestOptionsArgs): Observable<any> {
    options = this._headers(options);
    params && (options.search = this._encode(this._snakecase(params)));
    let res = super.get(this.getServiceURL(url, true), options).share();
    this.setStatus(res);
    return this._deserialize(res);
  }

  post(url: string, body?: any, params?: any, options?: RequestOptionsArgs): Observable<any> {

    options = this._headers(options);
    // body = this._serialize(body);

    params && (options.search = this._encode(params));
    let res = super.post(this.getServiceURL(url, true), body, options).share();
    this.setStatus(res);
    let result = this._deserialize(res);
    return result;
  }

  put(url: string, body: any, params?: any, options?: RequestOptionsArgs): Observable<any> {
    options = this._headers(options);
    // body = this._serialize(body);
    params && (options.search = this._encode(params));

    let res = super.put(this.getServiceURL(url, true), body, options).share();

    this.setStatus(res);

    return this._deserialize(res);
  }

  delete(url: string, params?: any, options?: RequestOptionsArgs): Observable<any> {
    options = this._headers(options);
    params && (options.search = this._encode(params));

    let res = super.delete(this.getServiceURL(url, true), options).share();

    this.setStatus(res);

    return this._deserialize(res);
  }

  setStatus(observable: Observable<any>) {
    this._requestsCount++;
    this.requests = true;

    observable.debounceTime(config.debounce.interval).subscribe(
      () => { },
      () => { },
      () => {
        this._requestsCount--;
        this.requests = !!this._requestsCount;
      },
    );
  }

  getStatus(type: string) {
    return !!this.requests;
  }
  getServiceURL(url: string, forapi: boolean): string {
    let baseUrl = config.api.base;
    if (baseUrl == null || baseUrl == '') {
      baseUrl = window.location.host;
    }
    if (forapi) {
      baseUrl += '/api/';
    }
    return baseUrl + url;
  }
}

