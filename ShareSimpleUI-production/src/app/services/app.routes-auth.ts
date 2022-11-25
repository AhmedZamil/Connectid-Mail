import { Injectable, Component } from '@angular/core';
import { CanActivate, Router, CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import config from '../config';
import { CommonService, Storage } from '../services';
declare const Office: any;

@Injectable()
export class IsAuthenticated implements CanActivate {
    authlink = '';
    constructor(
        private router: Router,
        private commonService: CommonService,
        private storage: Storage
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let user = this.storage.get('user');
        if (user && user.isActive) {
            return true;
        } else {
            this.storage.set('returnUrl', state.url);
            if (this.authlink === '') {
                this.commonService.getAdAppClientId().subscribe(data => {
                    this.authlink = config.api.AuthLink(data);
                    window.location.href = this.authlink;
                }, error => {
                    console.log(error);
                });
            } else {
                window.location.href = this.authlink;
            }
        }
    }

}

@Injectable()
export class IsAdminAuthenticated implements CanActivate {
    authlink = '';
    constructor(
        private router: Router,
        private commonService: CommonService,
        private storage: Storage,

    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let user = this.storage.get('user');
        if (user && user.type && user.isActive) {
            return true;
        } else {
            this.storage.set('returnUrl', state.url);
            if (this.authlink === '') {
                this.commonService.getAdAppClientId().subscribe(data => {
                    this.authlink = config.api.AuthLink(data);
                    window.location.href = this.authlink;
                }, error => {
                    console.log(error);
                });
            } else {
                window.location.href = this.authlink;
            }
        }
    }

}


@Injectable()
export class IsSuperAdminAuthenticated implements CanActivate {
    authlink = '';
    constructor(
        private router: Router,
        private commonService: CommonService,
        private storage: Storage,

    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let user = this.storage.get('user');
        if (user && user.type && user.isSuperAdmin && user.isActive) {
            return true;
        } else {
            this.storage.set('returnUrl', state.url);
            this.storage.remove('user');
            if (this.authlink === '') {
                this.commonService.getAdAppClientId().subscribe(data => {
                    this.authlink = config.api.AuthLink(data);
                    window.location.href = this.authlink;
                }, error => {
                    console.log(error);
                });
            } else {
                window.location.href = this.authlink;
            }
        }
    }

}
