webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(storage, translate) {
        this.storage = storage;
        this.translate = translate;
        translate.setDefaultLang("en-US");
        var user = this.storage.get("user");
        if (user && user.language) {
            this.translate.use(user.language);
        }
        else {
            var browserLanguage = translate.getBrowserCultureLang();
            if (browserLanguage == "en")
                browserLanguage = "en-US";
            if (browserLanguage == "da")
                browserLanguage = "da-DK";
            if (browserLanguage) {
                translate.use(browserLanguage);
            }
            else {
                translate.use("en-US");
            }
        }
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services__["k" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_file_drop__ = __webpack_require__("./node_modules/ngx-file-drop/ngx-file-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_pagination__ = __webpack_require__("./node_modules/ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_multiselect_dropdown__ = __webpack_require__("./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_pipes__ = __webpack_require__("./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_app_routes_auth__ = __webpack_require__("./src/app/services/app.routes-auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipe_orderby_pipe__ = __webpack_require__("./src/app/pipe/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components__ = __webpack_require__("./src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_safety_signature_safety_signature_component__ = __webpack_require__("./src/app/components/safety-signature/safety-signature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipe_star_pipe__ = __webpack_require__("./src/app/pipe/star.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_delete_customer_delete_customer_component__ = __webpack_require__("./src/app/components/delete-customer/delete-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_superusersurveillance_superusersurveillance_component__ = __webpack_require__("./src/app/components/superusersurveillance/superusersurveillance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_trusted_link_trusted_link_component__ = __webpack_require__("./src/app/components/trusted-link/trusted-link.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__components__["t" /* NewfolderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["r" /* ManagesharingComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["M" /* WelcomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["p" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["b" /* ActionlistComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["x" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["F" /* SharefilesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["z" /* RequestdataComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["A" /* RequestdataconsentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["B" /* RequestdatasubmitComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["j" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["g" /* AdminuserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["c" /* AdminCompany */],
                __WEBPACK_IMPORTED_MODULE_18__components__["h" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["v" /* OtpsendComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["k" /* DownloadfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["L" /* ViewfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["l" /* DownloadpermissionfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["w" /* PermissiongrantedComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["o" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["a" /* AcceptComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["y" /* RejectComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["G" /* ShowpostdataComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["f" /* AdminhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["e" /* AdminPackageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["d" /* AdminConsentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["q" /* LogsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["H" /* SuperuserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["u" /* NocontentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["I" /* SuperuserhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["i" /* BillingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["m" /* FoldersComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["K" /* UserfolderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["J" /* UserfilesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["s" /* MessageinactiveuserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["C" /* RootfolderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["D" /* SharedfolderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["E" /* SharedfolderfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["r" /* ManagesharingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["t" /* NewfolderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components__["n" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pipe_orderby_pipe__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_20__components_safety_signature_safety_signature_component__["a" /* SafetySignatureComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pipe_star_pipe__["a" /* StarPipe */],
                __WEBPACK_IMPORTED_MODULE_22__components_delete_customer_delete_customer_component__["a" /* DeleteCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_superusersurveillance_superusersurveillance_component__["a" /* SuperuserSurveillanceComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_trusted_link_trusted_link_component__["a" /* TrustedLinkComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_7_ngx_file_drop__["a" /* FileDropModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_pipes__["a" /* NgPipesModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ng_multiselect_dropdown__["a" /* NgMultiSelectDropDownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routes */], { useHash: true })
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["HashLocationStrategy"] },
                __WEBPACK_IMPORTED_MODULE_16__services_app_routes_auth__["b" /* IsAuthenticated */],
                __WEBPACK_IMPORTED_MODULE_16__services_app_routes_auth__["a" /* IsAdminAuthenticated */],
                __WEBPACK_IMPORTED_MODULE_16__services_app_routes_auth__["c" /* IsSuperAdminAuthenticated */],
                __WEBPACK_IMPORTED_MODULE_19__services__["c" /* ApiBaseService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["e" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["f" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["b" /* AdminUserService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["k" /* Storage */],
                __WEBPACK_IMPORTED_MODULE_19__services__["i" /* PostdataService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["h" /* OtpService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["d" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["g" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["j" /* SharefileService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["l" /* SurveillanceService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_19__services__["c" /* ApiBaseService */],
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["g" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* RequestOptions */]],
                    useFactory: function (Backend, defaultOptions) { return new __WEBPACK_IMPORTED_MODULE_19__services__["c" /* ApiBaseService */](Backend, defaultOptions); }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_delete_customer_delete_customer_component__ = __webpack_require__("./src/app/components/delete-customer/delete-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__ = __webpack_require__("./src/app/services/app.routes-auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("./src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_superusersurveillance_superusersurveillance_component__ = __webpack_require__("./src/app/components/superusersurveillance/superusersurveillance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_trusted_link_trusted_link_component__ = __webpack_require__("./src/app/components/trusted-link/trusted-link.component.ts");





var routes = [
    {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["p" /* HomeComponent */],
        children: [
            {
                path: '',
                redirectTo: 'welcome', pathMatch: 'full'
            },
            {
                path: 'welcome',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["M" /* WelcomepageComponent */]
            },
            {
                path: 'registration',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["x" /* RegistrationComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["b" /* IsAuthenticated */]]
            },
            {
                path: 'actions',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["b" /* ActionlistComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["b" /* IsAuthenticated */]]
            },
            {
                path: 'sharefiles',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["F" /* SharefilesComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["b" /* IsAuthenticated */]]
            },
            {
                path: 'requestdata',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["z" /* RequestdataComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["b" /* IsAuthenticated */]]
            },
            {
                path: 'confirm',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["j" /* ConfirmationComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["b" /* IsAuthenticated */]]
            },
            {
                path: 'inactiveuser',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["s" /* MessageinactiveuserComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["b" /* IsAuthenticated */]]
            }
        ]
    },
    {
        path: 'admin/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["f" /* AdminhomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["b" /* IsAuthenticated */]],
        children: [
            {
                path: '',
                redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["g" /* AdminuserComponent */]
            },
            {
                path: 'home/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["g" /* AdminuserComponent */]
            },
            {
                path: 'company',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["c" /* AdminCompany */]
            },
            {
                path: 'package',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["e" /* AdminPackageComponent */]
            },
            {
                path: 'consent',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["d" /* AdminConsentComponent */]
            },
            {
                path: 'log',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["q" /* LogsComponent */]
            },
            {
                path: 'billing',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["i" /* BillingComponent */]
            },
            {
                path: 'root/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["C" /* RootfolderComponent */]
            },
            {
                path: 'folders',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["m" /* FoldersComponent */]
            },
            {
                path: 'userfolder/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["K" /* UserfolderComponent */]
            },
            {
                path: 'file/:id/:foldername',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["J" /* UserfilesComponent */]
            },
            {
                path: 'sharedfolder',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["D" /* SharedfolderComponent */]
            },
            {
                path: 'sharedfolder/tl',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["D" /* SharedfolderComponent */]
            },
            {
                path: 'sharedfolderfile/:folderid',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["E" /* SharedfolderfileComponent */]
            }
        ]
    },
    {
        path: 'superadmin',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["I" /* SuperuserhomeComponent */],
        children: [
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_2__components__["H" /* SuperuserComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["c" /* IsSuperAdminAuthenticated */]]
            },
            {
                path: 'surveillance',
                component: __WEBPACK_IMPORTED_MODULE_3__components_superusersurveillance_superusersurveillance_component__["a" /* SuperuserSurveillanceComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["c" /* IsSuperAdminAuthenticated */]]
            }
        ]
    },
    {
        path: 'deleteCustomer/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__components_delete_customer_delete_customer_component__["a" /* DeleteCustomerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["b" /* IsAuthenticated */], __WEBPACK_IMPORTED_MODULE_1__services_app_routes_auth__["a" /* IsAdminAuthenticated */]]
    },
    {
        path: 'requestconsent',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["A" /* RequestdataconsentComponent */]
    },
    {
        path: 'requestsubmit',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["B" /* RequestdatasubmitComponent */]
    },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["h" /* AuthComponent */]
    },
    {
        path: 'otp/:key/:status',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["v" /* OtpsendComponent */]
    },
    {
        path: 'downloadfile',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["k" /* DownloadfileComponent */]
    },
    {
        path: 'viewfile',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["L" /* ViewfileComponent */]
    },
    {
        path: 'downloadpermission',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["l" /* DownloadpermissionfileComponent */]
    },
    {
        path: 'permissiongranted/:key',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["w" /* PermissiongrantedComponent */]
    },
    {
        path: 'accept/:dkey',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* AcceptComponent */]
    },
    {
        path: 'reject/:dkey',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["y" /* RejectComponent */]
    },
    {
        path: 'showpostdata',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["G" /* ShowpostdataComponent */]
    },
    {
        path: 'trustedlink/:tlKey',
        component: __WEBPACK_IMPORTED_MODULE_4__components_trusted_link_trusted_link_component__["a" /* TrustedLinkComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__components__["u" /* NocontentComponent */]
    }
];


/***/ }),

/***/ "./src/app/components/accept/accept.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n        <app-header></app-header>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-4 consent-title\">\r\n        {{\"You are about to grant the permission to download the following files.\" | translate}}\r\n      </div>\r\n\r\n      <div *ngFor=\"let item of files\" class=\"ms-Grid-row pt-2\">\r\n        <div class=\"ms-CheckBox\">\r\n          <input style=\"margin-top: 10px;\" tabindex=\"-1\" type=\"checkbox\" class=\"ms-CheckBox-input\">\r\n          <label (click)=\"selectfile(item.fileId)\" role=\"checkbox\" class=\"ms-CheckBox-field\" tabindex=\"0\" aria-checked=\"true\"\r\n            name=\"checkboxa\">\r\n            <span class=\"ms-Label permissionfile ml-3\">{{item.name}}</span>\r\n          </label>\r\n        </div>\r\n        <hr class=\"mt-0\">\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row pt-2 title-message\">\r\n        {{\"Are you sure you want to do this?\" | translate}}\r\n      </div>\r\n      <div class=\"ms-Grid-row float-right pt-4 pb-2\">\r\n        <button type=\"button\" [disabled]=\"(selectedfiles.length<1) || loading\" (click)=\"(selectedfiles.length>0) && !loading && requestsent()\"\r\n          class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Confirm\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/accept/accept.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accept/accept.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AcceptComponent = /** @class */ (function () {
    function AcceptComponent(router, route, cd, sharefileservice) {
        this.router = router;
        this.cd = cd;
        this.sharefileservice = sharefileservice;
        this.dkey = '';
        this.files = [];
        this.selectedfiles = [];
        this.loading = false;
        this.dkey = route.snapshot.params['dkey'] && route.snapshot.params['dkey'];
    }
    AcceptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.dkey &&
            this.sharefileservice.getacceptrequestfiles(this.dkey).subscribe(function (data) {
                data && (_this.files = data.files);
                _this.loading = false;
                _this.sender = data.sender.id;
                _this.receiver = data.receiver.id;
                _this.requestDownloadId = data.requestDownloadId;
                _this.files.map(function (x) { return x.isSelected = true; });
                _this.selectedfiles = _this.files;
                _this.cd.detectChanges();
                _this.fabricInitialization();
            }, function (error) {
                _this.loading = false;
            });
    };
    AcceptComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialization();
    };
    AcceptComponent.prototype.fabricInitialization = function () {
        var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
        for (var i = 0; i < CheckBoxElements.length; i++) {
            new fabric['CheckBox'](CheckBoxElements[i]);
        }
    };
    AcceptComponent.prototype.selectfile = function (id) {
        this.files.map(function (f) { return (f.fileId === id) && (f.isSelected = !f.isSelected); });
        this.selectedfiles = this.files.filter(function (f) { return f.isSelected === true; });
    };
    AcceptComponent.prototype.requestsent = function () {
        var _this = this;
        this.loading = true;
        var requestdata = { id: this.requestDownloadId, receiverId: this.receiver, senderId: this.sender, files: this.selectedfiles };
        this.sharefileservice.acceptdownloadrequest(requestdata).subscribe(function (data) {
            _this.loading = false;
            _this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].routes.permissiongranted, 'a']);
        }, function (error) {
            _this.loading = false;
        });
    };
    AcceptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accept',
            template: __webpack_require__("./src/app/components/accept/accept.component.html"),
            styles: [__webpack_require__("./src/app/components/accept/accept.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2__services__["j" /* SharefileService */]])
    ], AcceptComponent);
    return AcceptComponent;
}());



/***/ }),

/***/ "./src/app/components/actionlist/actionlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid-row pt-5\">\r\n  <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n    <button [routerLink]=\"['/home/sharefiles']\" type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block sharebutton\">\r\n      <img class=\"actionlogo\" src=\"../../../assets/icon_share_files.png\">\r\n      <span class=\"pl-2\">{{\"Share data\" | translate}}</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"ms-Grid-row pt-3\">\r\n  <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n    <button [routerLink]=\"['/home/requestdata']\" type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\">\r\n      <img class=\"actionlogo\" src=\"../../../assets/icon_request_data.png\">\r\n      <span class=\"pl-2\">{{\"Request data\" | translate}}</span>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/actionlist/actionlist.component.scss":
/***/ (function(module, exports) {

module.exports = ".actionlogo {\n  height: 20px;\n  width: 20px; }\n\n.sharebutton {\n  padding-left: 0px; }\n\n.requestbutton {\n  padding-right: 0px; }\n"

/***/ }),

/***/ "./src/app/components/actionlist/actionlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionlistComponent = /** @class */ (function () {
    function ActionlistComponent(commonService, storage) {
        this.commonService = commonService;
        this.storage = storage;
    }
    ActionlistComponent.prototype.ngOnInit = function () {
        var user = this.storage.get('user');
        if (user && (user.type || !user.type)) {
            this.commonService.SetAdmin(user);
        }
    };
    ActionlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actionlist',
            template: __webpack_require__("./src/app/components/actionlist/actionlist.component.html"),
            styles: [__webpack_require__("./src/app/components/actionlist/actionlist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["k" /* Storage */]])
    ], ActionlistComponent);
    return ActionlistComponent;
}());



/***/ }),

/***/ "./src/app/components/admincompany/admincompany.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row pb-4\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md1 ms-lg2 ms-xl3\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md10 ms-lg8 ms-xl6\">\r\n      <div class=\"ms-Grid-row pt-3\">\r\n        <div class=\"ms-Grid-row pt-2\">\r\n          <form [formGroup]=\"companyForm\">\r\n\r\n            <div *ngIf=\"loading\" class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n              <img class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n            </div>\r\n\r\n            <div *ngIf=\"showerror\" class=\"ms-MessageBar ms-MessageBar--error\">\r\n              <div class=\"ms-MessageBar-content\">\r\n                <div class=\"ms-MessageBar-icon\">\r\n                  <i class=\"ms-Icon ms-Icon--ErrorBadge\"></i>\r\n                </div>\r\n                <div class=\"ms-MessageBar-text\">\r\n                  {{\"Invalid file. Only png, gif ,jpg ,jpeg files are allowed. Maximum size 500KB.\" | translate}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label is-required\">{{\"Company name\" | translate}}</label>\r\n                <input formControlName=\"name\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm6 ms-md6 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label\">{{\"Website\" | translate}}</label>\r\n                <input formControlName=\"webSite\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm6 ms-md6 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label\">{{\"Domain\" | translate}}</label>\r\n                <input formControlName=\"domain\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\" readonly>\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label\">{{\"Contact Person\" | translate}}</label>\r\n                <select formControlName=\"contactpersonid\" class=\"form-control form-control-sm\">\r\n                  <option value=\"\">{{\"Select Contact\" | translate}}</option>\r\n                  <option *ngFor=\"let item of users\" value=\"{{item.id}}\">{{item.name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n              <div class=\"form-group\">\r\n                <label style=\"font-size: 13px;\">{{\"One time password (OTP) for request data\" | translate}}</label>\r\n                <select formControlName=\"isOtpRequestdataView\" class=\"form-control form-control-sm\">\r\n                  <option value=true>{{\"Active\" | translate}}</option>\r\n                  <option value=false>{{\"Inactive\" | translate}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label\r\n                  class=\"ms-Label\">{{\"Company Logo (max file size 500KB,png,gif,jpg and jpeg are allowed)\" | translate}}</label>\r\n                <div class=\"pb-5\">\r\n                  <img class=\"actionlogo float-right\" [src]=\"config.api.base + companylogoUrl\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-row pt-4\">\r\n              <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n                <file-drop (onFileDrop)=\"dropped($event)\">\r\n                  <div class=\"ms-Grid-row pt-1\">\r\n                    <div class=\"ms-Grid-col ms-sm6 dragstyle\">\r\n                      <label class=\"ms-Label\">{{\"Drag files here or\" | translate}}</label>\r\n                    </div>\r\n                    <label style=\"margin-bottom: 4px;\" class=\"ms-Button ms-Button--primary\">\r\n                      <input type=\"file\" (change)=\"onFileChange($event)\" value=\"Browse files\" />\r\n                      <span class=\"ms-Button-label\">{{\"Browse files\" | translate}}</span>\r\n                    </label>\r\n                  </div>\r\n                </file-drop>\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm3 ms-md3 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label is-required\">{{\"Code\" | translate}}</label>\r\n                <select formControlName=\"countryCode\" class=\"form-control form-control-sm\">\r\n                  <option value=\"\">{{\"Select\" | translate}}</option>\r\n                  <option *ngFor=\"let item of config.country_code.countries | codeOrderBy:'code':true \"\r\n                    value=\"{{item.code}}\">{{item.code}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm9 ms-md9 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label is-required\">{{\"Phone\" | translate}}</label>\r\n                <input formControlName=\"phone\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label is-required\">{{\"Address\" | translate}}</label>\r\n                <input formControlName=\"address\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm6 ms-md6 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label is-required\">{{\"City\" | translate}}</label>\r\n                <input formControlName=\"city\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm6 ms-md6 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label is-required\">{{\"Postalcode\" | translate}}</label>\r\n                <input formControlName=\"postalCode\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label is-required\">{{\"Country\" | translate}}</label>\r\n                <select formControlName=\"country\" class=\"form-control form-control-sm\">\r\n                  <option value=\"\">{{\"Select Country\" | translate}}</option>\r\n                  <option *ngFor=\"let item of config.country_list\" value=\"{{item}}\">{{item}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n              <div class=\"ms-TextField\">\r\n                <label class=\"ms-Label\">{{\"CVR/VAT\" | translate}}</label>\r\n                <input formControlName=\"cvr\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-2 pb-2\">\r\n              <div class=\"ms-Grid-row\">\r\n                <div class=\"ms-Grid-col ms-sm12 ms-md6\">\r\n                  <div *ngIf=\"isSuccess && !loading\" class=\"ms-MessageBar ms-MessageBar--success\">\r\n                    <div class=\"ms-MessageBar-content\">\r\n                      <div class=\"ms-MessageBar-text {{alert}}\">\r\n                        {{message}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"ms-Grid-col ms-sm12 ms-md6\">\r\n                  <button type=\"button\" [disabled]=\"companyForm.invalid\" (click)=\"companyForm.valid && comapnySubmit()\"\r\n                    class=\"ms-Button ms-Button--primary float-right\">\r\n                    <span class=\"ms-Button-label\">{{\"Update Settings\" | translate}}</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <form [formGroup]=\"configForm\">\r\n\r\n            <div class=\"ms-Grid-col ms-sm10 ms-md10 pt-1 mt-2\">\r\n              <label class=\"ms-Label\">{{\"Requested files availability\" | translate:daysParam}} </label>\r\n              <!-- <label class=\"ms-Label\" [translate]=\"'Requested files availability'\" [translateParams]=\"{value: '32'}\"></label> -->\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm2 ms-md2 pt-1 mt-2\">\r\n              <div class=\"ms-TextField\">\r\n                <input formControlName=\"fileAvailability\" class=\"\" style=\"width:50px\" min=\"1\"\r\n                  max=\"{{configComp.configFileAvailability}}\" type=\"number\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n              <hr />\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm10 ms-md8 pt-1\">\r\n              <div class=\"ms-Grid-col ms-sm2 ms-md2 pt-1\">\r\n                <div class=\"ms-BrandIcon--icon16 ms-BrandIcon--sharepoint\"></div>\r\n              </div>\r\n              <label class=\"ms-Label\">{{\"SharePoint Integration\" | translate}}</label>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm2 ms-md4 pt-1 mb-2\">\r\n              <button type=\"button\" class=\"ms-Button ms-Button--small float-right\">\r\n                <span (click)=\"confirmSendMail('SharePoint')\" class=\"ms-Button-label ms-fontColor-themePrimary\">\r\n                  {{\"On demand\" | translate}}</span>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm10 ms-md8 pt-1\">\r\n              <div class=\"ms-Grid-col ms-sm2 ms-md2 pt-1\">\r\n                <div class=\"ms-BrandIcon--icon16 ms-BrandIcon--onedrive\"></div>\r\n              </div>\r\n              <label class=\"ms-Label\">{{\"Microsoft Azure Integration\" | translate}}</label>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm2 ms-md4 pt-1 mb-2\">\r\n              <button type=\"button\" class=\"ms-Button ms-Button--small float-right\">\r\n                <span (click)=\"confirmSendMail('Microsoft Azure')\" class=\"ms-Button-label ms-fontColor-themePrimary\">\r\n                  {{\"On demand\" | translate}}</span>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n              <button type=\"button\" [disabled]=\"configForm.invalid\" (click)=\"configForm.valid && configSubmit()\"\r\n                class=\"ms-Button ms-Button--primary float-right\">\r\n                <span class=\"ms-Button-label\">{{\"Update Settings\" | translate}}</span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md1 ms-lg2 ms-xl3\">\r\n    </div>\r\n\r\n    <div class=\"ondemanddialogue sharepointalert\">\r\n      <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n        <div class=\"ms-Dialog-title\"><b>{{\"Request for integration\" | translate}}</b></div>\r\n\r\n        <div class=\"ms-Dialog-content pb-4\">\r\n          <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n            {{\"Request for Connectid Mail integration with\" | translate}} {{integrationLabel}}\"?\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Dialog-actions\">\r\n          <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n          <button type=\"button\" [disabled]=\"loading\" (click)=\"!loading && sendMailSPIntegration(integrationLabel)\"\r\n            class=\"ms-Button ms-Button--primary\">\r\n            <span class=\"ms-Button-label\">{{\"Send\" | translate}}</span>\r\n          </button>\r\n          <button type=\"button\" [disabled]=\"loading\" (click)=\"demandDialogComponent.close()\" class=\"ms-Button\">\r\n            <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/admincompany/admincompany.component.scss":
/***/ (function(module, exports) {

module.exports = ".actionlogo {\n  height: 25px;\n  width: 25px; }\n\n.dragstyle {\n  color: gray; }\n\n.orstyle {\n  color: gray;\n  font-size: 12px; }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.alert-failed {\n  color: #C20909; }\n"

/***/ }),

/***/ "./src/app/components/admincompany/admincompany.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCompany; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminCompany = /** @class */ (function () {
    function AdminCompany(commonService, storage, userservice, fb, adminUserService, cd, translate) {
        this.commonService = commonService;
        this.storage = storage;
        this.userservice = userservice;
        this.fb = fb;
        this.adminUserService = adminUserService;
        this.cd = cd;
        this.translate = translate;
        this.companyId = "";
        this.isSuccess = false;
        this.companylogoUrl = "";
        this.loading = false;
        this.config = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */];
        this.showerror = false;
        this.users = [];
        this.companyContactId = "";
        this.companyContactName = "";
        this.companyContactEmail = "";
        this.companyId = this.storage.get("companyId");
        this.loading = true;
        this.loadCompany(this.companyId);
        this.loadConfig(this.companyId);
        this.loaduser(this.companyId);
        this.loadPackages();
        this.companyForm = this.fb.group({
            id: [""],
            name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            address: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            packageid: [""],
            domain: [""],
            webSite: [""],
            countryCode: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            city: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            postalCode: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            country: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            cvr: [""],
            contactpersonid: [""],
            logoUrl: [this.companylogoUrl],
            isOtpRequestdataView: [],
            autoRenewal: [],
            isActive: [],
            isDeleted: [],
            deletedTime: [],
            created: [],
            updated: [],
            crmId: [],
            economicId: [],
            billingStartDate: []
        });
        this.configComp = {};
        this.configForm = this.fb.group({
            id: [""],
            fileAvailability: [
                "",
                [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].max(32), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)]
            ],
            companyId: [this.companyId]
        });
        // this.cononChanges();
    }
    AdminCompany.prototype.ngOnInit = function () {
        this.daysParam = { value: 30 };
    };
    // cononChanges(): void {
    //   this.configForm.get('fileAvailability').valueChanges.subscribe(val => {
    //     this.daysParam = { value: val };
    //   });
    // }
    AdminCompany.prototype.comapnySubmit = function () {
        var _this = this;
        this.loading = true;
        var data = this.companyForm.value;
        data.logoUrl = this.companylogoUrl;
        data.PrevContactId =
            this.companyContactId != "" ? this.companyContactId : undefined;
        var NewContactId = data.contactpersonid != "" ? data.contactpersonid : undefined;
        var compId = data.id;
        this.userservice.editCompany(data.id, data).subscribe(function (data) {
            if (NewContactId) {
                _this.userservice
                    .updateCompanyContactPerson(_this.companyContactId != "" ? _this.companyContactId : undefined, NewContactId)
                    .subscribe(function (data) {
                    if (_this.companyContactId != NewContactId) {
                        _this.loaduser(compId);
                    }
                    _this.isSuccess = true;
                    _this.loading = false;
                }, function (error) {
                    _this.loading = false;
                });
            }
            _this.isSuccess = true;
            _this.translate
                .get("Record updated successfully")
                .subscribe(function (res) {
                _this.message = res;
            });
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminCompany.prototype.configSubmit = function () {
        var _this = this;
        this.loading = true;
        var data = this.configForm.value;
        data.companyId = this.companyId;
        this.userservice.editStorage(data.id, data).subscribe(function (data) {
            _this.isSuccess = true;
            _this.translate
                .get("Record updated successfully")
                .subscribe(function (res) {
                _this.message = res;
            });
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminCompany.prototype.loadPackages = function () {
        var _this = this;
        this.userservice.getPackages().subscribe(function (data) {
            _this.companyPackages = data;
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminCompany.prototype.loadCompany = function (companyId) {
        var _this = this;
        this.userservice.getCompany(companyId).subscribe(function (data) {
            _this.loading = false;
            _this.company = data;
            _this.companyForm.controls["id"].setValue(_this.company.id);
            _this.companyForm.controls["name"].setValue(_this.company.name);
            _this.companyForm.controls["address"].setValue(_this.company.address);
            _this.companyForm.controls["packageid"].setValue(_this.company.packageId);
            _this.companyForm.controls["domain"].setValue(_this.company.domain);
            _this.companyForm.controls["webSite"].setValue(_this.company.webSite);
            _this.companyForm.controls["countryCode"].setValue(_this.company.countryCode ? _this.company.countryCode : "");
            _this.companyForm.controls["phone"].setValue(_this.company.phone);
            _this.companyForm.controls["city"].setValue(_this.company.city);
            _this.companyForm.controls["postalCode"].setValue(_this.company.postalCode);
            _this.companyForm.controls["country"].setValue(_this.company.country ? _this.company.country : "");
            _this.companyForm.controls["cvr"].setValue(_this.company.cvr);
            _this.companyForm.controls["isOtpRequestdataView"].setValue(_this.company.isOtpRequestdataView);
            _this.companyForm.controls["autoRenewal"].setValue(_this.company.autoRenewal);
            _this.companyForm.controls["isActive"].setValue(_this.company.isActive);
            _this.companyForm.controls["isDeleted"].setValue(_this.company.isDeleted);
            _this.companyForm.controls["deletedTime"].setValue(_this.company.deletedTime);
            _this.companyForm.controls["created"].setValue(_this.company.created);
            _this.companyForm.controls["updated"].setValue(_this.company.updated);
            _this.companyForm.controls["crmId"].setValue(_this.company.crmId);
            _this.companyForm.controls["economicId"].setValue(_this.company.economicId);
            _this.companyForm.controls["billingStartDate"].setValue(_this.company.billingStartDate);
            //logo
            _this.companylogoUrl = data.logoUrl;
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminCompany.prototype.loaduser = function (companyId) {
        var _this = this;
        this.adminUserService.getAdminUser(companyId).subscribe(function (data) {
            _this.loading = false;
            _this.users = data;
            var selectedUser = _this.users.find(function (d) { return d.isContactPerson == true; });
            if (selectedUser) {
                _this.companyForm.controls["contactpersonid"].setValue(selectedUser.id);
                _this.companyContactId = selectedUser.id;
                _this.companyContactName = selectedUser.name;
                _this.companyContactEmail = selectedUser.email;
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminCompany.prototype.loadConfig = function (companyId) {
        var _this = this;
        this.userservice.getStorageByCompId(companyId).subscribe(function (data) {
            _this.loading = false;
            _this.configComp = data;
            _this.configForm.controls["id"].setValue(_this.configComp.id);
            _this.configForm.controls["fileAvailability"].setValue(_this.configComp.fileAvailability
                ? _this.configComp.fileAvailability
                : _this.configComp.configFileAvailability);
            _this.configForm.controls["companyId"].setValue(_this.configComp.companyId);
            _this.daysParam = { value: _this.configComp.configFileAvailability };
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminCompany.prototype.dropped = function (event) {
        var _this = this;
        if (event.files.length == 1) {
            for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
                var droppedFile = _a[_i];
                if (droppedFile.fileEntry.isFile) {
                    var fileEntry = droppedFile.fileEntry;
                    fileEntry.file(function (file) {
                        _this.uploadFile(file);
                        _this.cd.detectChanges();
                    });
                }
                else {
                    var fileEntry = droppedFile.fileEntry;
                    console.log(droppedFile.relativePath, fileEntry);
                }
            }
        }
    };
    AdminCompany.prototype.uploadFile = function (file) {
        var _this = this;
        var fext = file.name
            .split(".")
            .pop()
            .toLowerCase();
        if ((fext != "png" && fext != "gif" && fext != "jpg" && fext != "jpeg") ||
            file.size > __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].ui.logoSize) {
            this.showerror = true;
        }
        else {
            this.loading = true;
            this.showerror = false;
            this.userservice.updateCompanyLogo(file, this.company.id).subscribe(function (data) {
                if (data) {
                    _this.loading = false;
                    _this.companylogoUrl = data.logoUrl;
                    _this.cd.detectChanges();
                }
            }, function (error) {
                _this.loading = false;
                _this.cd.detectChanges();
            });
        }
    };
    AdminCompany.prototype.onFileChange = function (event) {
        var filecount = event.target.files && event.target.files.length;
        if (filecount > 0) {
            for (var i = 0; i < filecount; i++) {
                this.uploadFile(event.target.files[i]);
            }
        }
    };
    AdminCompany.prototype.confirmSendMail = function (integrationlabel) {
        var onDemandDialog = document.querySelector(".ondemanddialogue");
        var ondemandconfirmation = onDemandDialog.querySelector(".ms-Dialog");
        this.demandDialogComponent = new fabric["Dialog"](ondemandconfirmation);
        this.integrationLabel = integrationlabel;
        this.demandDialogComponent.open();
    };
    AdminCompany.prototype.sendMailSPIntegration = function (integrationtype) {
        var _this = this;
        this.loading = true;
        var data = this.companyForm.value;
        var currentuseremail = JSON.parse(localStorage.getItem("user")).email;
        if (this.companyContactEmail == "") {
            this.demandDialogComponent.close();
            this.alert = "alert-failed";
            this.translate
                .get("Please add a contact person")
                .subscribe(function (res) {
                _this.message = res;
            });
            return;
        }
        this.userservice
            .sendMailOnDemand(data, this.companyContactName, this.companyContactEmail, integrationtype, currentuseremail)
            .subscribe(function (data) {
            _this.demandDialogComponent.close();
            _this.isSuccess = true;
            _this.translate
                .get("Mail Sent succesfully")
                .subscribe(function (res) {
                _this.message = res;
            });
            _this.loading = false;
        }, function (error) {
            _this.demandDialogComponent.close();
            _this.alert = "alert-failed";
            _this.translate.get("Mail sending failed").subscribe(function (res) {
                _this.message = res;
            });
            _this.loading = false;
            return;
        });
    };
    AdminCompany = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "app-admincompany",
            template: __webpack_require__("./src/app/components/admincompany/admincompany.component.html"),
            styles: [__webpack_require__("./src/app/components/admincompany/admincompany.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], AdminCompany);
    return AdminCompany;
}());



/***/ }),

/***/ "./src/app/components/adminconsent/consent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n    <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-10 routeheader\">\r\n        {{\"Consents\" | translate}}\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n        <button  type=\"button\"  class=\"ms-Button ms-Button--primary float-right\" (click)=\"openConsentdialog()\">\r\n          <span class=\"ms-Button-label\">+ {{\"Add Consent\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row pt-2 pb-4\">\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'Search' | translate}}...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-9\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-2\">\r\n        {{\"Name\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Type\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        {{\"Message\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Status\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Action\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"consents\">\r\n    <div *ngFor=\"let rowdata of consents | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-2\">\r\n              <span>{{rowdata.name}}</span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span>{{rowdata.type | translate}}</span>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <pre class=\"pretagcss\">{{rowdata.consentText}}</pre>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <i *ngIf=\"rowdata.isActive == true\" title=\"check\" style=\"color: #0078d7;font-size: 16px;cursor: pointer;\" class=\"fa fa-check\"></i>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <i title=\"Edit\" style=\"color: #0078d7;font-size: 16px;cursor: pointer;\" class=\"fa fa-pencil\" (click)=\"openConsentdialog(rowdata.id)\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">{{\"No Data Found\" | translate}}</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">{{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}} {{entityend}} {{\"of\" | translate}} {{entityCount}} {{\"entries\" | translate}}</p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\"\r\n        previousLabel=\"{{'Previous' | translate}}\"\r\n        nextLabel=\"{{'Next' | translate}}\" (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"consentdialog\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n      <div class=\"ms-Dialog-title\">{{message}}</div>\r\n      <form [formGroup]=\"consentForm\">\r\n        <div *ngIf=\"showerror\" class=\"ms-MessageBar ms-MessageBar--error\" style=\"margin-left: 10px;\">\r\n          <div class=\"ms-MessageBar-content\">\r\n            <div class=\"ms-MessageBar-icon\">\r\n              <i class=\"ms-Icon ms-Icon--ErrorBadge\"></i>\r\n            </div>\r\n            <div class=\"ms-MessageBar-text\">\r\n              {{\"All consents cannot be deactivated for a consent type. At least one consent should be active.\" | translate}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n          <div class=\"ms-TextField\">\r\n            <label class=\"ms-Label\">{{\"Name\" | translate}}</label>\r\n            <input formControlName=\"name\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1 pb-2\">\r\n          <div class=\"ms-TextField ms-TextField--multiline\">\r\n            <label class=\"ms-Label\">{{\"Message\" | translate}}</label>\r\n            <textarea formControlName=\"consenttext\" class=\"ms-TextField-field\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"form-group\">\r\n            <label style=\"font-size: 13px;\">{{\"Type\" | translate}}</label>\r\n            <select formControlName=\"type\"  class=\"form-control form-control-sm\">\r\n              <option *ngFor=\"let item of config.consentType.list\" value=\"{{config.consentType.values[item]}}\">{{config.consentType.labels[item] | translate}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"form-group\">\r\n            <label style=\"font-size: 13px;\">{{\"Set As Active\" | translate}}</label>\r\n            <select formControlName=\"isActive\" class=\"form-control form-control-sm\">\r\n              <option value=true>{{\"Active\" | translate}}</option>\r\n              <option value=false>{{\"Inactive\" | translate}}</option>\r\n            </select>\r\n          </div>\r\n        </div>        \r\n      </form>\r\n      <div class=\"ms-Dialog-actions\">\r\n        <button  type=\"button\" [disabled]=\"consentForm.invalid\" (click)=\"consentForm.valid && packageSubmit()\" class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Save\" | translate}}</span>\r\n        </button>\r\n        <button  type=\"button\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/adminconsent/consent.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminconsent/consent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminConsentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminConsentComponent = /** @class */ (function () {
    function AdminConsentComponent(adminService, route, fb, commonService, storage, translate) {
        this.adminService = adminService;
        this.fb = fb;
        this.commonService = commonService;
        this.storage = storage;
        this.translate = translate;
        this.consents = [];
        this.consentSource = [];
        this.companyId = '';
        this.loading = false;
        this.showerror = false;
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.config = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */];
        this.companyId = this.storage.get('companyId');
        this.loading = true;
        this.loadconsents();
        this.consentForm = this.fb.group({
            id: [''],
            companyId: [this.companyId],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            consenttext: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            type: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            isActive: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
        this.filterForm = this.fb.group({
            searchText: ''
        });
    }
    AdminConsentComponent.prototype.loadconsents = function () {
        var _this = this;
        this.adminService.getconsents(this.companyId).subscribe(function (data) {
            _this.loading = false;
            _this.consents = data;
            _this.consentSource = _this.consents;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminConsentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.consents = (filterkey == "") ? _this.consentSource :
                _this.consentSource.filter(function (x) {
                    return x.name.toString().toUpperCase().includes(filterkey) ||
                        x.consentText.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    AdminConsentComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    AdminConsentComponent.prototype.openConsentdialog = function (id) {
        var _this = this;
        this.showerror = false;
        this.fabricInitialize();
        if (id != undefined) {
            this.translate.get('Edit Consent').subscribe(function (res) {
                _this.message = res;
            });
            var consentObj = this.consents.find(function (u) { return u.id == id; });
            this.consentForm.controls['id'].setValue(consentObj.id);
            this.consentForm.controls['name'].setValue(consentObj.name);
            this.consentForm.controls['consenttext'].setValue(consentObj.consentText);
            this.consentForm.controls['type'].setValue(consentObj.type);
            this.consentForm.controls['isActive'].setValue(consentObj.isActive);
        }
        else {
            this.translate.get('Add Consent').subscribe(function (res) {
                _this.message = res;
            });
            this.consentForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
            this.consentForm.controls['name'].setValue('');
            this.consentForm.controls['consenttext'].setValue('');
            this.consentForm.controls['type'].setValue(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].consentType.values.RequestData);
            this.consentForm.controls['isActive'].setValue(false);
        }
        this.dialogComponent.open();
    };
    AdminConsentComponent.prototype.packageSubmit = function () {
        var _this = this;
        this.loading = true;
        var data = this.consentForm.value;
        data.id && data.id != '00000000-0000-0000-0000-000000000000' &&
            this.adminService.editconsent(data.id, data).subscribe(function (data) {
                if (data == 'Falied') {
                    _this.showerror = true;
                    _this.loading = false;
                }
                else {
                    _this.dialogComponent.close();
                    _this.loadconsents();
                }
            });
        data.id == '00000000-0000-0000-0000-000000000000' &&
            this.adminService.addconsent(data).subscribe(function (data) {
                _this.dialogComponent.close();
                _this.loadconsents();
            });
    };
    AdminConsentComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    AdminConsentComponent.prototype.fabricInitialize = function () {
        var consentdialog = document.querySelector(".consentdialog");
        var dialog = consentdialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
    };
    AdminConsentComponent.prototype.viewcounts = function () {
        this.entityCount = this.consents.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    AdminConsentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminconsent',
            template: __webpack_require__("./src/app/components/adminconsent/consent.component.html"),
            styles: [__webpack_require__("./src/app/components/adminconsent/consent.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], AdminConsentComponent);
    return AdminConsentComponent;
}());



/***/ }),

/***/ "./src/app/components/adminhome/adminhome.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light border-bottom\" style=\"padding-bottom: 0rem;\">\r\n  <a class=\"navbar-brand pr-4\" style=\"font-weight: 500; padding-bottom: 10px;\">\r\n    <span *ngIf=\"showGoBack==false || showGoBack==null\"><img src=\"../../../assets/ss_logo.png\"\r\n        class=\"logo d-inline-block align-top mt-1 mr-1\" alt='{{\"Connectid Mail\" | translate}}'></span>\r\n    <span *ngIf=\"showGoBack\" class=\"gobackcomp\"><i class=\"ms-Icon ms-Icon--ChromeBack backiconcolor gobackicon\"\r\n        [routerLink]=\"['/superadmin/home']\"></i>{{\"Customers\" | translate}} </span>\r\n  </a>\r\n  <div *ngIf=\"usertype == true\" class=\"navbar-collapse\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item nav-padding\" [ngClass]=\"{'activemodule': selectmodule == 'user'}\">\r\n        <a class=\"nav-link active\" (click)=\"routecheck('user')\" [routerLink]=\"['home']\">{{\"User\" | translate}}</a>\r\n      </li>\r\n      <li class=\"nav-item nav-padding\" [ngClass]=\"{'activemodule': selectmodule == 'logs'}\">\r\n        <a class=\"nav-link nav-padding\" (click)=\"routecheck('logs')\" [routerLink]=\"['log']\">{{\"Logs\" | translate}}</a>\r\n      </li>\r\n      <li class=\"nav-item nav-padding\" [ngClass]=\"{'activemodule': selectmodule == 'root'}\">\r\n        <a class=\"nav-link\" (click)=\"routecheck('root')\" [routerLink]=\"['root/a']\">{{\"Folders\" | translate}}</a>\r\n      </li>\r\n      <li class=\"nav-item nav-padding\" [ngClass]=\"{'activemodule': selectmodule == 'consent'}\">\r\n        <a class=\"nav-link\" (click)=\"routecheck('consent')\" [routerLink]=\"['consent']\">{{\"Consent\" | translate}}</a>\r\n      </li>\r\n      <!-- <li class=\"nav-item nav-padding\" [ngClass]=\"{'activemodule': selectmodule == 'billing'}\">\r\n        <a class=\"nav-link\" (click)=\"routecheck('billing')\" [routerLink]=\"['billing']\">{{\"Billing\" | translate}}</a>\r\n      </li> -->\r\n      <li class=\"nav-item nav-padding\" [ngClass]=\"{'activemodule': selectmodule == 'settings'}\">\r\n        <a class=\"nav-link\" (click)=\"routecheck('settings')\" [routerLink]=\"['company']\">{{\"Settings\" | translate}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!--\r\n  <div ngbDropdown placement=\"bottom-right\" class=\"d-inline-block\">\r\n    <div id=\"dropdownBasic1\" style=\"cursor: pointer;\" ngbDropdownToggle>Admin</div>\r\n    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n      <button class=\"dropdown-item\">Log out</button>\r\n    </div>\r\n  </div>\r\n-->\r\n</nav>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/adminhome/adminhome.component.scss":
/***/ (function(module, exports) {

module.exports = ".actionlogo {\n  height: 25px;\n  width: 25px; }\n\n.dragstyle {\n  color: gray; }\n\n.orstyle {\n  color: gray;\n  font-size: 12px; }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.gobackicon {\n  margin-right: 5px;\n  top: 3px;\n  position: relative;\n  color: #0281FF; }\n\n.gobackcomp {\n  position: relative;\n  top: -5px; }\n"

/***/ }),

/***/ "./src/app/components/adminhome/adminhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminhomeComponent = /** @class */ (function () {
    function AdminhomeComponent(router, route, location, storage, authenticationService, commonService, translate) {
        this.router = router;
        this.location = location;
        this.storage = storage;
        this.authenticationService = authenticationService;
        this.commonService = commonService;
        this.translate = translate;
        this.companyId = "";
        this.userId = "";
        this.selectmodule = "user";
        this.navLinks = [];
        this.showGoBack = false;
        this.stopCondition = true;
        this.authlink = '';
        this.companyId = route.snapshot.params["id"];
        if (this.companyId) {
            this.storage.set("companyId", this.companyId);
        }
        this.userId = route.firstChild.params["value"]["id"];
    }
    AdminhomeComponent.prototype.ngOnInit = function () {
        this.getuserbyid();
    };
    AdminhomeComponent.prototype.loadview = function () {
        var _this = this;
        var route = this.location.path(true);
        var user = this.storage.get("user");
        if (route.includes("home")) {
            this.selectmodule = "user";
            if (user && user.isActive && user.company.id && user.type !== null) {
                this.usertype = user.type;
                this.router.navigate([
                    __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.admin + "/" + this.companyId
                ]);
            }
            else {
                this.storage.remove("user");
                if (this.authlink === '') {
                    this.commonService.getAdAppClientId().subscribe(function (data) {
                        _this.authlink = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].api.AuthLink(data);
                        window.location.href = _this.authlink;
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    window.location.href = this.authlink;
                }
            }
        }
        else if (route.includes("log")) {
            this.selectmodule = "logs";
        }
        else if (route.includes("folders") ||
            route.includes("root") ||
            route.includes("file") ||
            route.includes("userfolder") ||
            route.includes("sharedfolder") ||
            route.includes("sharedfolderfile")) {
            this.selectmodule = "root";
            if (user && this.userId && this.userId != "a") {
                user.id != this.userId && (user = null);
            }
            if (!user) {
                this.storage.remove("user");
                window.location.href = this.authlink;
            }
        }
        else if (route.includes("consent")) {
            this.selectmodule = "consent";
        }
        else if (route.includes("billing")) {
            this.selectmodule = "billing";
        }
        else if (route.includes("company")) {
            this.selectmodule = "settings";
        }
        this.showGoBack = this.storage.get("user")
            ? this.storage.get("user").isSuperAdmin
            : false;
    };
    AdminhomeComponent.prototype.checkcode = function (code, isRedirect) {
        var _this = this;
        if (code) {
            // this.windowview.close();
            this.stopCondition = true;
            this.authenticationService
                .getauthwithuserresponse(code)
                .subscribe(function (data) {
                // data.user.type = true;
                _this.storage.set("user", data.user);
                if (data.user.type && data.user.isActive) {
                    isRedirect &&
                        _this.router.navigate([
                            __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.admin +
                                "/" +
                                data.user.company.id +
                                "_" +
                                data.user.type
                        ]);
                }
                else {
                    _this.dialogComponent.open();
                }
            });
        }
    };
    AdminhomeComponent.prototype.readCode = function (isRedirect) {
        var _this = this;
        this.stopCondition = false;
        this.subscription = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].interval(2000)
            .takeWhile(function () { return !_this.stopCondition; })
            .subscribe(function (i) {
            var code = _this.storage.get("code");
            if (code) {
                // this.windowview.close();
                _this.stopCondition = true;
                _this.authenticationService
                    .getauthwithuserresponse(code)
                    .subscribe(function (data) {
                    // data.user.type = true;
                    _this.storage.set("user", data.user);
                    if (data.user.type && data.user.isActive) {
                        isRedirect &&
                            _this.router.navigate([
                                __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.admin +
                                    "/" +
                                    data.user.company.id +
                                    "_" +
                                    data.user.type
                            ]);
                    }
                    else {
                        _this.dialogComponent.open();
                    }
                });
            }
        });
    };
    AdminhomeComponent.prototype.routecheck = function (data) {
        this.selectmodule = data;
    };
    AdminhomeComponent.prototype.getuserbyid = function () {
        var _this = this;
        if (this.userId && this.userId != "a") {
            this.authenticationService
                .getUserInfoById(this.userId)
                .subscribe(function (data) {
                _this.storage.set("user", data);
                if (data && data.language) {
                    _this.translate.use(data.language);
                }
                _this.loadview();
            });
        }
        else {
            this.loadview();
        }
    };
    AdminhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "app-adminhome",
            template: __webpack_require__("./src/app/components/adminhome/adminhome.component.html"),
            styles: [__webpack_require__("./src/app/components/adminhome/adminhome.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services__["d" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], AdminhomeComponent);
    return AdminhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/adminpackage/package.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\" class=\"row no-gutters pt-4 pb-3\">\r\n\r\n    <div class=\"col-md-8 ms-textAlignCenter\" style=\"height: 20px;\">\r\n      <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n    </div>\r\n\r\n    <div class=\"col-md-3 pr-2\">\r\n      <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'Search' | translate}}...\">\r\n    </div>\r\n\r\n    <div class=\"col-md-1\">\r\n      <button  type=\"button\" class=\"ms-Button ms-Button--primary float-right\">\r\n        <span class=\"ms-Button-label\" (click)=\"openPackagedialog()\">{{\"Add New\" | translate}}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-6\">\r\n        {{\"Name\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        {{\"Price\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Action\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"packages\">\r\n    <div *ngFor=\"let rowdata of packages | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border border-top-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <span>{{rowdata.packageName}}</span>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              {{rowdata.price}}\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <i title=\"Edit\" style=\"color: #3f51b5;font-size: 20px;cursor: pointer;\" class=\"fa fa-edit\" (click)=\"openPackagedialog(rowdata.id)\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row border border-top-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">{{\"No Data Found\" | translate}}</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-top-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">{{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}} {{entityend}} {{\"of\" | translate}} {{entityCount}} {{\"entries\" | translate}}</p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\"\r\n        previousLabel=\"{{'Previous' | translate}}\"\r\n        nextLabel=\"{{'Next' | translate}}\"\r\n        (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"packagedialog\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n      <div class=\"ms-Dialog-title\">{{\"Edit Package\" | translate}}</div>\r\n      <form [formGroup]=\"packageForm\">\r\n\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"ms-TextField\">\r\n            <label class=\"ms-Label\">{{\"Name\" | translate}}</label>\r\n            <input formControlName=\"packageName\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"ms-TextField\">\r\n            <label class=\"ms-Label\">{{\"Price\" | translate}}</label>\r\n            <input formControlName=\"price\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"ms-Dialog-actions\">\r\n        <button  type=\"button\" [disabled]=\"packageForm.invalid\" (click)=\"packageForm.valid && packageSubmit()\" class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Save\" | translate}}</span>\r\n        </button>\r\n        <button  type=\"button\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/adminpackage/package.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminpackage/package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminPackageComponent = /** @class */ (function () {
    function AdminPackageComponent(adminUserService, userService, router, route, commonService, fb, storage) {
        this.adminUserService = adminUserService;
        this.userService = userService;
        this.router = router;
        this.commonService = commonService;
        this.fb = fb;
        this.storage = storage;
        this.packages = [];
        this.packageSWource = [];
        this.companyId = '';
        this.loading = false;
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.companyId = this.storage.get('companyId');
        this.loading = true;
        this.loadpackages(this.companyId);
        this.filterForm = this.fb.group({
            searchText: ''
        });
        this.packageForm = this.fb.group({
            id: [''],
            packageName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    AdminPackageComponent.prototype.loadpackages = function (companyId) {
        var _this = this;
        this.userService.getPackages().subscribe(function (data) {
            _this.loading = false;
            _this.packages = data;
            _this.packageSWource = _this.packages;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminPackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.packages = (filterkey == "") ? _this.packageSWource :
                _this.packageSWource.filter(function (x) {
                    return x.packageName.toString().toUpperCase().includes(filterkey) ||
                        x.price.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    AdminPackageComponent.prototype.openPackagedialog = function (id) {
        this.fabricInitialize();
        if (id != undefined) {
            var packageObj = this.packages.find(function (u) { return u.id == id; });
            this.packageForm.controls['id'].setValue(packageObj.id);
            this.packageForm.controls['packageName'].setValue(packageObj.packageName);
            this.packageForm.controls['price'].setValue(packageObj.price);
        }
        else {
            this.packageForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
            this.packageForm.controls['packageName'].setValue('');
            this.packageForm.controls['price'].setValue('');
        }
        this.dialogComponent.open();
    };
    AdminPackageComponent.prototype.packageSubmit = function () {
        var _this = this;
        this.loading = true;
        var data = this.packageForm.value;
        data.id && data.id != '00000000-0000-0000-0000-000000000000' &&
            this.userService.editpackage(data.id, data).subscribe(function (data) {
                _this.dialogComponent.close();
                _this.loadpackages(data.companyId);
            });
        data.id == '00000000-0000-0000-0000-000000000000' &&
            this.userService.addpackage(data).subscribe(function (data) {
                _this.dialogComponent.close();
                _this.loadpackages(data.companyId);
            });
    };
    AdminPackageComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    AdminPackageComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    AdminPackageComponent.prototype.fabricInitialize = function () {
        var userDialog = document.querySelector(".packagedialog");
        var dialog = userDialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
    };
    AdminPackageComponent.prototype.viewcounts = function () {
        this.entityCount = this.packages.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    AdminPackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminpackage',
            template: __webpack_require__("./src/app/components/adminpackage/package.component.html"),
            styles: [__webpack_require__("./src/app/components/adminpackage/package.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], AdminPackageComponent);
    return AdminPackageComponent;
}());



/***/ }),

/***/ "./src/app/components/adminuser/adminuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n    <!-- <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-12 routeheader\">\r\n        <i *ngIf=\"showGoBack\" class=\"ms-Icon ms-Icon--ChromeBack backiconcolor gobackcomp\" [routerLink]=\"['/superadmin/home']\"></i>Home \r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-10 routeheader\">\r\n        {{\"Users\" | translate}}\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n        <button type=\"button\" class=\"ms-Button ms-Button--primary float-right\" (click)=\"openUserdialog()\">\r\n          <span class=\"ms-Button-label\">+ {{\"Add User\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row pt-2 pb-4\">\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\"\r\n          placeholder=\"{{'Search' | translate}}...\">\r\n      </div>\r\n      <div class=\"col-md-9\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-3\">\r\n        {{\"Name\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Type\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        {{\"Email\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Created\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Status\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Action\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"users\">\r\n    <div *ngFor=\"let rowdata of users | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n              <span>{{rowdata.name}}</span>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              {{rowdata.type ? 'Admin' : ''}}\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              {{rowdata.email}}\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              {{rowdata.createDate | date:'dd/MM/yyyy'}}\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <i *ngIf=\"rowdata.isActive == true\" title=\"check\" style=\"color: #0078d7;font-size: 16px;cursor: pointer;\"\r\n                class=\"fa fa-check\"></i>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <i title=\"{{'Edit User'|translate}}\" style=\"color: #0078d7;font-size: 16px;cursor: pointer;\"\r\n                class=\"fa fa-pencil\" (click)=\"openUserdialog(rowdata.id)\"></i>\r\n              <i title=\"{{'Delete'|translate}}\" style=\"color: #0078d7;font-size: 16px;cursor: pointer;\"\r\n                class=\"fa fa-trash\" (click)=\"openDeleteConfirmationDialog(rowdata.id)\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">No Data Found</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">{{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}}\r\n          {{entityend}} {{\"of\" | translate}} {{entityCount}}\r\n          {{\"entries\" | translate}}</p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\" previousLabel=\"{{'Previous' | translate}}\"\r\n          nextLabel=\"{{'Next' | translate}}\" (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"userdialog\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n      <div class=\"ms-Dialog-title\">{{message}}</div>\r\n      <div *ngIf=\"showerror\" class=\"ms-MessageBar ms-MessageBar--error ms-Grid-col ms-sm12 ms-md12\">\r\n        <div class=\"ms-MessageBar-content\">\r\n          <div class=\"ms-MessageBar-icon\">\r\n            <i class=\"ms-Icon ms-Icon--ErrorBadge\"></i>\r\n          </div>\r\n          <div class=\"ms-MessageBar-text\">\r\n            {{\"A user with this email already exists\" | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"userForm\">\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n          <div class=\"ms-TextField\">\r\n            <label class=\"ms-Label\">{{\"Name\" | translate}}</label>\r\n            <input formControlName=\"name\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"ms-TextField\">\r\n            <label class=\"ms-Label\">{{\"Email\" | translate}}</label>\r\n            <input formControlName=\"email\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"form-group\">\r\n            <label style=\"font-size: 13px;\">{{\"Type\" | translate}}</label>\r\n            <select formControlName=\"type\" class=\"form-control form-control-sm\">\r\n              <option value=true>{{\"Admin\" | translate}}</option>\r\n              <option value=false>{{\"User\" | translate}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1 pb-4\">\r\n          <div class=\"form-check\">\r\n            <input formControlName=\"isActive\" type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n            <label class=\"form-check-label\" for=\"exampleCheck1\">{{\"Set As Active\" | translate}}</label>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n      <div class=\"ms-Dialog-actions\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n        <button type=\"button\" [disabled]=\"userForm.invalid || loading\"\r\n          (click)=\"!loading && userForm.valid && userSubmit()\" class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Save\" | translate}}</span>\r\n        </button>\r\n        <button type=\"button\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"deleteConfirmationDialog\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n      <div class=\"ms-Dialog-title\">{{'Delete User' | translate}}</div>\r\n      <div class=\"ms-Dialog-content\">\r\n        <p class=\"ms-Dialog-subText\">{{'Are you sure to delete the user?' | translate}}</p>\r\n      </div>\r\n      <div class=\"ms-Dialog-actions\">\r\n        <button type=\"button\" (click)=\"userDelete()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Delete\" | translate}}</span>\r\n        </button>\r\n        <button type=\"button\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/adminuser/adminuser.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminuser/adminuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminuserComponent = /** @class */ (function () {
    function AdminuserComponent(adminUserService, userService, commonService, router, route, fb, storage, translate) {
        this.adminUserService = adminUserService;
        this.userService = userService;
        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.translate = translate;
        this.users = [];
        this.userSource = [];
        this.companylist = [];
        this.companyId = '';
        this.selectedUserId = '';
        this.loading = false;
        this.showGoBack = false;
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.showerror = false;
        this.companyId = this.storage.get('companyId');
        this.loading = true;
        this.loaduser(this.companyId);
        this.filterForm = this.fb.group({
            searchText: ''
        });
        this.userForm = this.fb.group({
            id: [''],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            companyId: [this.companyId],
            type: [false],
            isActive: [true]
        });
    }
    AdminuserComponent.prototype.loaduser = function (companyId) {
        var _this = this;
        this.adminUserService.getAdminUser(companyId).subscribe(function (data) {
            _this.loading = false;
            _this.users = data.filter(function (u) {
                return u.isDeleted !== true;
            });
            _this.userSource = _this.users;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    AdminuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.storage.get('user');
        this.showGoBack = this.loggedInUser ? this.loggedInUser.isSuperAdmin : false;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.users = (filterkey == "") ? _this.userSource :
                _this.userSource.filter(function (x) {
                    return x.name.toString().toUpperCase().includes(filterkey) ||
                        x.email.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    AdminuserComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    AdminuserComponent.prototype.openUserdialog = function (id) {
        var _this = this;
        this.fabricInitialize();
        if (id != undefined) {
            this.translate.get('Edit User').subscribe(function (res) {
                _this.message = res;
            });
            var user = this.users.find(function (u) { return u.id == id; });
            this.userForm.controls['id'].setValue(user.id);
            this.userForm.controls['name'].setValue(user.name);
            this.userForm.controls['email'].setValue(user.email);
            this.userForm.controls['type'].setValue(user.type);
            this.userForm.controls['isActive'].setValue(user.isActive);
        }
        else {
            this.translate.get('Add User').subscribe(function (res) {
                _this.message = res;
            });
            this.userForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
            this.userForm.controls['name'].setValue('');
            this.userForm.controls['email'].setValue('');
            this.userForm.controls['type'].setValue(false);
            this.userForm.controls['isActive'].setValue(true);
        }
        this.dialogComponent.open();
        this.showerror = false;
    };
    AdminuserComponent.prototype.userSubmit = function () {
        var _this = this;
        this.loading = true;
        this.showerror = false;
        var data = this.userForm.value;
        if (data.id && data.id != '00000000-0000-0000-0000-000000000000') {
            data.updatedBy = this.loggedInUser.id;
            this.userService.editUser(data.id, data).subscribe(function (data) {
                if (data.isExists) {
                    _this.showerror = true;
                    _this.loading = false;
                }
                else {
                    _this.dialogComponent.close();
                    _this.showerror = false;
                    _this.loaduser(data.companyId);
                }
            });
        }
        else {
            data.createdBy = this.loggedInUser.id;
            this.userService.adduser(data).subscribe(function (data) {
                if (data.isExists) {
                    _this.showerror = true;
                    _this.loading = false;
                }
                else {
                    _this.dialogComponent.close();
                    _this.showerror = false;
                    _this.loaduser(data.companyId);
                }
            });
        }
    };
    AdminuserComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    AdminuserComponent.prototype.fabricInitialize = function () {
        var userDialog = document.querySelector(".userdialog");
        var dialog = userDialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
    };
    AdminuserComponent.prototype.viewcounts = function () {
        this.entityCount = this.users.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    AdminuserComponent.prototype.openDeleteConfirmationDialog = function (id) {
        var userDialog = document.querySelector(".deleteConfirmationDialog");
        var dialog = userDialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
        this.selectedUserId = id;
        this.dialogComponent.open();
    };
    AdminuserComponent.prototype.userDelete = function () {
        var _this = this;
        this.userService.deleteUser(this.selectedUserId).subscribe(function (res) {
            console.log(res);
            var userIndex = _this.users.findIndex(function (u) { return u.id == _this.selectedUserId; });
            _this.users.splice(userIndex, 1);
            _this.dialogComponent.close();
        }, function (error) { console.log(error); });
    };
    AdminuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminuser',
            template: __webpack_require__("./src/app/components/adminuser/adminuser.component.html"),
            styles: [__webpack_require__("./src/app/components/adminuser/adminuser.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], AdminuserComponent);
    return AdminuserComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  auth works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/auth/auth.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = /** @class */ (function () {
    function AuthComponent(commonService, route, storage) {
        this.commonService = commonService;
        this.storage = storage;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__("./src/app/components/auth/auth.component.html"),
            styles: [__webpack_require__("./src/app/components/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services__["k" /* Storage */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/components/billing/billing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n\r\n    <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-10 routeheader\">\r\n        {{\"Billing\" | translate}}\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row pt-2 pb-4\">\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'Search' | translate}}...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-9\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-6\">\r\n        {{\"Billing month\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"No. of Active users\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Shared file transaction\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Request data transaction\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"billings\">\r\n    <div *ngFor=\"let rowdata of billings | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              {{rowdata.yearmonth}}\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              {{rowdata.noOfUsers}}\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              {{rowdata.noOfShared}}\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              {{rowdata.noOfPostData }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">{{\"No Data Found\" | translate}}</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">{{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}} {{entityend}} {{\"of\" | translate}} {{entityCount}} {{\"entries\" | translate}}</p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\"\r\n        previousLabel=\"{{'Previous' | translate}}\"\r\n        nextLabel=\"{{'Next' | translate}}\"\r\n        (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/billing/billing.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/billing/billing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillingComponent = /** @class */ (function () {
    function BillingComponent(adminUserService, commonService, router, route, fb, storage) {
        this.adminUserService = adminUserService;
        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.billings = [];
        this.billingsSource = [];
        this.loading = false;
        this.companyId = '';
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        //this.userId = route.snapshot.params['id'];
        this.companyId = this.storage.get('companyId');
        this.filterForm = this.fb.group({
            searchText: ''
        });
        this.loading = true;
        this.loaduser(this.companyId);
    }
    BillingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.billings = (filterkey == "") ? _this.billingsSource :
                _this.billingsSource.filter(function (x) {
                    return x.yearmonth.toString().toUpperCase().includes(filterkey) ||
                        x.noOfShared.toString().toUpperCase().includes(filterkey) ||
                        x.noOfPostData.toString().toUpperCase().includes(filterkey) ||
                        x.noOfUsers.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    BillingComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    BillingComponent.prototype.loaduser = function (companyid) {
        var _this = this;
        this.adminUserService.getBillingInfo(companyid).subscribe(function (data) {
            _this.loading = false;
            _this.billings = data;
            _this.billingsSource = _this.billings;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    BillingComponent.prototype.viewcounts = function () {
        this.entityCount = this.billings.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    BillingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__("./src/app/components/billing/billing.component.html"),
            styles: [__webpack_require__("./src/app/components/billing/billing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid-row pt-4\">\r\n  <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n    <span>{{\"You're done. Go ahead and compose and send your email.\" | translate}}</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(commonService) {
        this.commonService = commonService;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__("./src/app/components/confirmation/confirmation.component.html"),
            styles: [__webpack_require__("./src/app/components/confirmation/confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["e" /* CommonService */]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-customer/delete-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n        <app-header *ngIf=\"company\" [company]=\"company\"></app-header>\r\n      </div>\r\n      <form *ngIf=\"!unSubscribed\">\r\n        <div class=\"ms-Grid-row ms-textAlignCenter pt-4 pb-4 consent-title\">\r\n          {{\"You are about to delete your account and all users. Please confirm or cancel.\" | translate}}\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <div class=\"ms-Grid-row pt-2 pb-2\">\r\n          <div class=\"ms-Grid-col ms-sm12\">\r\n            <div class=\"ms-Grid-row\">\r\n              <div class=\"ms-Grid-col ms-sm6\">\r\n                <button type=\"button\" class=\"ms-Button ms-Button--default\" (click)=\"deleteCompany()\">\r\n                  <span class=\"ms-Button-label\">{{\"Confirm\" | translate}}</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"ms-Grid-col ms-sm6\" style=\"text-align: right;\">\r\n                <button type=\"button\" class=\"ms-Button ms-Button--primary\" (click)=\"closeWindow()\">\r\n                  <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div *ngIf=\"unSubscribed\" class=\"ms-Grid-row ms-textAlignCenter pt-4\">\r\n        <p>\r\n          {{\"Thanks for giving Connectid Mail a try. We are sorry that you did not find Connectid Mail useful and would appreciate your feed-back and suggestions on how to improve the application to suit your needs better. Please feel free to write to us in a mail to\" | translate}}\r\n          <a href=\"mailTo:compliant@safeonline.dk\">compliant@safeonline.dk</a>\r\n        </p>\r\n        <p\r\n          [innerHTML]=\"'If you are interested in personal data protection, try our tool to protect your data.' | translate: translateParam\">\r\n        </p>\r\n        <div class=\"ms-Grid-col ms-sm12 pt-4\">\r\n          <button type=\"button\" class=\"ms-Button ms-Button--primary\" (click)=\"closeWindow()\">\r\n            <span class=\"ms-Button-label\">{{\"Close\" | translate}}</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/delete-customer/delete-customer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/delete-customer/delete-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_common_service__ = __webpack_require__("./src/app/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeleteCustomerComponent = /** @class */ (function () {
    function DeleteCustomerComponent(route, router, translate, commonService, companyService) {
        this.router = router;
        this.translate = translate;
        this.commonService = commonService;
        this.companyService = companyService;
        this.customerId = route.snapshot.params["id"];
        this.unSubscribed = false;
        this.translateParam = { url: "" };
    }
    DeleteCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getAppLinkConfig().subscribe(function (data) {
            _this.translateParam = { url: data.overViewPersonal };
        }, function (error) {
            console.log(error);
        });
        this.companyService.getCompany(this.customerId).subscribe(function (data) {
            if (data) {
                _this.company = data;
                if (data.isDeleted || data.isActive === false)
                    _this.unSubscribed = true;
            }
            else {
                window.location.href = '/';
            }
        }, function (error) {
            _this.unSubscribed = true;
        });
    };
    DeleteCustomerComponent.prototype.deleteCompany = function () {
        var _this = this;
        this.companyService.unsubscribe(this.customerId).subscribe(function (data) {
            console.log(data);
            _this.unSubscribed = true;
        }, function (error) {
            console.log(error);
        });
    };
    DeleteCustomerComponent.prototype.closeWindow = function () {
        window.location.href = '/';
    };
    DeleteCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-delete-customer',
            template: __webpack_require__("./src/app/components/delete-customer/delete-customer.component.html"),
            styles: [__webpack_require__("./src/app/components/delete-customer/delete-customer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__services_company_service__["a" /* CompanyService */]])
    ], DeleteCustomerComponent);
    return DeleteCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/downloadfile/downloadfile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n        <app-header></app-header>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-4 consent-title\">\r\n        <span *ngIf=\"days>=0\">{{\"These files will be available for\" | translate}} {{days}} {{\"more days.\" | translate}}</span>\r\n        <span *ngIf=\"days<1\">{{\"These files were deleted.\" | translate}}</span>\r\n        <div>\r\n          <span class=\"permission\" *ngIf=\"status=='downloadpermission'\">{{\"Permission granted to download following files\" | translate}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let item of files\" class=\"ms-Grid-row pt-4\">\r\n        <span>{{item.name}}</span>\r\n        <span class=\"float-right\">\r\n          <a style=\"text-decoration: none\" target=\"_blank\" [href]=\"item.downloadUrl\" title=\"\">\r\n            <span style=\"background-color: #0078d7;color: white;height: 32px;min-width: 80px;padding: 1px 10px 2px;\">{{\"Download\" | translate}}</span>\r\n          </a>\r\n        </span>\r\n      </div>\r\n      <div class=\"ms-Grid-row pt-4\">\r\n        <app-safety-signature></app-safety-signature>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/downloadfile/downloadfile.component.scss":
/***/ (function(module, exports) {

module.exports = ".permission {\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/components/downloadfile/downloadfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__("./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadfileComponent = /** @class */ (function () {
    function DownloadfileComponent(router, sharefileservice, commonService, storage) {
        this.router = router;
        this.sharefileservice = sharefileservice;
        this.commonService = commonService;
        this.storage = storage;
        this.files = [];
        this.loading = false;
    }
    DownloadfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = this.storage.get('status');
        if (this.status == 'sharedata1') {
            this.loading = true;
            var otp = this.storage.get('otp');
            otp &&
                this.sharefileservice.getfiles(otp).subscribe(function (data) {
                    if (data) {
                        _this.days = data.files[0].expDate && _this.commonService.dateDiff(data.files[0].expDate);
                        if (_this.days >= 0) {
                            _this.files = data.files;
                            _this.files.forEach(function (f) {
                                f.downloadUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].api.base + '/api/file/downloadblob' + '/' + f.fileId;
                            });
                        }
                        _this.loading = false;
                    }
                }, function (error) {
                    _this.loading = false;
                });
        }
        else if (this.status == 'downloadpermission') {
            this.loading = true;
            var otp = this.storage.get('key');
            otp &&
                this.sharefileservice.getacceptrequestfiles(otp).subscribe(function (data) {
                    data && (_this.files = data.files);
                    _this.files.forEach(function (f) {
                        f.downloadUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].api.base + '/api/file/downloadblob' + '/' + f.fileId;
                    });
                    _this.loading = false;
                }, function (error) {
                    _this.loading = false;
                });
        }
    };
    DownloadfileComponent.prototype.downloadfile = function (fileid) {
        this.sharefileservice.downloadfile(fileid).subscribe(function (data) {
            var blob = new Blob([data], { type: 'application/octet-stream' });
            Object(__WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"])(blob, 'test.png');
            // return data;
        });
    };
    DownloadfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-downloadfile',
            template: __webpack_require__("./src/app/components/downloadfile/downloadfile.component.html"),
            styles: [__webpack_require__("./src/app/components/downloadfile/downloadfile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services__["j" /* SharefileService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], DownloadfileComponent);
    return DownloadfileComponent;
}());



/***/ }),

/***/ "./src/app/components/downloadpermissionfile/downloadpermissionfile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n        <app-header></app-header>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-4 consent-title\">\r\n        {{\"Select the files you would like to download.\" | translate}}\r\n      </div>\r\n\r\n      <div *ngFor=\"let item of files\" class=\"ms-Grid-row pt-2\">\r\n        <div class=\"ms-CheckBox\">\r\n          <input style=\"margin-top: 10px;\" tabindex=\"-1\" type=\"checkbox\" class=\"ms-CheckBox-input\">\r\n          <label (click)=\"selectfile(item.fileId)\" role=\"checkbox\" class=\"ms-CheckBox-field\" tabindex=\"0\" aria-checked=\"true\" name=\"checkboxa\">\r\n            <span class=\"ms-Label permissionfile ml-3\">{{item.name}}</span>\r\n          </label>\r\n        </div>\r\n        <hr class=\"mt-0\">\r\n      </div>\r\n\r\n      <div *ngIf=\"sender\" class=\"ms-Grid-row pt-2 title-message\">\r\n        {{\"A request will be sent to\" | translate}} {{sender.email}} {{\"asking for permission to download\" | translate}}\r\n      </div>\r\n      <div class=\"ms-Grid-row float-right pt-4 pb-2\">\r\n        <button type=\"button\"  (click)=\"cancel()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n        </button>\r\n        <button  type=\"button\" [disabled]=\"(selectedfiles.length < 1) || loading\" (click)=\"(selectedfiles.length>0) && !loading && requestsent()\"\r\n          class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Send request\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/downloadpermissionfile/downloadpermissionfile.component.scss":
/***/ (function(module, exports) {

module.exports = ".permissionfile {\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/components/downloadpermissionfile/downloadpermissionfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadpermissionfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DownloadpermissionfileComponent = /** @class */ (function () {
    function DownloadpermissionfileComponent(router, sharefileservice, cd, storage) {
        this.router = router;
        this.sharefileservice = sharefileservice;
        this.cd = cd;
        this.storage = storage;
        this.files = [];
        this.selectedfiles = [];
        this.loading = false;
    }
    DownloadpermissionfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var otp = this.storage.get('otp');
        otp &&
            this.sharefileservice.getfiles(otp).subscribe(function (data) {
                data && (_this.files = data.files);
                _this.loading = false;
                _this.sender = data.sender;
                _this.receiver = data.receiver.id;
                _this.files.map(function (x) { return x.isSelected = true; });
                _this.selectedfiles = _this.files;
                _this.cd.detectChanges();
                _this.fabricInitialization();
            }, function (error) {
                _this.loading = false;
            });
    };
    DownloadpermissionfileComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialization();
    };
    DownloadpermissionfileComponent.prototype.fabricInitialization = function () {
        var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
        for (var i = 0; i < CheckBoxElements.length; i++) {
            new fabric['CheckBox'](CheckBoxElements[i]);
        }
    };
    DownloadpermissionfileComponent.prototype.selectfile = function (id) {
        this.files.map(function (f) { return (f.fileId === id) && (f.isSelected = !f.isSelected); });
        this.selectedfiles = this.files.filter(function (f) { return f.isSelected === true; });
    };
    DownloadpermissionfileComponent.prototype.requestsent = function () {
        var _this = this;
        this.loading = true;
        var requestdata = { receiverId: this.receiver, senderId: this.sender.id, files: this.selectedfiles };
        this.sharefileservice.sendDownloadPermission(requestdata).subscribe(function (data) {
            _this.loading = false;
            _this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].routes.permissiongranted, 'u']);
        }, function (error) {
            _this.loading = false;
        });
    };
    DownloadpermissionfileComponent.prototype.cancel = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].routes.viewfile]);
    };
    DownloadpermissionfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-downloadpermissionfile',
            template: __webpack_require__("./src/app/components/downloadpermissionfile/downloadpermissionfile.component.html"),
            styles: [__webpack_require__("./src/app/components/downloadpermissionfile/downloadpermissionfile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services__["j" /* SharefileService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__services__["k" /* Storage */]])
    ], DownloadpermissionfileComponent);
    return DownloadpermissionfileComponent;
}());



/***/ }),

/***/ "./src/app/components/folders/folders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n\r\n    <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-10 routeheader\">\r\n        <nav aria-label=\"breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a\r\n                routerLink=\"/admin/{{companyId}}/root/{{status}}\">{{\"Folders\" | translate}}</a></li>\r\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">{{\"User Folders\" | translate}}</li>\r\n          </ol>\r\n        </nav>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row pt-2 pb-4\">\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\"\r\n          placeholder=\"{{'Search' | translate}}...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-9\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-6\">\r\n        {{\"User folder\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{\"Modified date\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{\"Files available\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"folders\">\r\n    <div *ngFor=\"let rowdata of folders | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <span class=\"namelink\" style=\"cursor: pointer;\"\r\n                routerLink=\"/admin/{{companyId}}/userfolder/{{rowdata.userModel.id}}\">\r\n                <img class=\"folder\" src=\"../../../assets/icon_user_folder.png\"> {{rowdata.userModel.name}}\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <span *ngIf=\"rowdata.postDatas.length>0\">{{rowdata.postDatas[0].sentDate | date}}</span>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              {{sumfiles(rowdata.postDatas)}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">{{\"No Data Found\" | translate}}</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">{{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}}\r\n          {{entityend}} {{\"of\" | translate}} {{entityCount}} {{\"entries\" | translate}}</p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\" previousLabel=\"{{'Previous' | translate}}\"\r\n          nextLabel=\"{{'Next' | translate}}\" (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/folders/folders.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/folders/folders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoldersComponent = /** @class */ (function () {
    function FoldersComponent(adminUserService, commonService, router, route, fb, storage) {
        this.adminUserService = adminUserService;
        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.folders = [];
        this.folderSource = [];
        this.loading = false;
        this.companyId = '';
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.filterForm = this.fb.group({
            searchText: ''
        });
        this.companyId = this.storage.get('companyId');
        this.status = this.storage.get('userstatus');
        this.loading = true;
        this.loaduser(this.companyId);
    }
    FoldersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.folders = (filterkey == "") ? _this.folderSource :
                _this.folderSource.filter(function (x) {
                    return x.userModel.name.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    FoldersComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    FoldersComponent.prototype.loaduser = function (companyId) {
        var _this = this;
        this.adminUserService.getFolders(companyId).subscribe(function (data) {
            _this.loading = false;
            if (_this.status == 'a') {
                _this.folders = data;
            }
            else {
                _this.folders = data.filter(function (x) { return x.userModel.id == _this.status; });
            }
            _this.folderSource = _this.folders;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    FoldersComponent.prototype.viewcounts = function () {
        this.entityCount = this.folders.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    FoldersComponent.prototype.sumfiles = function (files) {
        var filecount = 0;
        files.forEach(function (element) {
            filecount = filecount + element.noOfFiles;
        });
        return filecount;
    };
    FoldersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-folders',
            template: __webpack_require__("./src/app/components/folders/folders.component.html"),
            styles: [__webpack_require__("./src/app/components/folders/folders.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], FoldersComponent);
    return FoldersComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters footer-background\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"footer-left\">\r\n            SafeOnline ApS, Ny Carlsberg Vej 80, 1799 Copenhagen, Denmark\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"footer-right\">{{\"Powered by\" | translate}} <a href=\"{{poweredByLink}}\"\r\n                target=\"_blank\"><b>Connectid</b></a></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer-left {\n  text-align: center;\n  font-size: 12px;\n  font-weight: normal;\n  color: #999999;\n  margin-top: 36px;\n  position: fixed;\n  bottom: 0;\n  left: 0; }\n\n.footer-right {\n  text-align: right;\n  color: #B3B3B3;\n  font-size: 12px;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  padding-right: 10px; }\n\n.footer-right a {\n  color: #B3B3B3 !important;\n  text-decoration: none; }\n\n.footer-background {\n  background: #E8EAED;\n  position: fixed;\n  padding: 10px;\n  bottom: 0;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.poweredByLink = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].ui.base;
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"companyurl!=''\">\r\n    <img class=\"sharesimplelogoportal\" [src]=\"companyurl\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(storage) {
        this.storage = storage;
        this.companyname = '';
        this.companyurl = '../../../assets/ss_logo.png';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var storagecompany = this.storage.get('companynameurl');
        if (this.company) {
            this.company = this.company;
        }
        else {
            this.company = storagecompany && storagecompany;
        }
        if (this.company && this.company.name && this.company.logoUrl) {
            this.companyname = this.company.name;
            this.companyurl = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].api.base + this.company.logoUrl;
        }
        else {
            this.companyname = 'Connectid Mail';
            this.companyurl = '../../../assets/ss_logo.png';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "company", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["k" /* Storage */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n      <div class=\"ms-Grid-row pt-2 pl-2\">\r\n        <div *ngIf=\"myfolderUrl!=''\" class=\"float-left pr-3\">\r\n          <a [href]=\"myfolderUrl\" style=\"text-decoration: none;\" target=\"_blank\">\r\n            <img class=\"admin\" src=\"../../../assets/icon_folder.png\">\r\n            <span>{{\"My folder\" | translate}}</span>\r\n            <span *ngIf=\"alertcount>0\" placement=\"bottom-left\"\r\n              ngbTooltip=\"{{'Some of the requested/received files are about to expire. Please take actions on them before they are deleted.' | translate}}\"\r\n              class=\"badge red-text badge-notify\">{{alertcount}}</span>\r\n          </a>\r\n        </div>\r\n        <div *ngIf=\"isAdmin && adminUrl!=''\" class=\"float-right pr-2\">\r\n          <a [href]=\"adminUrl\" style=\"text-decoration: none;\" target=\"_blank\">\r\n            <img class=\"admin\" src=\"../../../assets/icon_admin.png\">\r\n            <span>{{\"Administration\" | translate}}</span>\r\n          </a>\r\n        </div>\r\n        <i *ngIf=\"backcheck(this.location.path(true))\" class=\"ms-Icon ms-Icon--ChromeBack backiconcolor\"\r\n          (click)=\"back()\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2\">\r\n        <img class=\"sharesimplelogo\" src=\"../../../assets/ss_logo.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".heading {\n  font-weight: 500;\n  font-size: 20px;\n  padding-top: 8px; }\n\n.backiconcolor {\n  color: #0078d7;\n  cursor: pointer;\n  width: 100%;\n  margin-top: 12px; }\n\n.admin {\n  height: 20px;\n  width: 20px;\n  padding-bottom: 2px; }\n\n.badge-notify {\n  background: #FAA21B;\n  position: relative;\n  top: -10px;\n  left: -4px;\n  color: white; }\n\n.badge {\n  font-size: 60%;\n  padding: .30em .4em;\n  border-radius: 1rem;\n  font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(location, router, storage, userService, adminUserService, cd, commonService, logger) {
        this.location = location;
        this.router = router;
        this.storage = storage;
        this.userService = userService;
        this.adminUserService = adminUserService;
        this.cd = cd;
        this.commonService = commonService;
        this.logger = logger;
        this.isback = true;
        this.adminUrl = '';
        this.myfolderUrl = '';
        this.isAdmin = false;
        this.alertcount = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.remove('otp');
        this.storage.remove('status');
        this.storageCode();
        this.subscription = this.commonService.activeAdmin.subscribe(function (x) {
            if (x.company.id && x.isActive) {
                _this.isAdmin = x.type;
                _this.adminUrl = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].ui.base + 'admin/' + x.company.id + '_' + _this.isAdmin;
                _this.myfolderUrl = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].ui.base + 'admin/' + x.company.id + '_' + _this.isAdmin + '/root/' + x.id;
                _this.adminsubscription = _this.adminUserService.getUserfolder(x.id).subscribe(function (data) {
                    _this.alertcount = 0;
                    data.forEach(function (element) {
                        var days = element.postDataFiles[0] && _this.commonService.dateDiff(element.postDataFiles[0].expDate);
                        if (days && (days >= 0) && (days < 6) && (element.noOfFiles > 0)) {
                            _this.alertcount = _this.alertcount + element.noOfFiles;
                        }
                    });
                }, function (error) {
                });
                _this.cd.detectChanges();
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription && this.subscription.unsubscribe();
        this.adminsubscription && this.adminsubscription.unsubscribe();
    };
    HomeComponent.prototype.back = function () {
        this.backcheck(this.location.path(true)) &&
            this.location.back();
    };
    HomeComponent.prototype.storageCode = function () {
        var code = this.getParam('code');
        var state = this.getParam('state');
        if (code && code != '') {
            this.storage.set('code', code);
        }
    };
    HomeComponent.prototype.getParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return decodeURI(results[1]) || 0;
        }
    };
    HomeComponent.prototype.backcheck = function (data) {
        if (data) {
            if (data == '/home/welcome' || data == '/home/registration' || data == '/home/actions' || data == '/home/inactiveuser') {
                return false;
            }
            else {
                return true;
            }
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["g" /* LoggerService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__welcomepage_welcomepage_component__ = __webpack_require__("./src/app/components/welcomepage/welcomepage.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_0__welcomepage_welcomepage_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionlist_actionlist_component__ = __webpack_require__("./src/app/components/actionlist/actionlist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__actionlist_actionlist_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("./src/app/components/registration/registration.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sharefiles_sharefiles_component__ = __webpack_require__("./src/app/components/sharefiles/sharefiles.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_4__sharefiles_sharefiles_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestdata_requestdata_component__ = __webpack_require__("./src/app/components/requestdata/requestdata.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_5__requestdata_requestdata_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requestdataconsent_requestdataconsent_component__ = __webpack_require__("./src/app/components/requestdataconsent/requestdataconsent.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_6__requestdataconsent_requestdataconsent_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__requestdatasubmit_requestdatasubmit_component__ = __webpack_require__("./src/app/components/requestdatasubmit/requestdatasubmit.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_7__requestdatasubmit_requestdatasubmit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__confirmation_confirmation_component__ = __webpack_require__("./src/app/components/confirmation/confirmation.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__confirmation_confirmation_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adminuser_adminuser_component__ = __webpack_require__("./src/app/components/adminuser/adminuser.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__adminuser_adminuser_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_component__ = __webpack_require__("./src/app/components/auth/auth.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_10__auth_auth_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__otpsend_otpsend_component__ = __webpack_require__("./src/app/components/otpsend/otpsend.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_11__otpsend_otpsend_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__viewfile_viewfile_component__ = __webpack_require__("./src/app/components/viewfile/viewfile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_12__viewfile_viewfile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__downloadfile_downloadfile_component__ = __webpack_require__("./src/app/components/downloadfile/downloadfile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_13__downloadfile_downloadfile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__downloadpermissionfile_downloadpermissionfile_component__ = __webpack_require__("./src/app/components/downloadpermissionfile/downloadpermissionfile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_14__downloadpermissionfile_downloadpermissionfile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__permissiongranted_permissiongranted_component__ = __webpack_require__("./src/app/components/permissiongranted/permissiongranted.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_15__permissiongranted_permissiongranted_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_16__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__accept_accept_component__ = __webpack_require__("./src/app/components/accept/accept.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_17__accept_accept_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reject_reject_component__ = __webpack_require__("./src/app/components/reject/reject.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_18__reject_reject_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__showpostdata_showpostdata_component__ = __webpack_require__("./src/app/components/showpostdata/showpostdata.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_19__showpostdata_showpostdata_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admincompany_admincompany_component__ = __webpack_require__("./src/app/components/admincompany/admincompany.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_20__admincompany_admincompany_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__adminhome_adminhome_component__ = __webpack_require__("./src/app/components/adminhome/adminhome.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_21__adminhome_adminhome_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__adminpackage_package_component__ = __webpack_require__("./src/app/components/adminpackage/package.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_22__adminpackage_package_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__adminconsent_consent_component__ = __webpack_require__("./src/app/components/adminconsent/consent.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_23__adminconsent_consent_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__logs_logs_component__ = __webpack_require__("./src/app/components/logs/logs.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_24__logs_logs_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__superuser_superuser_component__ = __webpack_require__("./src/app/components/superuser/superuser.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_25__superuser_superuser_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__nocontent_nocontent_component__ = __webpack_require__("./src/app/components/nocontent/nocontent.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_26__nocontent_nocontent_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__superuserhome_superuserhome_component__ = __webpack_require__("./src/app/components/superuserhome/superuserhome.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_27__superuserhome_superuserhome_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__billing_billing_component__ = __webpack_require__("./src/app/components/billing/billing.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_28__billing_billing_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__folders_folders_component__ = __webpack_require__("./src/app/components/folders/folders.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_29__folders_folders_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__userfolder_userfolder_component__ = __webpack_require__("./src/app/components/userfolder/userfolder.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_30__userfolder_userfolder_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__userfiles_userfiles_component__ = __webpack_require__("./src/app/components/userfiles/userfiles.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_31__userfiles_userfiles_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__messageinactiveuser_messageinactiveuser_component__ = __webpack_require__("./src/app/components/messageinactiveuser/messageinactiveuser.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_32__messageinactiveuser_messageinactiveuser_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__rootfolder_rootfolder_component__ = __webpack_require__("./src/app/components/rootfolder/rootfolder.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_33__rootfolder_rootfolder_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__sharedfolder_sharedfolder_component__ = __webpack_require__("./src/app/components/sharedfolder/sharedfolder.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_34__sharedfolder_sharedfolder_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__sharedfolderfile_sharedfolderfile_component__ = __webpack_require__("./src/app/components/sharedfolderfile/sharedfolderfile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_35__sharedfolderfile_sharedfolderfile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__managesharing_managesharing_component__ = __webpack_require__("./src/app/components/managesharing/managesharing.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_36__managesharing_managesharing_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__newfolder_newfolder_component__ = __webpack_require__("./src/app/components/newfolder/newfolder.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_37__newfolder_newfolder_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_38__footer_footer_component__["a"]; });









































/***/ }),

/***/ "./src/app/components/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n\r\n    <div class=\"row pt-4 pb-3 routeheader\">\r\n      <div class=\"col-md-3\">\r\n        {{\"Logs\" | translate}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row pt-2 pb-4\">\r\n\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'Search' | translate}}...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-7\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n        <div class=\"form-group\">\r\n          <select [attr.disabled]=\"filterForm.invalid?'':null\" formControlName=\"logkey\" class=\"form-control form-control-sm\">\r\n            <option value=\"sharedata\">{{\"Share data logs\" | translate}}</option>\r\n            <option value=\"postdata\">{{\"Request data logs\" | translate}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-2\">\r\n        {{NameLabel | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Send Date\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{SenderEmailLabel | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{ReceiverEmailLabel | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Files\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Files Size\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\" *ngIf=\"showReceivedDate\">\r\n        {{\"Received Date\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"File Status\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"logs\">\r\n    <div *ngFor=\"let rowdata of logs | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-sm-2\">\r\n              {{rowdata.sender.name}}\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              {{rowdata.sentDate | date}}\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span placement=\"bottom\" ngbTooltip=\"{{rowdata.sender.email}}\">{{rowdata.sender.email | shorten: 30:\r\n                '...'}}</span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div *ngFor=\"let receiver of rowdata.receivers\">\r\n                <span placement=\"bottom\" ngbTooltip=\"{{receiver.receiverEmail}}\">{{receiver.receiverEmail | shorten:\r\n                  30: '...'}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div *ngFor=\"let filerow of rowdata.files\">\r\n                <span placement=\"bottom\" ngbTooltip=\"{{filerow.name}}\">{{filerow.name | shorten: 15: '...'}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <div *ngFor=\"let filerow of rowdata.files\">\r\n                <span>{{(filerow.size/1000000) | number : '1.2-4'}} MB</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-1\" *ngIf=\"showReceivedDate\">\r\n              <span *ngIf=\"rowdata.files.length>0\"> {{rowdata.files[0].createdDate | date}}</span>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <span *ngIf=\"rowdata.files.length>0\">\r\n                <div *ngIf=\"rowdata.files[0].isDeleted\" class=\"fileDeleted\">\r\n                  <p>{{\"Deleted\" | translate}}</p>({{rowdata.files[0].deletedDate | date}})\r\n                </div>\r\n                <div *ngIf=\"!rowdata.files[0].isDeleted\">\r\n                  <p>{{\"Available\" | translate}}</p>\r\n                </div>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">{{\"No Data Found\" | translate}}</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">{{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}} {{entityend}} {{\"of\" | translate}} {{entityCount}}\r\n          {{\"entries\" | translate}}\r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\"\r\n        previousLabel=\"{{'Previous' | translate}}\"\r\n        nextLabel=\"{{'Next' | translate}}\"\r\n        (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/logs/logs.component.scss":
/***/ (function(module, exports) {

module.exports = ".fileDeleted {\n  font-size: 10px;\n  color: gray; }\n\n.fileDeleted p {\n  color: red;\n  margin-bottom: 5px;\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/components/logs/logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogsComponent = /** @class */ (function () {
    function LogsComponent(userService, commonService, router, route, fb, storage) {
        this.userService = userService;
        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.logs = [];
        this.logSource = [];
        this.companyId = '';
        this.loading = false;
        this.showReceivedDate = false;
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.companyId = this.storage.get('companyId');
        this.filterForm = this.fb.group({
            searchText: '',
            logkey: ['sharedata', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var logkey = this.filterForm.value.logkey;
        this.showlogs(logkey);
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.logs = (filterkey == "") ? _this.logSource :
                _this.logSource.filter(function (x) {
                    return x.sender.name.toString().toUpperCase().includes(filterkey) ||
                        x.sender.email.toString().toUpperCase().includes(filterkey) ||
                        (x.receivers.map(function (x) { return x.receiverEmail; }).toString().toUpperCase().includes(filterkey)) ||
                        (x.files.map(function (x) { return x.name; }).toString().toUpperCase().includes(filterkey));
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
        this.filterForm.controls.logkey.valueChanges.subscribe(function (data) {
            if (data == '' || !data) {
                _this.logs = _this.logSource;
            }
            else {
                _this.loading = true;
                _this.showlogs(data);
            }
        });
    };
    LogsComponent.prototype.showlogs = function (logkey) {
        var _this = this;
        if (logkey == "sharedata") {
            this.SenderEmailLabel = "Sender Email";
            this.ReceiverEmailLabel = "Receivers Email";
            this.NameLabel = "Sender Name";
            this.showReceivedDate = false;
        }
        else {
            this.SenderEmailLabel = "Receiver Email";
            this.ReceiverEmailLabel = "Sender Email";
            this.NameLabel = "Receiver Name";
            this.showReceivedDate = true;
        }
        this.userService.getlogs(this.companyId, logkey).subscribe(function (data) {
            _this.loading = false;
            _this.logs = data;
            _this.logSource = _this.logs;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    LogsComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    LogsComponent.prototype.viewcounts = function () {
        this.entityCount = this.logs.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    LogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__("./src/app/components/logs/logs.component.html"),
            styles: [__webpack_require__("./src/app/components/logs/logs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "./src/app/components/managesharing/managesharing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h5 class=\"modal-title\" id=\"exampleModalLabel\"></h5>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(false)\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n\r\n<form>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\"  class=\"ms-Button ms-Button--primary\">\r\n      <span class=\"ms-Button-label\">{{\"Save\" | translate}}</span>\r\n    </button>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/components/managesharing/managesharing.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/managesharing/managesharing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagesharingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagesharingComponent = /** @class */ (function () {
    function ManagesharingComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ManagesharingComponent.prototype.ngOnInit = function () {
    };
    ManagesharingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managesharing',
            template: __webpack_require__("./src/app/components/managesharing/managesharing.component.html"),
            styles: [__webpack_require__("./src/app/components/managesharing/managesharing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ManagesharingComponent);
    return ManagesharingComponent;
}());



/***/ }),

/***/ "./src/app/components/messageinactiveuser/messageinactiveuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid-row pt-4\">\r\n  <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n    <span>{{\"Thank you for using Connectid Mail. Your account is inactive now. Please contact your organization Admin for allowing you using this application.\" | translate}}</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/messageinactiveuser/messageinactiveuser.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/messageinactiveuser/messageinactiveuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageinactiveuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageinactiveuserComponent = /** @class */ (function () {
    function MessageinactiveuserComponent() {
    }
    MessageinactiveuserComponent.prototype.ngOnInit = function () {
    };
    MessageinactiveuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messageinactiveuser',
            template: __webpack_require__("./src/app/components/messageinactiveuser/messageinactiveuser.component.html"),
            styles: [__webpack_require__("./src/app/components/messageinactiveuser/messageinactiveuser.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageinactiveuserComponent);
    return MessageinactiveuserComponent;
}());



/***/ }),

/***/ "./src/app/components/newfolder/newfolder.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  newfolder works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/newfolder/newfolder.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/newfolder/newfolder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewfolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewfolderComponent = /** @class */ (function () {
    function NewfolderComponent() {
    }
    NewfolderComponent.prototype.ngOnInit = function () {
    };
    NewfolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newfolder',
            template: __webpack_require__("./src/app/components/newfolder/newfolder.component.html"),
            styles: [__webpack_require__("./src/app/components/newfolder/newfolder.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewfolderComponent);
    return NewfolderComponent;
}());



/***/ }),

/***/ "./src/app/components/nocontent/nocontent.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  {{\"Not Found.\" | translate}}\r\n</div>"

/***/ }),

/***/ "./src/app/components/nocontent/nocontent.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nocontent/nocontent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NocontentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NocontentComponent = /** @class */ (function () {
    function NocontentComponent() {
    }
    NocontentComponent.prototype.ngOnInit = function () {
    };
    NocontentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nocontent',
            template: __webpack_require__("./src/app/components/nocontent/nocontent.component.html"),
            styles: [__webpack_require__("./src/app/components/nocontent/nocontent.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NocontentComponent);
    return NocontentComponent;
}());



/***/ }),

/***/ "./src/app/components/otpsend/otpsend.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <form *ngIf=\"optsend\" [formGroup]=\"otpsendForm\">\r\n        <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n          <app-header [company]=\"company\"></app-header>\r\n        </div>\r\n        <div *ngIf=\"emails && emails.length>0\">\r\n          <div class=\"ms-Grid-row ms-textAlignCenter pt-4 pb-4 consent-title\">\r\n            {{\"Please select a mail to send one time password.\" | translate}}\r\n          </div>\r\n          <div *ngFor=\"let item of emails\" class=\"form-check pt-2\">\r\n            <input formControlName=\"email\" class=\"form-check-input\" type=\"radio\" [value]=\"item.receiverId\">\r\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n              {{item.receiverEmail}}\r\n            </label>\r\n          </div>\r\n          <hr>\r\n          <div class=\"ms-Grid-row pt-2 pb-2\">\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md9\">\r\n              <div class=\"ms-Grid-row float-left\">\r\n                <span class=\"ms-message\" style=\"padding-left:0px;\" *ngIf=\"isLinkExpired\">\r\n                  {{\"The requested data is already submitted. If you still want to submit again, please ask your requester to send a request mail again. Thank you.\" | translate}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md3\">\r\n              <div class=\"ms-Grid-row float-right\">\r\n                <button type=\"button\" [disabled]=\"otpsendForm.invalid || isLinkExpired\"\r\n                  (click)=\"otpsendForm.valid && !isLinkExpired && sendotp()\" class=\"ms-Button ms-Button--primary\">\r\n                  <span class=\"ms-Button-label\">{{\"Send\" | translate}}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"emails && emails.length==0\" class=\"ms-Grid-row ms-textAlignCenter pt-4 pb-4 consent-title\">\r\n          <img class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n        </div>\r\n        <div *ngIf=\"!emails\" class=\"ms-Grid-row ms-textAlignCenter pt-4 pb-4\">\r\n          <p>{{\"Sorry, the data is no longer available.\" | translate}}</p>\r\n          <p>{{\"Please ask the sender to share the data again.\" | translate}}</p>\r\n        </div>\r\n      </form>\r\n      <form *ngIf=\"!optsend\" [formGroup]=\"otpmatchForm\">\r\n        <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n          <app-header *ngIf=\"company\" [company]=\"company\"></app-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"optStep == 1\" class=\"ms-Grid-row ms-textAlignCenter pt-4 pb-4 consent-title\">\r\n          {{\"An email has been sent to you with a one time password. Please enter the password below\" | translate}}\r\n        </div>\r\n\r\n        <div *ngIf=\"optStep == 2\" class=\"ms-Grid-row ms-textAlignCenter pt-4 pb-4 consent-title\">\r\n          {{\"An SMS passcode has been sent to the recipient for identification. Please enter the passcode below.\" | translate}}\r\n          <br>\r\n          {{\"The SMS passcode has been sent to\" | translate}} {{selectedReceiver.mobile | star: 3 }}\r\n        </div>\r\n\r\n        <div class=\"ms-TextField ms-TextField--underlined\">\r\n          <label class=\"ms-Label\">{{\"Password\" | translate}}</label>\r\n          <input formControlName=\"otppasscode\" class=\"ms-TextField-field input-otp\" type=\"password\" value=\"\"\r\n            placeholder=\"\">\r\n        </div>\r\n        <div *ngIf=\"message\" class=\"ms-Grid-row pt-1 pb-2\">\r\n          <div class=\"ms-Grid-col ms-sm12\">\r\n            <span class=\"ms-message\">{{message}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-row pt-1 pb-2\">\r\n          <div class=\"ms-Grid-col ms-sm9\">\r\n            <button *ngIf=\"optStep == 2\" type=\"button\" class=\"ms-Button ms-Button--default float-left\"\r\n              (click)=\"otpsendForm.valid && !isLinkExpired && sendotp()\">\r\n              <span class=\"ms-Button-label\">{{\"Resend OTP\" | translate}}</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"ms-Grid-col ms-sm3\">\r\n            <button type=\"button\" [disabled]=\"otpmatchForm.invalid\" (click)=\"otpmatchForm.valid && matchotp()\"\r\n              class=\"ms-Button ms-Button--primary float-right\">\r\n              <span class=\"ms-Button-label\">{{\"Ok\" | translate}}</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/otpsend/otpsend.component.scss":
/***/ (function(module, exports) {

module.exports = ".ms-message {\n  padding-left: 15px;\n  font-size: 12px;\n  color: red; }\n\n.ms-TextField .input-otp {\n  border-left: 2px solid #c8c8c8;\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/components/otpsend/otpsend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpsendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_postdata_service__ = __webpack_require__("./src/app/services/postdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OtpsendComponent = /** @class */ (function () {
    function OtpsendComponent(fb, route, commonService, storage, sharefileservice, postDataService, adminService, router, translate) {
        this.fb = fb;
        this.commonService = commonService;
        this.storage = storage;
        this.sharefileservice = sharefileservice;
        this.postDataService = postDataService;
        this.adminService = adminService;
        this.router = router;
        this.translate = translate;
        this.key = "";
        this.status = "";
        this.companyId = "";
        this.requiredConsent = "";
        this.emails = [];
        this.optsend = true;
        this.otp = "";
        this.key = route.snapshot.params["key"] && route.snapshot.params["key"];
        this.status =
            route.snapshot.params["status"] && route.snapshot.params["status"];
        this.companyId = this.storage.get("companynameurl") && this.storage.get("companynameurl").id;
        if (this.key != "" && this.status != "") {
            this.storage.remove("key");
            this.storage.remove("status");
            this.storage.set("key", this.key);
            this.storage.set("status", this.status);
        }
        this.otpsendForm = this.fb.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.otpmatchForm = this.fb.group({
            otppasscode: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    //
    OtpsendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status == "postdata" &&
            this.otpsendForm.controls.email.valueChanges.subscribe(function (x) {
                var quesryData = _this.emails.find(function (data) { return data.receiverId == x; });
                if (quesryData && quesryData.isFilled) {
                    _this.isLinkExpired = true;
                }
                else {
                    _this.isLinkExpired = false;
                }
            });
        if (this.status == "downloadpermission") {
            this.adminService
                .getconsent(this.companyId, __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].consentType.values.ShareData)
                .subscribe(function (data) {
                if (data.consentText) {
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.requestconsent]);
                }
                else {
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.downloadfile]);
                }
            });
        }
        else if (this.status == "showpostdata") {
            this.storage.remove("key");
            var keys = this.key.split("_");
            if (keys.length === 2) {
                this.key = keys[0];
                this.storage.set("key", this.key);
                this.storage.set("showpostdatareceiverId", keys[1]);
            }
            this.sharefileservice.getpostdatashowreceiver(this.key).subscribe(function (data) {
                var receiver = {
                    id: data.sender.id,
                    receiverEmail: data.sender.email,
                    receiverId: data.sender.id
                };
                _this.emails.push(receiver);
                _this.company = data.company;
                _this.storage.set("companynameurl", _this.company);
                if (_this.company.isOtpRequestdataView === false) {
                    _this.storage.remove("otp");
                    _this.storage.set("otp", _this.key);
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.showpostdata]);
                }
            }, function (error) { });
        }
        else {
            this.sharefileservice.getReceivers(this.key, this.status).subscribe(function (data) {
                _this.sharedata = data.sharedata;
                _this.emails = data.receivers;
                _this.company = data.company;
                _this.storage.set("companynameurl", _this.company);
            }, function (error) { });
        }
        this.optStep = 1;
        this.selectedReceiver = { mobile: '+8801717890883', receiverEmail: '' };
    };
    OtpsendComponent.prototype.ngAfterViewInit = function () { };
    OtpsendComponent.prototype.sendotp = function () {
        var _this = this;
        if (this.status == "showpostdata") {
            this.optsend = false;
            this.sharefileservice.getpostdatashowotp(this.key).subscribe(function (data) {
                if (data) {
                    _this.otpexpire = data.otpExpDate;
                    _this.otp = _this.key;
                }
            });
        }
        else {
            var receiverid = this.otpsendForm.value.email;
            if (receiverid) {
                this.optsend = false;
                var requestObj = { ReceiverId: receiverid, OtpStep: this.optStep };
                this.sharefileservice
                    .sendOtp(requestObj, this.status)
                    .subscribe(function (data) {
                    if (data) {
                        var selectedmails = data.receiver;
                        _this.otpexpire = data.otpExpDate;
                        var test = _this.commonService.minuteDiff(_this.otpexpire);
                        _this.otp = selectedmails && selectedmails.otp;
                        if (data.errorMessage) {
                            console.log(data.errorMessage);
                        }
                    }
                });
            }
        }
    };
    OtpsendComponent.prototype.matchotp = function () {
        var _this = this;
        if (this.otpmatchForm.value.otppasscode.trim() === this.otp.trim() &&
            this.commonService.minuteDiff(this.otpexpire) > 0) {
            this.storage.remove("otp");
            this.storage.remove("optexpire");
            this.storage.set("otp", this.otp);
            this.storage.set("optexpire", this.otpexpire);
            if (this.status == "sharedata0") {
                if (!this.moreVerification()) {
                    this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.viewfile]);
                }
            }
            else if (this.status == "showpostdata") {
                this.postDataService.receiveByRequestor(this.key, this.storage.get("showpostdatareceiverId")).subscribe(function (resp) {
                    console.log(resp);
                });
                this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.showpostdata]);
            }
            else {
                if (this.status == "sharedata1") {
                    if (!this.moreVerification()) {
                        this.adminService
                            .getconsent(this.companyId, __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].consentType.values.ShareData)
                            .subscribe(function (data) {
                            console.log('Consent:', data);
                            if (data.consentText) {
                                _this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.requestconsent]);
                            }
                            else {
                                _this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.downloadfile]);
                            }
                        });
                    }
                }
                else {
                    this.adminService
                        .getconsent(this.companyId, __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].consentType.values.RequestData)
                        .subscribe(function (data) {
                        if (data.consentText) {
                            _this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.requestconsent]);
                        }
                        else {
                            _this.router.navigate([__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].routes.requestsubmit]);
                        }
                    });
                }
            }
        }
        else if (this.commonService.minuteDiff(this.otpexpire) < 0) {
            this.translate
                .get("One time password is expired.")
                .subscribe(function (res) {
                _this.message = res;
            });
        }
        else {
            this.translate
                .get("Wrong one time password.")
                .subscribe(function (res) {
                _this.message = res;
            });
        }
    };
    OtpsendComponent.prototype.fabricInitialize = function () {
        var SpinnerElements = document.querySelectorAll(".ms-Spinner");
        for (var i = 0; i < SpinnerElements.length; i++) {
            new fabric["Spinner"](SpinnerElements[i]);
        }
    };
    OtpsendComponent.prototype.moreVerification = function () {
        var _this = this;
        if (this.optStep === 1 && this.sharedata.smsAuthenticationEnabled) {
            this.message = '';
            this.optStep = 2;
            this.otpmatchForm.reset();
            this.selectedReceiver = this.emails.find(function (x) { return x.receiverId == _this.otpsendForm.value.email; });
            this.sendotp();
            return true;
        }
        else
            return false;
    };
    OtpsendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "app-otpsend",
            template: __webpack_require__("./src/app/components/otpsend/otpsend.component.html"),
            styles: [__webpack_require__("./src/app/components/otpsend/otpsend.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__services__["j" /* SharefileService */],
            __WEBPACK_IMPORTED_MODULE_0__services_postdata_service__["a" /* PostdataService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], OtpsendComponent);
    return OtpsendComponent;
}());



/***/ }),

/***/ "./src/app/components/permissiongranted/permissiongranted.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n        <app-header></app-header>\r\n      </div>\r\n\r\n      <div *ngIf=\"message\" class=\"ms-Grid-row ms-textAlignCenter pt-4 consent-title\">\r\n        {{message}}\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2 title-message\">\r\n        {{\"You may close this window.\" | translate}}\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12\">\r\n        <app-safety-signature></app-safety-signature>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/permissiongranted/permissiongranted.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/permissiongranted/permissiongranted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissiongrantedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissiongrantedComponent = /** @class */ (function () {
    function PermissiongrantedComponent(route, translate) {
        this.translate = translate;
        this.key = "";
        this.message = "";
        this.key = route.snapshot.params["key"] && route.snapshot.params["key"];
    }
    PermissiongrantedComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.key == "a") {
            this.translate.get("Permission granted.").subscribe(function (res) {
                _this.message = res;
            });
        }
        else if (this.key == "u") {
            this.translate
                .get("Your request has been sent.")
                .subscribe(function (res) {
                _this.message = res;
            });
        }
        else if (this.key == "p") {
            this.translate
                .get("Your data has been sent.")
                .subscribe(function (res) {
                _this.message = res;
            });
        }
        else {
            this.message = "";
        }
        //this.message = (this.key == 'a') ? 'Permission granted.' : (this.key == 'u') ? 'Your request has been sent.' : (this.key == 'p') ? 'Your data has been sent.' : '';
    };
    PermissiongrantedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-permissiongranted",
            template: __webpack_require__("./src/app/components/permissiongranted/permissiongranted.component.html"),
            styles: [__webpack_require__("./src/app/components/permissiongranted/permissiongranted.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], PermissiongrantedComponent);
    return PermissiongrantedComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isregistration\" class=\"ms-Grid-row pt-2\">\r\n  <form [formGroup]=\"registrationForm\">\r\n\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\" style=\"height: 20px;\">\r\n      <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n    </div>\r\n\r\n    <div *ngIf=\"isregistration\" class=\"ms-Grid-col ms-sm12 ms-md12 pt-1 ms-textAlignCenter\">\r\n      {{\"Signup for Connectid Mail\" | translate}}\r\n    </div>\r\n\r\n    <div *ngIf=\"isregistration\" class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label is-required\">{{\"Company name\" | translate}}</label>\r\n        <input formControlName=\"company\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label\">{{\"Website\" | translate}}</label>\r\n        <input formControlName=\"webSite\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"ms-Grid-col ms-sm6 ms-md6 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label\">Domain</label>\r\n        <input formControlName=\"domain\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\" readonly>\r\n      </div>\r\n    </div>\r\n     -->\r\n\r\n    <div class=\"ms-Grid-col ms-sm3 ms-md3 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label is-required\">{{\"Code\" | translate}}</label>\r\n        <select formControlName=\"countryCode\" class=\"form-control form-control-sm\">\r\n          <option value=\"\"></option>\r\n          <option *ngFor=\"let item of config.country_code.countries\" value=\"{{item.code}}\">{{item.code}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm9 ms-md9 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label is-required\">{{\"Phone\" | translate}}</label>\r\n        <input formControlName=\"phone\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isregistration\" class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label is-required\">{{\"Address\" | translate}}</label>\r\n        <input formControlName=\"address\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm6 ms-md6 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label is-required\">{{\"City\" | translate}}</label>\r\n        <input formControlName=\"city\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm6 ms-md6 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label is-required\">{{\"Postalcode\" | translate}}</label>\r\n        <input formControlName=\"postalCode\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n      <div class=\"ms-TextField\">\r\n        <label class=\"ms-Label is-required\">{{\"Country\" | translate}}</label>\r\n        <select formControlName=\"country\" class=\"form-control form-control-sm\">\r\n          <option value=\"\">{{\"Select Country\" | translate}}</option>\r\n          <option *ngFor=\"let item of config.country_code.countries | orderBy :'name'\" value=\"{{item.name}}\">\r\n            {{item.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isregistration\" class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n      <button type=\"button\" [disabled]=\"registrationForm.invalid || loading\"\r\n        (click)=\"registrationForm.valid && !loading && registrationSubmit()\"\r\n        class=\"ms-Button ms-Button--primary float-right\">\r\n        <span class=\"ms-Button-label\">{{\"Confirm\" | translate}}</span>\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/registration/registration.component.scss":
/***/ (function(module, exports) {

module.exports = "input[type=\"text\"] {\n  min-width: 0; }\n"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb, router, userservice, commonService, storage) {
        this.fb = fb;
        this.router = router;
        this.userservice = userservice;
        this.commonService = commonService;
        this.storage = storage;
        this.packages = [];
        this.loading = false;
        this.isregistration = false;
        this.companySizeOption = [
            { 'name': '1-10 employees', 'value': '1-10 employees' },
            { 'name': '11-20 employees', 'value': '11-20 employees' },
            { 'name': '21-30 employees', 'value': '21-30 employees' },
            { 'name': '31-40 employees', 'value': '31-40 employees' },
            { 'name': '41-50 employees', 'value': '41-50 employees' }
        ];
        this.config = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */];
        // this.registrationForm = this.fb.group({
        //   company: ['', Validators.required],
        //   address: '',
        //   companySize: ['', Validators.required]
        // });
        this.registrationForm = this.fb.group({
            id: [''],
            company: ['', this.commonService.noWhitespaceValidator],
            address: ['', this.commonService.noWhitespaceValidator],
            packageid: [''],
            domain: [''],
            webSite: [''],
            countryCode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            phone: ['', this.commonService.noWhitespaceValidator],
            city: ['', this.commonService.noWhitespaceValidator],
            postalCode: ['', this.commonService.noWhitespaceValidator],
            country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            cvr: [''],
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coderesponse = this.storage.get('coderesponse');
        var user = this.storage.get('user');
        if (Office && Office.context && Office.context.mailbox && Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress) {
            if (user && user.company && user.company.id) {
                this.loading = true;
                this.isregistration = false;
                this.company = user.company;
                var name_1 = Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.displayName;
                var email = Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress;
                var accesstoken = this.coderesponse.user.shareSimpleToken;
                var expiresOn = this.coderesponse.authenticationResult.expiresOn;
                var extendedExpiresOn = this.coderesponse.authenticationResult.extendedExpiresOn;
                var requestdata = { name: name_1, type: false, isActive: false, email: email, companyId: user.company.id, accessToken: accesstoken, expiresOn: expiresOn, extendedExpiresOn: extendedExpiresOn };
                this.addnewuser(requestdata);
            }
            else {
                this.loading = true;
                this.isregistration = true;
                this.userservice.getPackages().subscribe(function (data) {
                    if (data) {
                        var orgination = _this.coderesponse.graphOrganization && _this.coderesponse.graphOrganization.displayName;
                        orgination && _this.registrationForm.patchValue({
                            company: orgination
                        });
                        _this.loading = false;
                        _this.packages = data;
                    }
                }, function (error) {
                    _this.loading = false;
                });
            }
        }
    };
    RegistrationComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialization();
    };
    RegistrationComponent.prototype.registrationSubmit = function () {
        var _this = this;
        if (Office && Office.context && Office.context.mailbox && Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress) {
            this.loading = true;
            var name_2 = Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.displayName;
            var email_1 = Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress;
            var companyinfo = void 0;
            var fromdata = this.registrationForm.value;
            var domain = email_1.substring(email_1.lastIndexOf("@") + 1);
            var companydata = {
                name: fromdata.company,
                address: fromdata.address,
                packageId: fromdata.packageprize,
                domain: domain,
                webSite: fromdata.webSite,
                countryCode: fromdata.countryCode,
                phone: fromdata.phone,
                city: fromdata.city,
                postalCode: fromdata.postalCode,
                country: fromdata.country
            };
            this.userservice.addCompany(companydata).subscribe(function (data) {
                if (data && data.id) {
                    _this.company = data;
                    var accesstoken = _this.coderesponse.user.shareSimpleToken;
                    var expiresOn = _this.coderesponse.authenticationResult.expiresOn;
                    var extendedExpiresOn = _this.coderesponse.authenticationResult.extendedExpiresOn;
                    var requestdata = { name: name_2, type: true, isActive: true, isContactPerson: true, email: email_1, companyId: data.id, accessToken: accesstoken, expiresOn: expiresOn, extendedExpiresOn: extendedExpiresOn };
                    _this.addnewuser(requestdata);
                }
            }, function (error) {
                _this.loading = false;
            });
        }
    };
    RegistrationComponent.prototype.fabricInitialization = function () {
    };
    RegistrationComponent.prototype.addnewuser = function (requestdata) {
        var _this = this;
        this.userservice.adduser(requestdata).subscribe(function (data) {
            if (data) {
                _this.loading = false;
                if (requestdata.isActive) {
                    _this.storage.remove('user');
                    data.company = _this.company;
                    _this.storage.set('user', data);
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].routes.action]);
                }
                else {
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].routes.inactiveuser]);
                }
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/components/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/reject/reject.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n        <app-header></app-header>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n      <div *ngIf=\"message\" class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-4 consent-title\">\r\n        {{message}}\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/reject/reject.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reject/reject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RejectComponent = /** @class */ (function () {
    function RejectComponent(route, sharefileservice, translate) {
        this.sharefileservice = sharefileservice;
        this.translate = translate;
        this.dkey = "";
        this.loading = false;
        this.dkey = route.snapshot.params["dkey"] && route.snapshot.params["dkey"];
    }
    RejectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.dkey &&
            this.sharefileservice.rejectrequest(this.dkey).subscribe(function (data) {
                _this.loading = false;
                // data &&
                //   (this.message = 'Request rejected successfully.');
                if (data) {
                    _this.translate
                        .get("Request rejected successfully.")
                        .subscribe(function (res) {
                        _this.message = res;
                    });
                }
            }, function (error) {
                _this.loading = false;
            });
    };
    RejectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-reject",
            template: __webpack_require__("./src/app/components/reject/reject.component.html"),
            styles: [__webpack_require__("./src/app/components/reject/reject.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services__["j" /* SharefileService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], RejectComponent);
    return RejectComponent;
}());



/***/ }),

/***/ "./src/app/components/requestdata/requestdata.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid-row\">\r\n  <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n\r\n    <div class=\"ms-textAlignCenter\" style=\"height: 20px;\">\r\n      <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n    </div>\r\n\r\n    <div class=\"ms-textAlignCenter requestheader pt-1\">{{\"Request Data\" | translate}}</div>\r\n    <div class=\"ms-textAlignCenter requesttitle pt-2\">\r\n      {{\"You may request files or specific pieces of information using the options below.\" | translate}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ms-Grid-row pt-4\">\r\n  <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n    <form [formGroup]=\"requestDataForm\">\r\n      <div formArrayName=\"requestDataList\" class=\"well well-lg\">\r\n        <div *ngFor=\"let data of requestDatas.controls; let i=index\">\r\n          <div [formGroupName]=\"i\">\r\n            <span *ngIf=\"i>0\" style=\"float: right;cursor: pointer;\">\r\n              <img (click)=\"removefile(i)\" class=\"checkicon\" src=\"../../../assets/close.png\">\r\n            </span>\r\n            <div class=\"form-group\">\r\n              <input formControlName=\"fieldName\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{'What piece of info do you need?' | translate}}\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <select formControlName=\"fieldType\" class=\"form-control form-control-sm\">\r\n                <option value=\"\">{{\"Select types of entry\" | translate}}</option>\r\n                <option value=\"inputbox\">{{\"Input box\" | translate}}</option>\r\n                <option value=\"textarea\">{{\"Text area\" | translate}}</option>\r\n                <option value=\"uploadfile\">{{\"Upload file\" | translate}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ms-Grid-row pt-2\">\r\n  <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n    <button  type=\"button\"  (click)=\"requestDataForm.valid && addRequestDatas()\" [disabled]=\"requestDataForm.invalid\" class=\"ms-Button ms-Button--small\">\r\n      <span class=\"ms-Button-label\">{{\"Request another item\" | translate}}</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ms-Grid-row pt-3\">\r\n  <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n    <button  type=\"button\"  (click)=\"requestDataForm.valid && istocc && uploadrequestdata()\" [disabled]=\"requestDataForm.invalid || !istocc\"\r\n      class=\"ms-Button ms-Button--primary\">\r\n      <span class=\"ms-Button-label\">{{\"Insert link\" | translate}}</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ms-Grid-col ms-sm12 ms-md12 pb-4\">\r\n  <div class=\"ms-Grid-row pt-3 pb-2 pl-2\">\r\n    <div *ngIf=\"to.length>0\" class=\"pb-1\" style=\"font-weight: 550;font-size: 16px;\">{{\"To\" | translate}}</div>\r\n    <div class=\"chip\" *ngFor=\"let item of to\">\r\n      {{item}}\r\n    </div>\r\n    <div *ngIf=\"cc.length>0\" class=\"pb-1\" style=\"font-weight: 550;font-size: 16px;\">{{\"Cc\" | translate}}</div>\r\n    <div class=\"chip\" *ngFor=\"let item of cc\">\r\n      {{item}}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/requestdata/requestdata.component.scss":
/***/ (function(module, exports) {

module.exports = ".requestheader {\n  font-weight: 400; }\n\n.requesttitle {\n  font-size: 12px;\n  color: gray; }\n\n.checkicon {\n  height: 11px;\n  width: 11px; }\n"

/***/ }),

/***/ "./src/app/components/requestdata/requestdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestdataComponent = /** @class */ (function () {
    function RequestdataComponent(fb, router, commonService, postdataservice, logger) {
        this.fb = fb;
        this.router = router;
        this.commonService = commonService;
        this.postdataservice = postdataservice;
        this.logger = logger;
        this.otplink = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].ui.base + 'otp';
        this.stopCondition = true;
        this.to = [];
        this.cc = [];
        this.loading = false;
        this.id = '';
        this.istocc = false;
        this.intervalIndex = 1;
        var initrequestDataObject = this.fb.group({
            fieldName: ['', this.commonService.noWhitespaceValidator],
            fieldType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.requestDataForm = this.fb.group({
            requestDataList: this.fb.array([initrequestDataObject])
        });
    }
    RequestdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.requestDatas;
        // this.logger.log("starting toccread interval. requestdatacmpt-line-50");
        this.stopCondition = (Office && Office.context && Office.context.displayLanguage) ? false : true;
        this.subscription = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(2000)
            .takeWhile(function () { return !_this.stopCondition; })
            .subscribe(function (i) {
            // this.logger.log("parsing tcc read interval result. Interval Index: " + self.intervalIndex +" requestdatacmpt-line-55");
            _this.toccRead();
        });
    };
    RequestdataComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Object.defineProperty(RequestdataComponent.prototype, "requestDatas", {
        get: function () {
            return this.requestDataForm.get('requestDataList');
        },
        enumerable: true,
        configurable: true
    });
    ;
    RequestdataComponent.prototype.addRequestDatas = function () {
        var initrequestDataObject = this.fb.group({
            fieldName: ['', this.commonService.noWhitespaceValidator],
            fieldType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.requestDatas.push(initrequestDataObject);
    };
    RequestdataComponent.prototype.addInsertLink = function () {
        var _this = this;
        var message = "The following information is being requested from you. Use the 'Enter data' button below to share this information securely.";
        var self = this;
        var dataname = '';
        this.requestDatas.value.forEach(function (element) {
            dataname = dataname + '<div style="padding-bottom: 5px;font-size:13px;">' + element.fieldName + '</div>';
        });
        this.postdataservice.getPostDataLink(this.id, 0).subscribe(function (x) {
            if (x && x.key) {
                _this.otplink = _this.otplink + '/' + x.key + '/postdata';
                var link_1 = '<div style="padding-top: 10px;padding-bottom: 10px;"><a style="text-decoration: none" href=' + _this.otplink + ' ><span style="background-color: #0078d7;color: white;height: 32px;min-width: 80px;padding: 1px 10px 2px;">&nbsp;Enter data&nbsp;</span></a>' +
                    '<div style="color:#B3B3B3;font-size:10px;text-align: right;padding-right: 5px;">Powered by <b>Connectid&nbsp;&nbsp;</b></div>' +
                    '</div>';
                var item_1 = Office.context.mailbox.item;
                item_1.body.getTypeAsync(function (result) {
                    if (result.status == Office.AsyncResultStatus.Failed) {
                    }
                    else {
                        var htmlcontent = '<div style="background-color: #f4f4f4;">' +
                            '<div style="font-weight: 550;padding-bottom: 10px;">' + message + '</div>'
                            + dataname
                            + link_1
                            + '</div>';
                        if (result.value == Office.MailboxEnums.BodyType.Html) {
                            item_1.body.setSelectedDataAsync(htmlcontent, {
                                coercionType: Office.CoercionType.Html,
                                asyncContext: { var3: 1, var4: 2 }
                            }, function (asyncResult) {
                                if (asyncResult.status ==
                                    Office.AsyncResultStatus.Failed) {
                                }
                                else {
                                    self.id && self.updatereceiver();
                                }
                            });
                        }
                        else {
                            item_1.body.setSelectedDataAsync('Value is not html type.', {
                                coercionType: Office.CoercionType.Text,
                                asyncContext: { var3: 1, var4: 2 }
                            }, function (asyncResult) {
                                if (asyncResult.status ==
                                    Office.AsyncResultStatus.Failed) {
                                }
                                else {
                                }
                            });
                        }
                    }
                });
            }
        });
    };
    RequestdataComponent.prototype.removefile = function (index) {
        this.requestDatas.removeAt(index);
    };
    RequestdataComponent.prototype.uploadrequestdata = function () {
        var _this = this;
        var postdata = this.requestDatas.value;
        if (Office && Office.context && Office.context.mailbox && Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress) {
            if (postdata) {
                this.loading = true;
                var uploaddata = { senderEmail: Office.context.mailbox.userProfile.emailAddress, postDataFields: postdata };
                this.postdataservice.addPostData(uploaddata).subscribe(function (data) {
                    if (data && data.id) {
                        _this.loading = false;
                        _this.id = data.id;
                        _this.addInsertLink();
                    }
                }, function (error) {
                    _this.loading = false;
                });
            }
        }
    };
    RequestdataComponent.prototype.toccRead = function () {
        var _this = this;
        var self = this;
        Office.context.mailbox.item.to.getAsync(function (result) {
            var email = result.value.map(function (x) { return x.emailAddress; });
            _this.to = email;
            _this.istocc = ((_this.to.length > 0) || (_this.cc.length > 0)) ? true : false;
        });
        Office.context.mailbox.item.cc.getAsync(function (result) {
            var email = result.value.map(function (x) { return x.emailAddress; });
            _this.cc = email;
            _this.istocc = ((_this.to.length > 0) || (_this.cc.length > 0)) ? true : false;
        });
    };
    RequestdataComponent.prototype.updatereceiver = function () {
        var _this = this;
        this.loading = true;
        var receiver = [];
        (this.to.length > 0) &&
            (receiver = this.to);
        (this.cc.length > 0) &&
            (receiver = receiver.concat(this.cc));
        var updatedata = { receiverEmails: receiver, postDataId: this.id };
        this.postdataservice.updatereceivers(updatedata).subscribe(function (data) {
            _this.loading = false;
            data && _this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].routes.confirm]);
        }, function (error) {
            _this.loading = false;
        });
    };
    RequestdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requestdata',
            template: __webpack_require__("./src/app/components/requestdata/requestdata.component.html"),
            styles: [__webpack_require__("./src/app/components/requestdata/requestdata.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["i" /* PostdataService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["g" /* LoggerService */]])
    ], RequestdataComponent);
    return RequestdataComponent;
}());



/***/ }),

/***/ "./src/app/components/requestdataconsent/requestdataconsent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <form [formGroup]=\"consentForm\">\r\n        <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n          <app-header></app-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"message\" class=\"ms-Grid-row ms-textAlignCenter pt-4 consent-title\">\r\n          {{message}}\r\n        </div>\r\n\r\n        <div class=\"ms-Grid-row pt-4 pb-2\">\r\n        </div>\r\n        <div class=\"ms-Grid-row border consent-description p-2\">\r\n          <pre  class=\"pretagcss\">{{consentMessage}}</pre>\r\n        </div>\r\n        <div class=\"ms-Grid-row pt-1\">\r\n          <div class=\"ms-CheckBox\">\r\n            <input style=\"margin-top: 10px;\" formControlName=\"consent1\" tabindex=\"-1\" type=\"checkbox\" class=\"ms-CheckBox-input\">\r\n            <label role=\"checkbox\" class=\"ms-CheckBox-field\" tabindex=\"0\" aria-checked=\"false\" name=\"checkboxa\">\r\n              <span class=\"ms-Label\">{{\"I agree to this.\" | translate}}</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <div class=\"ms-Grid-row float-right pt-2 pb-2\">\r\n          <button  type=\"button\" class=\"ms-Button\">\r\n            <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n          </button>\r\n          <button  type=\"button\"  [disabled]=\"consentForm.invalid\" (click)=\"consentForm.valid && confirm()\" class=\"ms-Button ms-Button--primary\">\r\n            <span class=\"ms-Button-label\">{{\"Confirm\" | translate}}</span>\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/requestdataconsent/requestdataconsent.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/requestdataconsent/requestdataconsent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestdataconsentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestdataconsentComponent = /** @class */ (function () {
    function RequestdataconsentComponent(fb, router, storage, commonService, adminService, translate) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.storage = storage;
        this.commonService = commonService;
        this.adminService = adminService;
        this.translate = translate;
        this.consentForm = this.fb.group({
            consent1: [false, this.commonService.truefalseValidator]
        });
        this.translate
            .get("You are about to become a Data Controller. Before you can download this data, you must consent to the terms below")
            .subscribe(function (res) {
            _this.messagesharefiledownload = res;
        });
        this.translate
            .get("You are about to become a Data Owner. Before you can view this data, you must consent to the senders terms.")
            .subscribe(function (res) {
            _this.messagesharefileview = res;
        });
        this.translate
            .get("Please read the details of the consent being requested.")
            .subscribe(function (res) {
            _this.messagerequestdata = res;
        });
    }
    RequestdataconsentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = this.storage.get("status");
        this.companyId =
            this.storage.get("companynameurl") &&
                this.storage.get("companynameurl").id;
        //sharedata1/downloadpermission=download, showpostdata/sharedata0=view,
        if (this.status == "sharedata1" || this.status == "downloadpermission") {
            this.message = this.messagesharefiledownload;
            this.adminService
                .getconsent(this.companyId, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].consentType.values.ShareData)
                .subscribe(function (data) {
                _this.translate.get(data.consentText).subscribe(function (res) {
                    _this.consentMessage = res;
                });
                // this.consentMessage = data.consentText;
            });
        }
        else if (this.status == "sharedata0") {
            this.message = this.messagesharefileview;
            this.adminService
                .getconsent(this.companyId, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].consentType.values.ShareData)
                .subscribe(function (data) {
                _this.translate.get(data.consentText).subscribe(function (res) {
                    _this.consentMessage = res;
                });
                //this.consentMessage = data.consentText;
            });
        }
        else if (this.status == "postdata") {
            this.message = this.messagerequestdata;
            this.adminService
                .getconsent(this.companyId, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].consentType.values.RequestData)
                .subscribe(function (data) {
                _this.translate.get(data.consentText).subscribe(function (res) {
                    _this.consentMessage = res;
                });
                // this.consentMessage = data.consentText;
            });
        }
    };
    RequestdataconsentComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialization();
    };
    RequestdataconsentComponent.prototype.fabricInitialization = function () {
        var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
        for (var i = 0; i < CheckBoxElements.length; i++) {
            new fabric["CheckBox"](CheckBoxElements[i]);
        }
        var ButtonElements = document.querySelectorAll(".ms-Button");
        for (var i = 0; i < ButtonElements.length; i++) {
            new fabric["Button"](ButtonElements[i]);
        }
    };
    RequestdataconsentComponent.prototype.confirm = function () {
        //sharedata1/downloadpermission=download, sharedata0=view,postdata=post,showpostdata=show post data
        if (this.status == "sharedata1" || this.status == "downloadpermission") {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].routes.downloadfile]);
        }
        else if (this.status == "sharedata0") {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].routes.viewfile]);
        }
        else if (this.status == "postdata") {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].routes.requestsubmit]);
        }
    };
    RequestdataconsentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-requestdataconsent",
            template: __webpack_require__("./src/app/components/requestdataconsent/requestdataconsent.component.html"),
            styles: [__webpack_require__("./src/app/components/requestdataconsent/requestdataconsent.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], RequestdataconsentComponent);
    return RequestdataconsentComponent;
}());



/***/ }),

/***/ "./src/app/components/requestdatasubmit/requestdatasubmit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <form [formGroup]=\"requestDataForm\">\r\n        <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n          <app-header></app-header>\r\n        </div>\r\n        <div class=\"ms-Grid-row ms-textAlignCenter\" style=\"height: 20px;\">\r\n          <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n        </div>\r\n        <div class=\"ms-Grid-row ms-textAlignCenter pt-1 pb-2 consent-title\">\r\n          {{\"Please provide the following information.\" | translate}}\r\n        </div>\r\n        <div formArrayName=\"requestDataList\" class=\"well well-lg\">\r\n          <div *ngFor=\"let data of requestDatas.controls; let i=index\">\r\n            <div [formGroupName]=\"i\">\r\n              <div *ngIf=\"data.value.fieldType=='inputbox'\" class=\"ms-TextField\">\r\n                <label class=\"ms-Label\">{{data.value.fieldName }}</label>\r\n                <input formControlName=\"fieldValue\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n              </div>\r\n              <div *ngIf=\"data.value.fieldType=='textarea'\" class=\"ms-TextField ms-TextField--multiline\">\r\n                <label class=\"ms-Label\">{{data.value.fieldName}}</label>\r\n                <textarea formControlName=\"fieldValue\" class=\"ms-TextField-field\"></textarea>\r\n              </div>\r\n              <div *ngIf=\"data.value.fieldType=='uploadfile'\" class=\"ms-Grid-row p2-4 pb-2\">\r\n                <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n                  <div>{{data.value.fieldName}}</div>\r\n                  <div class=\"pt-1 pb-1 pl-4 pr-4 filerow\" *ngFor=\"let file of data.value.fieldValue\">\r\n                    <span *ngIf=\"file.fileName\">{{file.fileName}}</span>\r\n                    <span *ngIf=\"!file.fileName\">{{file.file.name}}</span>\r\n                    <span style=\"float: right;cursor: pointer;\" *ngIf=\"file.uploaded!='uploading'\">\r\n                      <img (click)=\"removefile(file.id,data.value.id)\" class=\"checkicon\"\r\n                        src=\"../../../assets/close.png\">\r\n                    </span>\r\n                    <span class=\"uploadedsign\" *ngIf=\"file.uploaded=='uploaded'\">\r\n                      <img class=\"checkicon\" src=\"../../../assets/icon_check.png\">\r\n                    </span>\r\n                    <span class=\"uploadedsign\" *ngIf=\"file.uploaded=='uploading'\">\r\n                      <img class=\"sharefileloadingimage\" src=\"../../../assets/loading.gif\">\r\n                    </span>\r\n                    <span class=\"failed\" *ngIf=\"file.uploaded!='uploaded' && file.uploaded!='uploading'\"\r\n                      [title]=\"file.uploaded\">failed</span>\r\n                  </div>\r\n                  <div class=\"ms-textAlignCenter pt-2\">\r\n                    <file-drop (onFileDrop)=\"dropped($event,data.value.id)\" multiple=\"true\">\r\n                      <div class=\"ms-Grid-row pt-1\">\r\n                        <div class=\"pt-1\">\r\n                          <img class=\"actionlogo\" src=\"../../../assets/icon_upload_to_cloud.png\">\r\n                        </div>\r\n                        <div class=\"dragstyle pt-1\">{{\"Drag files here\" | translate}}</div>\r\n                        <div class=\"orstyle\">{{\"or\" | translate}}</div>\r\n                      </div>\r\n                      <div class=\"ms-Grid-row pt-1 pb-3\">\r\n                        <label class=\"ms-Button ms-Button--primary\">\r\n                          <input [disabled]=\"loading\" type=\"file\" multiple (change)=\"onFileChange($event,data.value.id)\"\r\n                            value=\"Browse files\" />\r\n                          <span class=\"ms-Button-label\">{{\"Browse files\" | translate}}</span>\r\n                        </label>\r\n                      </div>\r\n                    </file-drop>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-row float-right pt-3 pb-2\">\r\n          <button type=\"button\" [disabled]=\"requestDataForm.invalid || loading\"\r\n            (click)=\"requestDataForm.valid && !loading && senddata()\" class=\"ms-Button ms-Button--primary\">\r\n            <span class=\"ms-Button-label\">{{\"Send data\" | translate}}</span>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/requestdatasubmit/requestdatasubmit.component.scss":
/***/ (function(module, exports) {

module.exports = ".actionlogo {\n  height: 25px;\n  width: 25px; }\n\n.dragstyle {\n  color: gray; }\n\n.orstyle {\n  color: gray;\n  font-size: 12px; }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.uploadedsign {\n  float: right;\n  padding-right: 10px;\n  color: #0078d7; }\n\n.filerow {\n  font-size: 13px; }\n\n.checkicon {\n  height: 11px;\n  width: 11px; }\n\n.sharefileloadingimage {\n  height: 25px;\n  width: 30px; }\n\n.failed {\n  float: right;\n  padding-right: 10px;\n  color: red; }\n"

/***/ }),

/***/ "./src/app/components/requestdatasubmit/requestdatasubmit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestdatasubmitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestdatasubmitComponent = /** @class */ (function () {
    function RequestdatasubmitComponent(fb, router, cd, storage, postdataService, commonService) {
        this.fb = fb;
        this.router = router;
        this.cd = cd;
        this.storage = storage;
        this.postdataService = postdataService;
        this.commonService = commonService;
        this.dataFrom = [];
        this.loading = false;
        this.requestDataForm = this.fb.group({
            requestDataList: this.fb.array([])
        });
    }
    RequestdatasubmitComponent.prototype.ngOnInit = function () {
        var _this = this;
        var component = this;
        this.loading = true;
        var otp = this.storage.get('otp');
        otp &&
            this.postdataService.getfiels(otp).subscribe(function (data) {
                if (data) {
                    _this.loading = false;
                    _this.dataFrom = data.fields;
                    _this.postdataId = data.postdataId;
                    _this.sender = data.sender;
                    _this.receiver = data.receiver;
                    _this.dataFrom.forEach(function (element) {
                        var initrequestDataObject = _this.fb.group({
                            id: element.id,
                            fieldName: element.fieldName,
                            fieldType: element.fieldType,
                            fieldValue: (element.fieldType == 'uploadfile') ? [[]] : ['']
                        });
                        _this.requestDatas.push(initrequestDataObject);
                    });
                    var key = component.storage.get('key');
                    component.postdataService.getshowpostdata(key, data.receiver.id).subscribe(function (sharedData) {
                        sharedData.postDataFields.forEach(function (field) {
                            var selecteddata = _this.requestDatas.controls.find(function (x) { return x.value.id == field.id; });
                            if (field.fieldType === 'uploadfile' && field.fieldValues) {
                                field.fieldValues.forEach(function (fieldValue) {
                                    var uploadFile = { id: fieldValue.fileId, file: { name: fieldValue.name }, uploaded: 'uploaded' };
                                    selecteddata.value.fieldValue.push(uploadFile);
                                });
                            }
                        });
                    }, function (error) {
                        console.log(error);
                    });
                }
            }, function (error) {
                _this.loading = false;
            });
    };
    RequestdatasubmitComponent.prototype.dropped = function (event, id) {
        var _this = this;
        if (event.files.length > 0 && !this.loading) {
            for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
                var droppedFile = _a[_i];
                if (droppedFile.fileEntry.isFile) {
                    var fileEntry = droppedFile.fileEntry;
                    fileEntry.file(function (file) {
                        _this.uploadFile(file, id);
                        _this.cd.detectChanges();
                    });
                }
                else {
                    var fileEntry = droppedFile.fileEntry;
                    console.log(droppedFile.relativePath, fileEntry);
                }
            }
        }
    };
    RequestdatasubmitComponent.prototype.onFileChange = function (event, id) {
        var filecount = event.target.files && event.target.files.length;
        if (filecount > 0 && !this.loading) {
            for (var i = 0; i < filecount; i++) {
                this.uploadFile(event.target.files[i], id);
            }
        }
    };
    Object.defineProperty(RequestdatasubmitComponent.prototype, "requestDatas", {
        get: function () {
            return this.requestDataForm.get('requestDataList');
        },
        enumerable: true,
        configurable: true
    });
    ;
    RequestdatasubmitComponent.prototype.senddata = function () {
        var _this = this;
        this.loading = true;
        var postdatavalue = this.requestDatas.value.filter(function (x) { return x.fieldType !== 'uploadfile'; });
        postdatavalue = this.updateEmptyData(postdatavalue);
        var uploaddata = { id: this.postdataId, senderId: this.sender.id, receiverId: this.receiver.id, postDataFields: postdatavalue };
        this.postdataService.updatepostdatafield(uploaddata).subscribe(function (data) {
            if (data) {
                _this.loading = false;
                _this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].routes.permissiongranted, 'p']);
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    RequestdatasubmitComponent.prototype.uploadFile = function (file, id) {
        var _this = this;
        this.loading = true;
        var selecteddata = this.requestDatas.controls.find(function (x) { return x.value.id == id; });
        var uploadFile = { id: selecteddata.value.fieldValue.length + 1, file: file, uploaded: 'uploading' };
        selecteddata.value.fieldValue.push(uploadFile);
        selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
        var uploaddata = { postDataId: this.postdataId, postDataFieldId: id, senderEmail: this.sender.email, file: file, receiverId: this.receiver.id };
        this.postdataService.uploadfile(uploaddata).subscribe(function (data) {
            if (data) {
                _this.loading = false;
                selecteddata.value.fieldValue.find(function (x) { return x.id === uploadFile.id; }).uploaded = 'uploaded';
                selecteddata.value.fieldValue.find(function (x) { return x.id === uploadFile.id; }).id = data.fileId;
                selecteddata.value.fieldValue.find(function (x) { return x.id === uploadFile.id; }).fileName = data.fileName;
                selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
                _this.cd.detectChanges();
            }
        }, function (error) {
            _this.loading = false;
            selecteddata.value.fieldValue.find(function (x) { return x.id === uploadFile.id; }).uploaded = (error.error && error.error.text) || 'failed';
            selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
            _this.cd.detectChanges();
        });
    };
    RequestdatasubmitComponent.prototype.removefile = function (fileid, fieldid) {
        var _this = this;
        this.loading = true;
        var selecteddata = this.requestDatas.controls.find(function (x) { return x.value.id == fieldid; });
        var index = selecteddata.value.fieldValue.findIndex(function (f) { return f.id === fileid; });
        this.postdataService.deletepostdatafile(fileid).subscribe(function (data) {
            if (data) {
                selecteddata.value.fieldValue.splice(index, 1);
                _this.loading = false;
                _this.cd.detectChanges();
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    RequestdatasubmitComponent.prototype.updateEmptyData = function (data) {
        data.forEach(function (element) {
            (element.fieldValue == '') &&
                (element.fieldValue = 'No data provided');
        });
        return data;
    };
    RequestdatasubmitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requestdatasubmit',
            template: __webpack_require__("./src/app/components/requestdatasubmit/requestdatasubmit.component.html"),
            styles: [__webpack_require__("./src/app/components/requestdatasubmit/requestdatasubmit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__services__["i" /* PostdataService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */]])
    ], RequestdatasubmitComponent);
    return RequestdatasubmitComponent;
}());



/***/ }),

/***/ "./src/app/components/rootfolder/rootfolder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row no-gutters pt-4\">\r\n    <div class=\"col-md-10 routeheader\">\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">{{\"Folders\" | translate}}</li>\r\n        </ol>\r\n      </nav>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n    </div>\r\n\r\n    <div class=\"col-md-9\" style=\"height: 20px;\">\r\n      <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-6\">\r\n        {{\"Name\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{\"Modified date\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{\"Number of files\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"rootfolders\">\r\n    <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <span class=\"namelink\" style=\"cursor: pointer;\" routerLink=\"/admin/{{companyId}}/sharedfolder\">\r\n              <img class=\"folder\" src=\"../../../assets/icon_shared_folder.png\"> {{\"Shared Folders\" | translate}}\r\n            </span>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            {{rootfolders.sharedFolders.modifiedDate | date}}\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            {{rootfolders.sharedFolders.noOfFiles}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <span class=\"namelink\" style=\"cursor: pointer;\" routerLink=\"/admin/{{companyId}}/folders\">\r\n              <img class=\"folder\" src=\"../../../assets/icon_user_folder.png\"> {{\"User Folders\" | translate}}\r\n            </span>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            {{rootfolders.userfolders.modifiedDate | date}}\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            {{rootfolders.userfolders.noOfFiles}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"(loggedInCompany && loggedInCompany.enabledTrustedLink) || (loggedInUser && loggedInUser.type===true)\"\r\n      class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <span class=\"namelink\" style=\"cursor: pointer;\" routerLink=\"/admin/{{companyId}}/sharedfolder/tl\">\r\n              <img class=\"folder\" src=\"../../../assets/icon_trusted_link_folder.png\"> {{\"Trusted Links\" | translate}}\r\n            </span>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            {{rootfolders.trustedLinks.modifiedDate | date}}\r\n          </div>\r\n          <div *ngIf=\"loggedInCompany && loggedInCompany.enabledTrustedLink\" class=\"col-sm-3\">\r\n            {{rootfolders.trustedLinks.noOfFiles}}\r\n          </div>\r\n          <div *ngIf=\"loggedInCompany && !loggedInCompany.enabledTrustedLink\" class=\"col-sm-3\" style=\"color: brown;\">\r\n            {{\"Not Activated\" | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/rootfolder/rootfolder.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rootfolder/rootfolder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootfolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RootfolderComponent = /** @class */ (function () {
    function RootfolderComponent(adminUserService, commonService, router, route, storage, companyService) {
        this.adminUserService = adminUserService;
        this.commonService = commonService;
        this.router = router;
        this.storage = storage;
        this.companyService = companyService;
        this.loading = false;
        this.companyId = '';
        this.status = '';
        this.status = route.snapshot.params['id'];
        this.storage.remove('userstatus');
        this.storage.set('userstatus', this.status);
        this.companyId = this.storage.get('companyId');
        this.loading = true;
        this.loggedInUser = this.storage.get('user');
        this.loadCompanyInfo(this.companyId);
        this.loadFolders(this.companyId);
    }
    RootfolderComponent.prototype.ngOnInit = function () {
    };
    RootfolderComponent.prototype.loadFolders = function (companyId) {
        var _this = this;
        this.adminUserService.getsharedfolderroot(companyId, this.status).subscribe(function (data) {
            _this.loading = false;
            _this.rootfolders = data;
        }, function (error) {
            _this.loading = false;
        });
    };
    RootfolderComponent.prototype.loadCompanyInfo = function (companyId) {
        var _this = this;
        this.companyService.getCompany(companyId).subscribe(function (data) {
            _this.loggedInCompany = data;
        }, function (error) {
        });
    };
    RootfolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-rootfolder',
            template: __webpack_require__("./src/app/components/rootfolder/rootfolder.component.html"),
            styles: [__webpack_require__("./src/app/components/rootfolder/rootfolder.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__services_company_service__["a" /* CompanyService */]])
    ], RootfolderComponent);
    return RootfolderComponent;
}());



/***/ }),

/***/ "./src/app/components/safety-signature/safety-signature.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"safety-signature\">\r\n  <div class=\"powered-by\">\r\n    <img src=\"../../../assets/Powered-by-logo.png\">\r\n    <!-- <p>powered By<br>\r\n    <span class=\"company\">ShareSimple</span>\r\n    </p> -->\r\n  </div>\r\n  <p\r\n    [innerHTML]=\"'We create trust between companies and individuals through solutions that provide an overview and secure the sharing of personal data.' | translate\">\r\n  </p>\r\n  <a href=\"{{linkConfig.overView}}\" target=\"_blank\">{{\"Learn more\" | translate}} <span\r\n      class=\"ms-Icon ms-Icon--ChromeBackMirrored\"></span></a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/safety-signature/safety-signature.component.scss":
/***/ (function(module, exports) {

module.exports = ".safety-signature {\n  margin-top: 50px;\n  text-align: center; }\n  .safety-signature p {\n    color: #d5d5d5;\n    font-size: 12px;\n    margin-bottom: 0; }\n  .safety-signature a {\n    color: #0080ff;\n    cursor: pointer;\n    text-decoration: none;\n    font-size: 14px; }\n  .safety-signature a .ms-Icon {\n      top: 4px;\n      position: relative; }\n  .safety-signature a:hover {\n      opacity: 0.7; }\n  .safety-signature .powered-by {\n    margin: 15px auto; }\n  .safety-signature .powered-by img {\n      width: 150px; }\n  .safety-signature .powered-by p {\n      text-align: left; }\n  .safety-signature .powered-by .company {\n      font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/components/safety-signature/safety-signature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetySignatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_common_service__ = __webpack_require__("./src/app/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafetySignatureComponent = /** @class */ (function () {
    function SafetySignatureComponent(commonService) {
        this.commonService = commonService;
        this.linkConfig = [];
    }
    SafetySignatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getAppLinkConfig().subscribe(function (data) {
            _this.linkConfig = data;
        }, function (error) {
            console.log(error);
        });
    };
    SafetySignatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-safety-signature',
            template: __webpack_require__("./src/app/components/safety-signature/safety-signature.component.html"),
            styles: [__webpack_require__("./src/app/components/safety-signature/safety-signature.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_common_service__["a" /* CommonService */]])
    ], SafetySignatureComponent);
    return SafetySignatureComponent;
}());



/***/ }),

/***/ "./src/app/components/sharedfolder/sharedfolder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row no-gutters pt-4 pb-3\">\r\n    <div class=\"col-md-10 routeheader\">\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin/{{companyId}}/root/{{status}}\">{{\"Folders\" | translate}}</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">\r\n            {{ isTrustedLink==true? (\"Trusted Links\" | translate) : (\"Shared Folders\" | translate)}}</li>\r\n        </ol>\r\n      </nav>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n    </div>\r\n  </div>\r\n\r\n  <div [formGroup]=\"filterForm\" class=\"row pt-2 pb-4\">\r\n    <div class=\"col-md-3\">\r\n      <input *ngIf=\"sharedfolderSource.length > 0\" formControlName=\"searchText\" type=\"text\"\r\n        class=\"form-control form-control-sm\" placeholder=\"{{'Search' | translate}}...\">\r\n    </div>\r\n    <div class=\"col-md-7\" style=\"height: 20px;\">\r\n      <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <button type=\"button\" *ngIf=\"user && user.type\" (click)=\"createFolder()\"\r\n        class=\"ms-Button ms-Button--primary float-right\">\r\n        <span class=\"ms-Button-label\">+\r\n          {{isTrustedLink === true? (\"New Trusted Link\" | translate) :(\"New folder\" | translate) }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"isTrustedLink && company && !company.enabledTrustedLink\" class=\"row pt-2\">\r\n    <div class=\"col-md-2\">&nbsp;</div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <img src=\"../../../assets/icon_trusted_link_overlay.png\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <h3>{{\"Activate Tusted Link\" | translate}}</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"row pt-2\">\r\n        <div class=\"col-md-12 text-center\">\r\n          {{\"Create a New Trusted Link to activate the feature. Trusted link lets you create a public link for getting documents from\r\n        anyone with the link and share the uploaded content with selected Connectid Mail users.\" | translate}}\r\n        </div>\r\n      </div>\r\n      <div class=\"row pt-3\">\r\n        <div class=\"col-md-12 text-center\">\r\n          {{\"Activating this feature might trigger an extra cost. For more information, please click here:\" | translate}}\r\n          <a href=\"{{linkConfig.overView}}\">{{linkConfig.overView}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"(isTrustedLink && company && company.enabledTrustedLink) || !isTrustedLink\">\r\n    <!--data list-->\r\n    <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-sm-5\">\r\n          {{\"Name\" | translate}}\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          {{\"Modified date\" | translate}}\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          {{\"Shared with\" | translate}}\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          {{\"Number of files\" | translate}}\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"sharedfolders\">\r\n      <div *ngFor=\"let rowdata of sharedfolders | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n        <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-5\">\r\n                <span class=\"namelink\" style=\"cursor: pointer;\"\r\n                  routerLink=\"/admin/{{companyId}}/sharedfolderfile/{{rowdata.adminFolder.id}}\">\r\n                  <img class=\"folder\" src=\"../../../assets/icon_folder.png\"> {{rowdata.adminFolder.folderName}}\r\n                </span>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                {{rowdata.adminFolder.updateDate | date}}\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                {{rowdata.sharedWith}}\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                {{rowdata.noOfFiles}}\r\n              </div>\r\n              <div class=\"col-sm-1\">\r\n                <div *ngIf=\"user && user.type\" ngbDropdown placement=\"bottom-right\" class=\"d-inline-block\">\r\n                  <div id=\"dropdownBasic1\" style=\"cursor: pointer;\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                    <button type=\"button\" routerLink=\"/admin/{{companyId}}/sharedfolderfile/{{rowdata.adminFolder.id}}\"\r\n                      class=\"dropdown-item\">{{\"Sharing\" | translate}}</button>\r\n                    <button type=\"button\" (click)=\"createFolder(rowdata.adminFolder)\"\r\n                      class=\"dropdown-item\">{{\"Rename\" | translate}}</button>\r\n                    <button type=\"button\" (click)=\"deleteFolder(rowdata.adminFolder)\"\r\n                      class=\"dropdown-item\">{{\"Delete\" | translate}}</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 text-center\">{{\"No Data Found\" | translate}}</div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <p class=\"second-element\" *ngIf=\"entityCount>0\">{{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}}\r\n            {{entityend}} {{\"of\" | translate}} {{entityCount}}\r\n            {{\"entries\" | translate}}</p>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <pagination-controls style=\"float:right;\" previousLabel=\"{{'Previous' | translate}}\"\r\n            nextLabel=\"{{'Next' | translate}}\" (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"folderDialog\">\r\n  <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n    <div class=\"ms-Dialog-title\">{{message}}</div>\r\n    <form [formGroup]=\"folderForm\">\r\n      <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n        <div class=\"ms-TextField\">\r\n          <label\r\n            class=\"ms-Label is-required\">{{ isTrustedLink === true? (\"Trusted Link Name\" | translate): (\"Folder name\" | translate)}}</label>\r\n          <input formControlName=\"folderName\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n        </div>\r\n        <div *ngIf=\"isTrustedLink && folderForm.value.id === '00000000-0000-0000-0000-000000000000'\"\r\n          class=\"ms-TextField-description\">\r\n          <p>{{\"Activating this feature might trigger an extra cost.\"}}</p>\r\n          <p>{{\"For more information, please click here:\" | translate}}\r\n            <a href=\"{{linkConfig.overView}}\">{{linkConfig.overView}}</a>\r\n          </p>\r\n          <p>{{\"Press Accept to enable this feature\" | translate}}</p>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"ms-Dialog-actions\">\r\n      <button type=\"button\" [disabled]=\"folderForm.invalid\" (click)=\"folderForm.valid && addfolderdata()\"\r\n        class=\"ms-Button ms-Button--primary\">\r\n        <span *ngIf=\"folderForm.value.id === '00000000-0000-0000-0000-000000000000'\"\r\n          class=\"ms-Button-label\">{{ isTrustedLink === true? (\"Accept and Create\" | translate):(\"Create\" | translate)}}</span>\r\n        <span *ngIf=\"folderForm.value.id !== '00000000-0000-0000-0000-000000000000'\"\r\n          class=\"ms-Button-label\">{{ \"Save\" | translate}}</span>\r\n      </button>\r\n      <button type=\"button\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n        <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"deletefolder\">\r\n  <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n    <div class=\"ms-Dialog-title\">{{\"Confirm\" | translate}}</div>\r\n    <div class=\"ms-Dialog-content pb-4\">\r\n      <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n        {{\"Do you wanna delete this folder?\" | translate}}\r\n      </div>\r\n      <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n        <span *ngIf=\"deletemessage && !deletemessage.isSuccess\" class=\"ms-message\">{{deletemessage.messgae}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ms-Dialog-actions\">\r\n      <button type=\"button\" [disabled]=\"loading\" (click)=\"!loading && removefolder()\"\r\n        class=\"ms-Button ms-Button--primary\">\r\n        <span class=\"ms-Button-label\">{{\"OK\" | translate}}</span>\r\n      </button>\r\n      <button type=\"button\" (click)=\"deletedialogComponent.close()\" class=\"ms-Button\">\r\n        <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sharedfolder/sharedfolder.component.scss":
/***/ (function(module, exports) {

module.exports = ".ms-message {\n  padding-left: 15px;\n  font-size: 12px;\n  color: red; }\n"

/***/ }),

/***/ "./src/app/components/sharedfolder/sharedfolder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedfolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SharedfolderComponent = /** @class */ (function () {
    function SharedfolderComponent(adminUserService, commonService, companyService, location, router, route, fb, storage, translate) {
        var _this = this;
        this.adminUserService = adminUserService;
        this.commonService = commonService;
        this.companyService = companyService;
        this.location = location;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.translate = translate;
        this.companyId = '';
        this.sharedfolders = [];
        this.sharedfolderSource = [];
        this.loading = false;
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.companyId = this.storage.get('companyId');
        this.user = this.storage.get('user');
        this.status = (this.user && this.user.type === true) ? 'a' : this.storage.get('userstatus');
        this.folderForm = this.fb.group({
            id: [''],
            folderName: ['', this.commonService.noWhitespaceValidator],
            companyId: [this.companyId]
        });
        this.filterForm = this.fb.group({
            searchText: ''
        });
        this.loading = true;
        this.linkConfig = {};
        this.loadSharedfolders(this.companyId, this.status);
        this.isTrustedLink = route.snapshot.url.findIndex(function (x) { return x.path === 'tl'; }) > -1 ? true : false;
        if (this.isTrustedLink) {
            this.companyService.getCompany(this.companyId).subscribe(function (data) {
                if (data) {
                    _this.company = data;
                }
            }, function (error) {
                console.log(error);
            });
            this.commonService.getAppLinkConfig().subscribe(function (data) {
                _this.linkConfig = data;
            }, function (error) {
                console.log(error);
            });
        }
    }
    SharedfolderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.sharedfolders = (filterkey == "") ? _this.sharedfolderSource :
                _this.sharedfolderSource.filter(function (x) {
                    return x.adminFolder.folderName.toString().toUpperCase().includes(filterkey) ||
                        x.noOfFiles.toString().toUpperCase().includes(filterkey) ||
                        x.sharedWith.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    SharedfolderComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    SharedfolderComponent.prototype.loadSharedfolders = function (id, status) {
        var _this = this;
        this.adminUserService.getSharedFolder(id, status).subscribe(function (data) {
            _this.loading = false;
            if (data) {
                if (_this.isTrustedLink) {
                    _this.sharedfolders = data.filter(function (x) { return x.adminFolder.isTrustedLink === true; });
                }
                else {
                    _this.sharedfolders = data.filter(function (x) { return (x.adminFolder.isTrustedLink === false || x.adminFolder.isTrustedLink === null); });
                }
                _this.sharedfolderSource = _this.sharedfolders;
                _this.viewcounts();
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    SharedfolderComponent.prototype.viewcounts = function () {
        this.entityCount = this.sharedfolders.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    SharedfolderComponent.prototype.createFolder = function (data) {
        var _this = this;
        this.fabricInitialize();
        if (data != undefined) {
            if (this.isTrustedLink) {
                this.translate
                    .get("Edit Trusted Link")
                    .subscribe(function (res) {
                    _this.message = res;
                });
            }
            else {
                this.translate
                    .get("Edit Folder")
                    .subscribe(function (res) {
                    _this.message = res;
                });
            }
            this.folderForm.controls['id'].setValue(data.id);
            this.folderForm.controls['folderName'].setValue(data.folderName);
        }
        else {
            if (this.isTrustedLink) {
                this.translate
                    .get("Add Trusted Link")
                    .subscribe(function (res) {
                    _this.message = res;
                });
            }
            else {
                this.translate
                    .get("Add Folder")
                    .subscribe(function (res) {
                    _this.message = res;
                });
            }
            this.folderForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
            this.folderForm.controls['folderName'].setValue('');
        }
        this.dialogComponent.open();
    };
    SharedfolderComponent.prototype.addfolderdata = function () {
        var _this = this;
        this.loading = true;
        var data = this.folderForm.value;
        if (data.id && data.id != '00000000-0000-0000-0000-000000000000') {
            this.adminUserService.updatefolder(data.id, data).subscribe(function (data) {
                _this.dialogComponent.close();
                _this.loadSharedfolders(_this.companyId, _this.status);
            });
        }
        else if (data.id == '00000000-0000-0000-0000-000000000000') {
            data.isTrustedLink = true;
            this.adminUserService.addnewfolder(data).subscribe(function (data) {
                _this.dialogComponent.close();
                _this.loadSharedfolders(_this.companyId, _this.status);
            });
        }
    };
    SharedfolderComponent.prototype.fabricInitialize = function () {
        var dialogTemplate = document.querySelector(".folderDialog");
        var dialog = dialogTemplate.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
        var removeDialog = document.querySelector(".deletefolder");
        var remove = removeDialog.querySelector(".ms-Dialog");
        this.deletedialogComponent = new fabric['Dialog'](remove);
    };
    SharedfolderComponent.prototype.removefolder = function () {
        var _this = this;
        var test = this.deletedRow;
        this.adminUserService.deleteSharedFolder(this.deletedRow.id).subscribe(function (data) {
            if (data.isSuccess) {
                _this.deletedialogComponent.close();
                _this.loadSharedfolders(_this.companyId, _this.status);
            }
            else {
                _this.deletemessage = data;
            }
        });
    };
    SharedfolderComponent.prototype.deleteFolder = function (data) {
        this.deletemessage = null;
        this.deletedRow = data;
        this.fabricInitialize();
        this.deletedialogComponent.open();
    };
    SharedfolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-sharedfolder',
            template: __webpack_require__("./src/app/components/sharedfolder/sharedfolder.component.html"),
            styles: [__webpack_require__("./src/app/components/sharedfolder/sharedfolder.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__services_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services__["k" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], SharedfolderComponent);
    return SharedfolderComponent;
}());



/***/ }),

/***/ "./src/app/components/sharedfolderfile/sharedfolderfile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n    <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-10 routeheader\">\r\n        <nav aria-label=\"breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a\r\n                routerLink=\"/admin/{{companyId}}/root/{{status}}\">{{\"Folders\" | translate}}</a></li>\r\n            <li *ngIf=\"sharedfolder.isTrustedLink\" class=\"breadcrumb-item\"><a\r\n                routerLink=\"/admin/{{companyId}}/sharedfolder/tl\">{{ \"Trusted Links\" | translate }}</a>\r\n            </li>\r\n            <li *ngIf=\"!sharedfolder.isTrustedLink\" class=\"breadcrumb-item\"><a\r\n                routerLink=\"/admin/{{companyId}}/sharedfolder\">{{\"Shared Folders\" | translate }}</a>\r\n            </li>\r\n            <li *ngIf=\"sharedfolder\" class=\"breadcrumb-item active\" aria-current=\"page\">{{sharedfolder.folderName}}</li>\r\n          </ol>\r\n        </nav>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row pt-2 pb-4\">\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\"\r\n          placeholder=\"{{'Search' | translate}}...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-3\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <span *ngIf=\"sharedUser && user && user.type\"\r\n          class=\"float-right share-people\">{{\"This folder is shared with\" | translate}}\r\n          {{sharedUser.length}}\r\n          {{\"people\" | translate}}</span>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <button type=\"button\" *ngIf=\"user && user.type\" (click)=\"managesharing()\"\r\n          style=\"text-overflow: ellipsis;overflow: hidden;\" title=\"{{'Manage Sharing' | translate}}\"\r\n          class=\"btn btn-outline-primary btn-sm btn-block\">\r\n          <img class=\"folder\" src=\"../../../assets/ss_icon_share.png\">\r\n          <span>{{\"Manage Sharing\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Trusted Link -->\r\n  <div *ngIf=\"sharedfolder.isTrustedLink\" class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm10\">\r\n      <label class=\"ms-Label\">{{'Trusted Link' | translate}}</label>\r\n      <input class=\"ms-TextField-field\" disabled type=\"text\" value=\"{{sharedfolder.trustedLink}}\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm2\">\r\n      <button type=\"button\" (click)=\"copyLink()\" title=\"{{'Copy Link' | translate}}\"\r\n        class=\"btn btn-outline-primary btn-sm btn-block btn-copy\">\r\n        <img class=\"folder\" src=\"../../../assets/icon_copy.png\">\r\n        <span>{{'Copy Link' | translate}}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-4\">\r\n        {{\"User folder\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Modified date\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Files available\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Size\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"sharedfolderfiles\">\r\n    <div\r\n      *ngFor=\"let rowdata of sharedfolderfiles | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <span>\r\n                <img class=\"folder\" src=\"../../../assets/{{rowdata.type}}\"> {{rowdata.name}}\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span *ngIf=\"rowdata.expDate<6 && rowdata.expDate>=0\" style=\"color:#ed1c24;\">{{rowdata.expDate}}\r\n                {{\"days\" | translate}}</span>\r\n              <span *ngIf=\"rowdata.expDate<11 && rowdata.expDate>5\" style=\"color:#f7931e;\">{{rowdata.expDate}}\r\n                {{\"days\" | translate}}</span>\r\n              <span *ngIf=\"rowdata.expDate>10\" style=\"color:#39b54a;\">{{rowdata.expDate}} {{\"days\" | translate}}</span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              {{(rowdata.size/1000000) | number : '1.2-4'}} MB\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span>\r\n                <a target=\"_blank\" [href]=\"rowdata.downloadUrl\" title=\"\"> <img class=\"folder\"\r\n                    src=\"../../../assets/icon_download.png\"></a>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-12 text-center\">\r\n          {{(user && user.type) ? \"Contents of this folder are not visible\" : \"No Data Found\" | translate}}\r\n        </div> -->\r\n        <div *ngIf=\"user && user.type\" class=\"col-12 text-center\">\r\n          {{\"Contents of this folder are not visible\" | translate}}\r\n        </div>\r\n        <div *ngIf=\"!(user && user.type)\" class=\"col-12 text-center\">\r\n          {{\"No Data Found\" | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">{{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}}\r\n          {{entityend}} {{\"of\" | translate}} {{entityCount}}\r\n          {{\"entries\" | translate}}</p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\" previousLabel=\"{{'Previous' | translate}}\"\r\n          nextLabel=\"{{'Next' | translate}}\" (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"userdialog\">\r\n  <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n    <div class=\"float-right\">\r\n      <i (click)=\"closed()\" class=\"ms-Icon ms-Icon--Cancel\"></i>\r\n    </div>\r\n    <div class=\"ms-Dialog-title\">\r\n      <span>\r\n        <img class=\"folder\" src=\"../../../assets/icon_shared_folder.png\"> {{\"Documents\" | translate}}\r\n      </span>\r\n    </div>\r\n    <div class=\"ms-Dialog-content\">\r\n      <div class=\"ms-Grid-row pb-2\">\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n          {{\"This folder is being shared with\" | translate}}:\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"sharedUser\">\r\n        <div *ngFor=\"let rowuser of sharedUser\" class=\"ms-Grid-row pt-2 pb-1 border border-left-0 border-right-0\">\r\n          <div class=\"ms-Grid-col ms-md8\">\r\n            <div class=\"ms-Grid-row\">\r\n              <div class=\"ms-Grid-col ms-md12\">\r\n                {{rowuser.name}}\r\n              </div>\r\n            </div>\r\n            <div class=\"ms-Grid-row second-element\">\r\n              <div class=\"ms-Grid-col ms-md12\">\r\n                {{rowuser.email}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ms-Grid-col ms-md4 pt-1\">\r\n            <button type=\"button\" (click)=\"removeuser(rowuser.id)\" type=\"button\"\r\n              class=\"btn btn-outline-primary btn-sm btn-block\">\r\n              {{\"Remove\" | translate}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"ms-Dialog-actions float-left\">\r\n      <button type=\"button\" (click)=\"adduser()\" class=\"ms-Button ms-Button--primary\">\r\n        <span class=\"ms-Button-label\">+ {{\"Add User\" | translate}}</span>\r\n      </button>\r\n      <span *ngIf=\"!isCollapsed && dropdownList.length==0\" class=\"ms-message\">{{\"No user found\" | translate}}</span>\r\n    </div>\r\n    <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n      <div class=\"ms-Grid-row\">\r\n        <div *ngIf=\"dropdownList.length>0\" class=\"ms-Grid-col ms-sm12 ms-md12 pt-4\">\r\n          <ng-multiselect-dropdown placeholder=\"{{'select user' | translate}}\" [data]=\"dropdownList\"\r\n            [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\">\r\n          </ng-multiselect-dropdown>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-3 pb-2\">\r\n          <button type=\"button\" [disabled]=\"selectedItems.length==0\" (click)=\"(selectedItems.length>0) && saveuser()\"\r\n            class=\"ms-Button ms-Button--primary float-right\">\r\n            <span class=\"ms-Button-label\">{{\"Save\" | translate}}</span>\r\n          </button>\r\n          <button type=\"button\" (click)=\"cancel()\" class=\"ms-Button float-right\">\r\n            <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sharedfolderfile/sharedfolderfile.component.scss":
/***/ (function(module, exports) {

module.exports = ".ms-message {\n  padding-left: 15px;\n  font-size: 12px;\n  color: red; }\n\n.btn-copy {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-top: 26px; }\n"

/***/ }),

/***/ "./src/app/components/sharedfolderfile/sharedfolderfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedfolderfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SharedfolderfileComponent = /** @class */ (function () {
    function SharedfolderfileComponent(adminUserService, commonService, router, location, route, fb, storage, translate) {
        var _this = this;
        this.adminUserService = adminUserService;
        this.commonService = commonService;
        this.router = router;
        this.location = location;
        this.fb = fb;
        this.storage = storage;
        this.translate = translate;
        this.folderId = '';
        this.companyId = '';
        this.sharedfolderfiles = [];
        this.sharedfolderfilesSource = [];
        this.users = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.sharedUser = [];
        this.loading = false;
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.isCollapsed = true;
        this.folderId = route.snapshot.params['folderid'];
        this.companyId = this.storage.get('companyId');
        this.status = this.storage.get('userstatus');
        this.user = this.storage.get('user');
        this.sharedfolder = {};
        this.filterForm = this.fb.group({
            searchText: ''
        });
        this.loading = true;
        if (this.folderId) {
            this.loaduser(this.folderId);
            this._renderdata(this.folderId);
        }
        this.dropdownSettings = {
            singleSelection: false,
            idField: "id",
            textField: "name",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 3,
            allowSearchFilter: true,
            searchPlaceholderText: "Search"
        };
        this.translate
            .get("Search")
            .subscribe(function (res) {
            _this.dropdownSettings.searchPlaceholderText = res;
        });
    }
    SharedfolderfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.sharedfolderfiles = (filterkey == "") ? _this.sharedfolderfilesSource :
                _this.sharedfolderfilesSource.filter(function (x) {
                    return x.name.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    SharedfolderfileComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    SharedfolderfileComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    SharedfolderfileComponent.prototype.loaduser = function (id) {
        var _this = this;
        if (this.user) {
            this.adminUserService.getSharedFolderFile(id, this.user.id).subscribe(function (data) {
                _this.loading = false;
                _this.sharedfolderfiles = data;
                _this.sharedfolderfiles.forEach(function (element) {
                    element.expDate = _this.commonService.dateDiff(element.expDate) && _this.commonService.dateDiff(element.expDate);
                    element.downloadUrl = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].api.base + '/api/file/downloadblob' + '/' + element.fileId;
                    element.type = _this.commonService.getFileTypeIcon(element.name);
                });
                _this.sharedfolderfilesSource = _this.sharedfolderfiles;
                _this.viewcounts();
            }, function (error) {
                _this.loading = false;
            });
        }
        else {
            this.loading = false;
        }
    };
    SharedfolderfileComponent.prototype._renderdata = function (id) {
        var _this = this;
        this.adminUserService.getSharedUsers(id).subscribe(function (data) {
            if (data && data.folder) {
                _this.sharedUser = data.users;
                _this.sharedfolder = data.folder;
                if (_this.sharedfolder.isTrustedLink) {
                    _this.sharedfolder.trustedLink = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].ui.base + '/#/trustedlink/' + btoa(data.folder.id);
                }
            }
            else {
                _this.router.navigate([
                    __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].routes.admin + "/" + _this.companyId + "/root/" + _this.user.id
                ]);
            }
        }, function (error) {
        });
    };
    SharedfolderfileComponent.prototype.viewcounts = function () {
        this.entityCount = this.sharedfolderfiles.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    SharedfolderfileComponent.prototype.copyLink = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.sharedfolder.trustedLink;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    SharedfolderfileComponent.prototype.fabricInitialize = function () {
        var userDialog = document.querySelector(".userdialog");
        var dialog = userDialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
    };
    SharedfolderfileComponent.prototype.managesharing = function () {
        this.fabricInitialize();
        this.dialogComponent.open();
    };
    SharedfolderfileComponent.prototype.removeuser = function (id) {
        var _this = this;
        var entity = { userId: id, folderId: this.folderId };
        this.adminUserService.removeshareduser(entity).subscribe(function (data) {
            if (data) {
                _this._renderdata(_this.folderId);
                _this.isCollapsed = true;
            }
        }, function (error) {
        });
    };
    SharedfolderfileComponent.prototype.adduser = function () {
        var _this = this;
        var companyid = this.storage.get('companyId');
        this.isCollapsed &&
            this.adminUserService.getactiveusersbycompany(companyid).subscribe(function (data) {
                if (data) {
                    _this.isCollapsed = !_this.isCollapsed;
                    _this.dropdownList = [];
                    _this.selectedItems = [];
                    data.forEach(function (element) {
                        _this.user.id != element.id && _this.filteruser(element.id) &&
                            _this.dropdownList.push({
                                id: element.id,
                                name: element.name
                            });
                    });
                }
            }, function (error) {
            });
    };
    SharedfolderfileComponent.prototype.filteruser = function (id) {
        var index = this.sharedUser.findIndex(function (x) { return x.id == id; });
        return (index == -1) ? true : false;
    };
    SharedfolderfileComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    SharedfolderfileComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    SharedfolderfileComponent.prototype.closed = function () {
        this.dialogComponent.close();
        this.isCollapsed = true;
    };
    SharedfolderfileComponent.prototype.saveuser = function () {
        var _this = this;
        var entity = { userIds: this.selectedItems, folderId: this.folderId };
        this.adminUserService.addusertosharedfolder(entity).subscribe(function (data) {
            if (data) {
                _this._renderdata(_this.folderId);
                _this.isCollapsed = true;
            }
        }, function (error) {
        });
    };
    SharedfolderfileComponent.prototype.cancel = function () {
        this.selectedItems = [];
        this.isCollapsed = true;
    };
    SharedfolderfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sharedfolderfile',
            template: __webpack_require__("./src/app/components/sharedfolderfile/sharedfolderfile.component.html"),
            styles: [__webpack_require__("./src/app/components/sharedfolderfile/sharedfolderfile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], SharedfolderfileComponent);
    return SharedfolderfileComponent;
}());



/***/ }),

/***/ "./src/app/components/sharefiles/sharefiles.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"sharefileForm\">\r\n  <div *ngIf=\"files.length>0\" class=\"ms-Grid-row pt-2\">\r\n    <div class=\"ms-Grid-col ms-sm1 ms-md3\"></div>\r\n    <div class=\"ms-Grid-col ms-sm10 ms-md6\">\r\n\r\n      <div class=\"ms-textAlignCenter pb-1\">{{\"Upload files and add the link\" | translate}}</div>\r\n\r\n      <div class=\"ms-Grid-row pt-4 filerow\" *ngFor=\"let file of files\">\r\n        <span>{{file.file.name}}</span>\r\n        <span style=\"float: right;cursor: pointer;\" *ngIf=\"file.uploaded!='uploading'\">\r\n          <img (click)=\"removefile(file.id)\" class=\"checkicon\" src=\"../../../assets/close.png\">\r\n        </span>\r\n        <span class=\"uploadedsign\" *ngIf=\"file.uploaded=='uploaded'\">\r\n          <img class=\"checkicon\" src=\"../../../assets/icon_check.png\">\r\n        </span>\r\n        <span class=\"uploadedsign\" *ngIf=\"file.uploaded=='uploading'\">\r\n          <img class=\"sharefileloadingimage\" src=\"../../../assets/loading.gif\">\r\n        </span>\r\n        <span class=\"failed\" *ngIf=\"file.uploaded!='uploaded' && file.uploaded!='uploading'\"\r\n          [title]=\"file.uploaded\">failed</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ms-Grid-row pt-4\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n      <file-drop (onFileDrop)=\"dropped($event)\">\r\n        <div class=\"ms-Grid-row pt-1\">\r\n          <div class=\"pt-1\">\r\n            <img class=\"actionlogo\" src=\"../../../assets/icon_upload_to_cloud.png\">\r\n          </div>\r\n          <div class=\"dragstyle pt-1\">{{\"Drag files here\" | translate}}</div>\r\n          <div class=\"orstyle\">{{\"or\" | translate}}</div>\r\n        </div>\r\n        <div class=\"ms-Grid-row pt-1 pb-3\">\r\n          <label class=\"ms-Button ms-Button--primary\">\r\n            <input [disabled]=\"loading\" type=\"file\" (change)=\"onFileChange($event)\" value=\"Browse files\" />\r\n            <span class=\"ms-Button-label\">{{\"Browse files\" | translate}}</span>\r\n          </label>\r\n        </div>\r\n\r\n      </file-drop>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"files.length>0\" class=\"ms-Grid-row pt-3 pb-3\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n      <div> {{\"Would you like to allow the receiver to download the files or view only\" | translate}}</div>\r\n\r\n      <div class=\"form-check pt-2\">\r\n        <input formControlName=\"downloadview\" class=\"form-check-input\" (change)=\"checkchange()\" type=\"radio\"\r\n          value=\"download\">\r\n        <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n          {{\"Download\" | translate}}\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check pt-2\">\r\n        <input formControlName=\"downloadview\" class=\"form-check-input\" (change)=\"checkchange()\" type=\"radio\"\r\n          value=\"view\">\r\n        <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n          {{\"View only\" | translate}}\r\n        </label>\r\n      </div>\r\n\r\n      <div *ngIf=\"!showLink\" class=\"ms-MessageBar ms-MessageBar--error\">\r\n        <div class=\"ms-MessageBar-content\">\r\n          <div class=\"ms-MessageBar-icon\">\r\n            <i class=\"ms-Icon ms-Icon--ErrorBadge\"></i>\r\n          </div>\r\n          <div class=\"ms-MessageBar-text\">\r\n            {{\"Invalid file format. Only pdf, image, txt files are allowed to view\" | translate}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"pt-4\">\r\n        <button type=\"button\" [disabled]=\"sharefileForm.invalid || loading || !istocc || !showLink\"\r\n          (click)=\"sharefileForm.valid && !loading && istocc && showLink && addInsertLink()\"\r\n          class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Insert link\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<div class=\"ms-Grid-col ms-sm12 ms-md12 pb-4\">\r\n  <div *ngIf=\"files.length>0\" class=\"ms-Grid-row pt-3 pb-2 pl-2\">\r\n    <div *ngIf=\"sharefileForm.get('to').value.length>0\" class=\"pb-1\" style=\"font-weight: 550;font-size: 16px;\">To</div>\r\n    <div class=\"chip\" *ngFor=\"let item of sharefileForm.get('to').value\">\r\n      {{item}}\r\n    </div>\r\n    <div *ngIf=\"sharefileForm.get('cc').value.length>0\" class=\"pb-1\" style=\"font-weight: 550;font-size: 16px;\">Cc</div>\r\n    <div class=\"chip\" *ngFor=\"let item of sharefileForm.get('cc').value\">\r\n      {{item}}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sharefiles/sharefiles.component.scss":
/***/ (function(module, exports) {

module.exports = ".actionlogo {\n  height: 25px;\n  width: 25px; }\n\n.dragstyle {\n  color: gray; }\n\n.orstyle {\n  color: gray;\n  font-size: 12px; }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.uploadedsign {\n  float: right;\n  padding-right: 10px;\n  color: #0078d7; }\n\n.failed {\n  float: right;\n  padding-right: 10px;\n  color: red; }\n\n.filerow {\n  font-size: 13px; }\n\n.checkicon {\n  height: 11px;\n  width: 11px; }\n\n.sharefileloadingimage {\n  height: 25px;\n  width: 30px; }\n"

/***/ }),

/***/ "./src/app/components/sharefiles/sharefiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharefilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SharefilesComponent = /** @class */ (function () {
    function SharefilesComponent(commonService, sharefileservice, fb, router, cd) {
        this.commonService = commonService;
        this.sharefileservice = sharefileservice;
        this.fb = fb;
        this.router = router;
        this.cd = cd;
        this.loading = false;
        this.istocc = false;
        this.showLink = true;
        this.fileId = 0;
        this.files = [];
        this.stopCondition = true;
        this.otplink = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].ui.base + 'otp';
        this.sharedataId = '';
        this.sharefileForm = this.fb.group({
            downloadview: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            to: [[]],
            cc: [[]]
        });
    }
    SharefilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharefileForm.statusChanges.subscribe(function (x) {
            _this.cd.detectChanges();
        });
        this.stopCondition = (Office && Office.context && Office.context.displayLanguage) ? false : true;
        this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].interval(2000)
            .takeWhile(function () { return !_this.stopCondition; })
            .subscribe(function (i) {
            (_this.files.length > 0) && _this.toccRead();
        });
    };
    SharefilesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SharefilesComponent.prototype.onFileChange = function (event) {
        var filecount = event.target.files && event.target.files.length;
        if (filecount > 0 && !this.loading) {
            for (var i = 0; i < filecount; i++) {
                this.uploadFile(event.target.files[i]);
            }
        }
    };
    SharefilesComponent.prototype.dropped = function (event) {
        var _this = this;
        if (event.files.length == 1 && !this.loading) {
            for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
                var droppedFile = _a[_i];
                if (droppedFile.fileEntry.isFile) {
                    var fileEntry = droppedFile.fileEntry;
                    fileEntry.file(function (file) {
                        _this.uploadFile(file);
                        _this.cd.detectChanges();
                    });
                }
                else {
                    var fileEntry = droppedFile.fileEntry;
                    console.log(droppedFile.relativePath, fileEntry);
                }
            }
        }
    };
    SharefilesComponent.prototype.uploadFile = function (file) {
        var _this = this;
        this.loading = true;
        this.fileId = this.fileId + 1;
        var uploadFile = { id: this.fileId, file: file, uploaded: 'uploading' };
        if (Office && Office.context && Office.context.mailbox && Office.context.mailbox.userProfile && Office.context.mailbox.userProfile.emailAddress) {
            var uploaddata = { senderEmail: Office.context.mailbox.userProfile.emailAddress, file: file, shareDataId: this.sharedataId };
            this.files.push(uploadFile);
            this.sharefileservice.uploadfile(uploaddata).subscribe(function (data) {
                if (data && data.shareDataId) {
                    _this.loading = false;
                    _this.files.find(function (x) { return x.id === uploadFile.id; }).uploaded = 'uploaded';
                    _this.files.find(function (x) { return x.id === uploadFile.id; }).id = data.fileId;
                    _this.sharedataId = data.shareDataId;
                    _this.cd.detectChanges();
                    _this.showLink = true;
                    _this.checkchange();
                }
            }, function (error) {
                _this.loading = false;
                _this.files.find(function (x) { return x.id === uploadFile.id; }).uploaded = (error.error && error.error.text) || 'failed';
                _this.cd.detectChanges();
            });
        }
    };
    SharefilesComponent.prototype.removefile = function (id) {
        var _this = this;
        this.loading = true;
        var index = this.files.findIndex(function (f) { return f.id === id; });
        this.sharefileservice.deletefile(id).subscribe(function (data) {
            if (data) {
                _this.loading = false;
                _this.files.splice(index, 1);
                if (_this.files.length === 0) {
                    (_this.sharefileForm.reset());
                    _this.sharedataId = '';
                }
                _this.cd.detectChanges();
                _this.showLink = true;
                _this.checkchange();
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    SharefilesComponent.prototype.checkchange = function () {
        var _this = this;
        if (this.sharefileForm.value.downloadview == 'view') {
            this.files.forEach(function (file) {
                var fname = file.file.name;
                var fext = fname.split('.').pop().toLowerCase();
                if (fext != 'pdf' && fext != 'txt' && fext != 'png' && fext != 'gif' && fext != 'jpg' && fext != 'jpeg') {
                    _this.showLink = false;
                }
            });
        }
        else {
            this.showLink = true;
        }
    };
    SharefilesComponent.prototype.addInsertLink = function () {
        var _this = this;
        var message = "You have been sent " + this.files.length + " files:";
        var filesname = '';
        this.files.forEach(function (element) {
            filesname = filesname + '<div style="padding-bottom: 5px;font-size:13px;">' + element.file.name + '</div>';
        });
        var linktype = (this.sharefileForm.value.downloadview == 'download') ? 'Download files' : (this.sharefileForm.value.downloadview == 'view') ? 'View files' : '';
        var mode = (linktype == 'Download files') ? 1 : 0;
        this.sharefileservice.getSharedataLink(this.sharedataId, mode).subscribe(function (x) {
            if (x && x.key) {
                _this.otplink = _this.otplink + '/' + x.key + '/sharedata' + mode;
                var link_1 = '<div style="padding-top: 10px;padding-bottom: 10px;"><a style="text-decoration: none" href=' + _this.otplink + ' ><span style="background-color: #0078d7;color: white;height: 32px;min-width: 80px;padding: 1px 10px 2px;">&nbsp;' + linktype + '&nbsp;</span></a>' +
                    '<div style="color:#B3B3B3;font-size:10px;text-align: right;padding-right: 5px;">Powered by <b>Connectid&nbsp;&nbsp;</b></div>' +
                    '</div>';
                var self_1 = _this;
                var item_1 = Office.context.mailbox.item;
                item_1.body.getTypeAsync(function (result) {
                    if (result.status == Office.AsyncResultStatus.Failed) {
                    }
                    else {
                        var htmlcontent = '<div style="background-color: #f4f4f4;">' +
                            '<div style="font-weight: 550;padding-bottom: 15px;">'
                            + message + '</div>' +
                            filesname +
                            link_1 +
                            '</div>';
                        if (result.value == Office.MailboxEnums.BodyType.Html) {
                            item_1.body.setSelectedDataAsync(htmlcontent, {
                                coercionType: Office.CoercionType.Html,
                                asyncContext: { var3: 1, var4: 2 }
                            }, function (asyncResult) {
                                if (asyncResult.status ==
                                    Office.AsyncResultStatus.Failed) {
                                }
                                else {
                                    self_1.sharedataId && self_1.updatereceiver();
                                }
                            });
                        }
                        else {
                            item_1.body.setSelectedDataAsync('Value is not html type.', {
                                coercionType: Office.CoercionType.Text,
                                asyncContext: { var3: 1, var4: 2 }
                            }, function (asyncResult) {
                                if (asyncResult.status ==
                                    Office.AsyncResultStatus.Failed) {
                                }
                                else {
                                }
                            });
                        }
                    }
                });
            }
        }, function (error) {
        });
    };
    SharefilesComponent.prototype.toccRead = function () {
        var _this = this;
        var self = this;
        Office.context.mailbox.item.to.getAsync(function (result) {
            var email = result.value.map(function (x) { return x.emailAddress; });
            self.sharefileForm.patchValue({ to: email });
            _this.istocc = ((email.length > 0) || (self.sharefileForm.value.cc.length > 0)) ? true : false;
        });
        Office.context.mailbox.item.cc.getAsync(function (result) {
            var email = result.value.map(function (x) { return x.emailAddress; });
            self.sharefileForm.patchValue({ cc: email });
            _this.istocc = ((email.length > 0) || (self.sharefileForm.value.to.length > 0)) ? true : false;
        });
        // this.showLink = true;
        //  this.checkchange();
    };
    SharefilesComponent.prototype.updatereceiver = function () {
        var _this = this;
        this.loading = true;
        var receiver = [];
        (this.sharefileForm.value.to.length > 0) &&
            (receiver = this.sharefileForm.value.to);
        (this.sharefileForm.value.cc.length > 0) &&
            (receiver = receiver.concat(this.sharefileForm.value.cc));
        var updatedata = { receiverEmails: receiver, shareDataId: this.sharedataId };
        this.sharefileservice.updatereceivers(updatedata).subscribe(function (data) {
            _this.loading = false;
            data && _this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].routes.confirm]);
        }, function (error) {
            _this.loading = false;
        });
    };
    SharefilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sharefiles',
            template: __webpack_require__("./src/app/components/sharefiles/sharefiles.component.html"),
            styles: [__webpack_require__("./src/app/components/sharefiles/sharefiles.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["j" /* SharefileService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SharefilesComponent);
    return SharefilesComponent;
}());



/***/ }),

/***/ "./src/app/components/showpostdata/showpostdata.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md3\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md6\">\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n        <app-header></app-header>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-2\">\r\n        {{\"Shared Informations\" | translate}}\r\n      </div>\r\n\r\n      <div *ngFor=\"let item of postdata\" class=\"ms-Grid-row pt-3\">\r\n        <div *ngIf=\"item.fieldType!='uploadfile'\">\r\n          <span style=\"font-weight: 550;font-size: 16px;\">{{item.fieldName}}</span>\r\n          <span class=\"float-right\" style=\"font-size: 13px;\">{{item.fieldValue}}</span>\r\n        </div>\r\n        <div *ngIf=\"item.fieldType=='uploadfile'\">\r\n          <div style=\"font-weight: 550;font-size: 16px;\">{{item.fieldName}}</div>\r\n\r\n          <div *ngFor=\"let fileitem of item.fieldValues\" class=\"pt-3\">\r\n            <span>{{fileitem.name}}</span>\r\n            <span class=\"float-right pr-2\">\r\n              <button type=\"button\" class=\"ms-Button ms-Button--small\" (click)=\"openViewDialog(fileitem)\">\r\n                <span class=\"ms-Button-label\">{{\"view\" | translate}}</span>\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row pt-4\">\r\n        <div *ngIf=\"saveFailed===false\" class=\"ms-MessageBar ms-MessageBar--success\">\r\n          <div class=\"ms-MessageBar-content\">\r\n            <div class=\"ms-MessageBar-text\">\r\n              {{\"Data saved successfully\" | translate}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <span *ngIf=\"issaveddata==false\" class=\"float-right\">\r\n          <a style=\"text-decoration: none;cursor: pointer;\" (click)=\"openDialog()\" title=\"\">\r\n            <span style=\"background-color: #0078d7;color: white;height: 32px;min-width: 80px;padding: 1px 10px 2px;\">\r\n              {{\"Save data\" | translate}}\r\n            </span>\r\n          </a>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md3\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"docs-DialogExample-blocking\">\r\n  <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n    <div class=\"ms-Dialog-content\">\r\n      <div class=\"ms-Grid-row folderheadertop\">\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 text-center\">\r\n          {{\"Where would you like to save the data?\" | translate}}\r\n        </div>\r\n\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n          <span *ngIf=\"saveFailed\" class=\"ms-message\">{{\"Failed to save data\" | translate}}</span>\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"dataEntity && dataEntity.folderName!=''\" class=\"ms-Grid-row pt-4 pb-1 folderheader\">\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n          {{\"Your personal folder\" | translate}}\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"dataEntity\" [ngClass]=\"{'selected': folderId=='00000000-0000-0000-0000-000000000000'}\"\r\n        (click)=\"selecteddata('00000000-0000-0000-0000-000000000000',true)\"\r\n        class=\"ms-Grid-row foldername border ml-4 mr-4 pt-1 pb-1 border-left-0 border-right-0 border-top-0\">\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n          <span>\r\n            <img class=\"folder\" src=\"../../../assets/icon_folder.png\"> {{dataEntity.senderName}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row pt-4 pb-1\">\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 folderheader\">\r\n          {{\"Company shared folder\" | translate}}\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"userfolder\">\r\n        <div *ngFor=\"let rowuser of userfolder\">\r\n          <div [ngClass]=\"{'selected': folderId==rowuser.adminFolder.id}\"\r\n            (click)=\"selecteddata(rowuser.adminFolder.id,false)\"\r\n            class=\"ms-Grid-row foldername ml-4 mr-4 pt-1 pb-1 border border-left-0 border-right-0 border-top-0\">\r\n            <div class=\"ms-Grid-col ms-sm12 ms-md12\">\r\n              <span>\r\n                <img class=\"folder\" src=\"../../../assets/icon_folder.png\"> {{rowuser.adminFolder.folderName}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n\r\n    </div>\r\n    <div class=\"ms-Dialog-actions\">\r\n      <button type=\"button\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n        <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n      </button>\r\n      <button type=\"button\" [disabled]=\"folderId=='' || loading\" (click)=\"(folderId!='') && !loading && savedata()\"\r\n        class=\"ms-Button ms-Button--primary\">\r\n        <span class=\"ms-Button-label\">{{\"Save\" | translate}}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"viewfileDialog\">\r\n  <div class=\"ms-Dialog ms-Dialog--blocking\" style=\"max-width:100% !important;padding:5px;\">\r\n    <div class=\"ms-Dialog-title\" style=\"margin-bottom:5px;font-size:1em;\">\r\n      <span>{{\"View File\" | translate}}</span>\r\n      <i style=\"float:right; cursor:pointer;margin:2px;\" (click)=\"CloseViewDialog()\"\r\n        class=\"ms-Icon ms-Icon--Cancel\"></i>\r\n      <i style=\"float:right; cursor:pointer;margin:2px;\" (click)=\"toggleDialogScreen()\"\r\n        class=\"ms-Icon ms-Icon--FullScreen\"></i>\r\n    </div>\r\n    <img class=\"docviewer-progress loadingimage\" src=\"../../../assets/loading.gif\">\r\n    <iframe [src]=\"viewFileUrl\" (load)=\"iframeLoaded()\" class=\"docviewer screen-normal\" [class]=\"viewerClass\"></iframe>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/showpostdata/showpostdata.component.scss":
/***/ (function(module, exports) {

module.exports = ".foldername {\n  font-size: 14px;\n  cursor: pointer; }\n\n.folderheadertop {\n  font-weight: 550;\n  font-size: 16px; }\n\n.folderheader {\n  font-weight: 550;\n  font-size: 14px; }\n\n.selected {\n  background-color: #dee2e6; }\n\n.screen-full {\n  width: calc(100vw - 20px);\n  height: calc(100vh - 35px); }\n\n.screen-normal {\n  width: calc(80vw - 20px);\n  height: calc(80vh - 35px); }\n"

/***/ }),

/***/ "./src/app/components/showpostdata/showpostdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowpostdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowpostdataComponent = /** @class */ (function () {
    function ShowpostdataComponent(router, storage, postdataService, commonService, sanitizer, el) {
        this.router = router;
        this.storage = storage;
        this.postdataService = postdataService;
        this.commonService = commonService;
        this.sanitizer = sanitizer;
        this.el = el;
        this.loading = false;
        this.viewerClass = "docviewer screen-normal";
        this.userfolder = [];
        this.timerId = null;
        this.key = this.storage.get('key');
        this.receiverId = this.storage.get('showpostdatareceiverId');
    }
    ShowpostdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.key && this.receiverId &&
            this.postdataService.getshowpostdata(this.key, this.receiverId).subscribe(function (data) {
                if (data && data.postDataFiles) {
                    var remainingDays = data.postDataFiles[0].expDate && _this.commonService.dateDiff(data.postDataFiles[0].expDate);
                    if (remainingDays >= 0) {
                        _this.postdata = data.postDataFields;
                        _this.dataEntity = data;
                        _this.postdataService.isSaved(_this.dataEntity.id, _this.receiverId).subscribe(function (x) {
                            _this.issaveddata = x.data;
                        }, function (error) {
                        });
                    }
                    _this.loading = false;
                }
            }, function (error) {
                _this.loading = false;
            });
    };
    ShowpostdataComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    ShowpostdataComponent.prototype.converUrl = function (url) {
        url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].api.base + '/assets/PreviewDoc/#' + url;
        return url;
    };
    ShowpostdataComponent.prototype.openViewDialog = function (obj) {
        var _this = this;
        var iframe = this.el.nativeElement.querySelector('.docviewer');
        var progress_container = this.el.nativeElement.querySelector('.docviewer-progress');
        iframe.hidden = true;
        progress_container.hidden = false;
        this.viewDialogComponent.open();
        var fileurl = this.commonService.getFileViewUrl(obj, "/api/postdata/viewfile/");
        iframe.src = '';
        setTimeout(function () {
            _this.viewFileUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(fileurl);
        }, 100);
        this.timerId = setInterval(function () {
            iframe.src = '';
            _this.viewFileUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(fileurl);
        }, 2000);
    };
    ShowpostdataComponent.prototype.iframeLoaded = function () {
        var iframe = this.el.nativeElement.querySelector('.docviewer');
        if (iframe.src.indexOf("https://docs.google.com/gview") != -1 || iframe.src.indexOf('/assets/PreviewDoc/#') != -1) {
            var progress_container = this.el.nativeElement.querySelector('.docviewer-progress');
            iframe.hidden = false;
            progress_container.hidden = true;
            if (this.timerId)
                clearInterval(this.timerId);
        }
    };
    ShowpostdataComponent.prototype.CloseViewDialog = function () {
        this.viewDialogComponent.close();
        if (this.timerId)
            clearInterval(this.timerId);
    };
    ShowpostdataComponent.prototype.toggleDialogScreen = function () {
        if (this.viewerClass.indexOf("screen-normal") != -1) {
            this.viewerClass = "docviewer screen-full";
        }
        else {
            this.viewerClass = "docviewer screen-normal";
        }
    };
    ShowpostdataComponent.prototype.openDialog = function () {
        var _this = this;
        this.fabricInitialize();
        this.postdataService.getUserFolder(this.dataEntity.senderId).subscribe(function (data) {
            if (data) {
                _this.userfolder = data;
                _this.folderId = '';
                _this.isPersonal = null;
                _this.saveFailed = null;
                _this.dialogComponent.open();
            }
        }, function (error) {
        });
    };
    ShowpostdataComponent.prototype.fabricInitialize = function () {
        var example = document.querySelector(".docs-DialogExample-blocking");
        var dialog = example.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
        var viewdialog = document.querySelector(".viewfileDialog");
        var dialogView = viewdialog.querySelector(".ms-Dialog");
        this.viewDialogComponent = new fabric['Dialog'](dialogView);
    };
    ShowpostdataComponent.prototype.selecteddata = function (folderid, ispersonal) {
        this.folderId = folderid;
        this.isPersonal = ispersonal;
    };
    ShowpostdataComponent.prototype.savedata = function () {
        var _this = this;
        this.loading = true;
        this.postdataService.savepostdata(this.folderId, this.isPersonal, this.dataEntity).subscribe(function (data) {
            if (data) {
                _this.loading = false;
                _this.saveFailed = false;
                _this.issaveddata = true;
                // !this.isPersonal && (this.issaveddata = true);
                _this.dialogComponent.close();
            }
        }, function (error) {
            _this.loading = false;
            _this.saveFailed = true;
        });
    };
    ShowpostdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-showpostdata',
            template: __webpack_require__("./src/app/components/showpostdata/showpostdata.component.html"),
            styles: [__webpack_require__("./src/app/components/showpostdata/showpostdata.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__services__["i" /* PostdataService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ShowpostdataComponent);
    return ShowpostdataComponent;
}());



/***/ }),

/***/ "./src/app/components/superuser/superuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n\r\n    <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-10 routeheader\">\r\n        {{'Customers' | translate}}\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <button type=\"button\" class=\"ms-Button ms-Button--primary float-right\" (click)=\"openUserdialog()\">\r\n          <span class=\"ms-Button-label\">+ {{\"Add Customer\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row pt-2 pb-4\">\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\"\r\n          placeholder='{{\"Search\" | translate}}...'>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <label style=\"cursor:pointer;\">\r\n          <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"activeOnly\" (change)=\"loadCompanies()\" />\r\n          {{\"Show only active customers\" | translate}}\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-2\">\r\n        {{\"Customer Name\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Subscription\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Admin\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Admin email\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Created\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Price per user\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Price per transaction\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Active users\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-1\">\r\n        {{\"Action\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"company\">\r\n    <div *ngFor=\"let rowdata of company | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-2\">\r\n              <span class=\"namelink\" style=\"cursor: pointer;\" routerLink=\"/admin/{{rowdata.id}}\"\r\n                ngbTooltip=\"{{rowdata.name}}\">{{rowdata.name| shorten: 20: '...'}}</span>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <span class=\"com-{{rowdata.subscriptionType}}\">{{rowdata.subscriptionType | translate}}</span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span *ngIf=\"rowdata.adminUser\"> {{rowdata.adminUser.name}}</span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span *ngIf=\"rowdata.adminUser\"\r\n                ngbTooltip=\"{{rowdata.adminUser.email}}\">{{rowdata.adminUser.email| shorten: 20: '...'}}</span>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <span *ngIf=\"rowdata.adminUser\">{{rowdata.created | date}}</span>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <span *ngIf=\"rowdata.package.price\">\r\n                {{rowdata.package.price}}\r\n                <span class=\"third-element\">{{rowdata.package.priceUnit}}</span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <span *ngIf=\"rowdata.package.transactionPrice\">\r\n                {{rowdata.package.transactionPrice}}\r\n                <span class=\"third-element\">{{rowdata.package.priceUnit}}</span>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              {{rowdata.noOfActiveUsers}}\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n              <i *ngIf=\"rowdata.isDeleted != true\" style=\"color:#0078d7;font-size: 16px;cursor: pointer;\"\r\n                class=\"fa fa-pencil\" title=\"{{'Edit Customer'|translate}}\" (click)=\"openUserdialog(rowdata.id)\"></i>\r\n              <i *ngIf='rowdata.id !== loggedInUser.company.id && rowdata.isDeleted != true'\r\n                title=\"{{'Unsubscribe'|translate}}\" style=\"color: #0078d7;font-size: 16px;cursor: pointer;\"\r\n                class=\"ms-Icon ms-Icon--Unsubscribe\" (click)=\"openUnsubscribeDialog(rowdata.id)\"></i>\r\n              <i *ngIf='rowdata.id !== loggedInUser.company.id && rowdata.isDeleted == true'\r\n                style=\"color: #0078d7;font-size: 16px;cursor: pointer;\" class=\"ms-Icon ms-Icon--Subscribe\"\r\n                (click)=\"openResubscribeDialog(rowdata.id)\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">{{\"No Data Found\" | translate}}</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">\r\n          {{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}}\r\n          {{entityend}} {{\"of\" | translate}} {{entityCount}}\r\n          {{\"entries\" | translate}}\r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\" previousLabel=\"{{'Previous' | translate}}\"\r\n          nextLabel=\"{{'Next' | translate}}\" (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"userdialog1\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n      <div class=\"ms-Dialog-title\">\r\n        {{isEdit ? ('Edit Customer' | translate) : ('Add Customer' | translate)}}\r\n      </div>\r\n      <form [formGroup]=\"companyForm\">\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"ms-TextField\">\r\n            <label class=\"ms-Label\">{{\"Name\" | translate}}</label>\r\n            <input formControlName=\"name\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"ms-TextField\">\r\n            <label class=\"ms-Label\">{{\"Address\" | translate}}</label>\r\n            <input formControlName=\"address\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n          <div class=\"ms-TextField\">\r\n            <label class=\"ms-Label\">{{\"Domain\" | translate}}</label>\r\n            <input formControlName=\"domain\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <ng-container *ngIf=\"isEdit\">\r\n          <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n            <div class=\"ms-TextField\">\r\n              <label class=\"ms-Label\">{{\"Price per user\" | translate}}</label>\r\n              <input formControlName=\"price\" class=\"ms-TextField-field\" type=\"number\" min=\"0\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n            <div class=\"ms-TextField\">\r\n              <label class=\"ms-Label\">{{\"Price per transaction\" | translate}}</label>\r\n              <input formControlName=\"transactionPrice\" class=\"ms-TextField-field\" type=\"number\" min=\"0\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n            <div class=\"ms-TextField\">\r\n              <label class=\"ms-Label\">{{\"Currency\" | translate}}</label>\r\n              <select formControlName=\"priceUnit\" class=\"form-control form-control-sm\">\r\n                <option *ngFor=\"let item of priceUnit\" [value]=\"item\">{{item}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1\">\r\n            <div class=\"ms-TextField\">\r\n              <label class=\"ms-Label\">{{\"Promotion code\" | translate}}</label>\r\n              <input formControlName=\"promotionCode\" class=\"ms-TextField-field\" type=\"text\" value=\"\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"ms-Grid-col ms-sm12 ms-md12 pt-1 pb-4\" *ngIf='companyForm.value.id !== loggedInUser.company.id'>\r\n            <label class=\"ms-Label\">{{\"Status\" | translate}}</label>\r\n            <div class=\"form-check\">\r\n              <input formControlName=\"isActive\" type=\"checkbox\" class=\"form-check-input\" id=\"companyIsActive\">\r\n              <label class=\"form-check-label\" for=\"companyIsActive\">{{\"Active\" | translate}}</label>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n\r\n      <div class=\"ms-Dialog-actions\">\r\n        <img *ngIf=\"customerSaving\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n        <button type=\"button\" [disabled]=\"customerSaving || companyForm.invalid\"\r\n          (click)=\"companyForm.valid && userSubmit()\" class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Save\" | translate}}</span>\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"customerSaving\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"companyUnsubscribeDialog\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n      <div class=\"ms-Dialog-title\">\r\n        {{'Unsubscribe Customer' | translate}}\r\n      </div>\r\n      <div class=\"ms-Dialog-content\">\r\n        {{'Are you sure to unsubscribe this customer?' | translate}}\r\n      </div>\r\n\r\n      <div class=\"ms-Dialog-actions\">\r\n        <img *ngIf=\"subNunsubcribing\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n        <button type=\"button\" [disabled]=\"subNunsubcribing\" (click)=\"unsubscribeCustomer()\"\r\n          class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Unsubscribe\" | translate}}</span>\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"subNunsubcribing\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"companyResubscribeDialog\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n      <div class=\"ms-Dialog-title\">\r\n        {{'Resubscribe Customer' | translate}}\r\n      </div>\r\n      <div class=\"ms-Dialog-content\">\r\n        {{'Are you sure to resubscribe this customer?' | translate}}\r\n      </div>\r\n\r\n      <div class=\"ms-Dialog-actions\">\r\n        <img *ngIf=\"subNunsubcribing\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n        <button type=\"button\" [disabled]=\"subNunsubcribing\" (click)=\"resubscribeCustomer()\"\r\n          class=\"ms-Button ms-Button--primary\">\r\n          <span class=\"ms-Button-label\">{{\"Resubscribe\" | translate}}</span>\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"subNunsubcribing\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/superuser/superuser.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/superuser/superuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuperuserComponent = /** @class */ (function () {
    function SuperuserComponent(adminService, commonService, router, route, fb, storage) {
        this.adminService = adminService;
        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.company = [];
        this.companySource = [];
        this.loading = false;
        this.customerSaving = false;
        this.subNunsubcribing = false;
        this.priceUnit = ['EUR', 'DKK', 'USD'];
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.filterForm = this.fb.group({
            searchText: '',
            activeOnly: true
        });
        this.companyForm = this.fb.group({
            id: [''],
            name: ['', this.commonService.noWhitespaceValidator],
            address: ['', this.commonService.noWhitespaceValidator],
            packageId: [''],
            domain: ['', this.commonService.noWhitespaceValidator],
            transactionPrice: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            price: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]],
            priceUnit: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            promotionCode: [''],
            isActive: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    SuperuserComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.loggedInUser = this.storage.get('user');
        this.adminService.getCompanyList(this.filterForm.value.activeOnly).subscribe(function (data) {
            _this.loading = false;
            _this.companySource = data;
            _this.company = _this.companySource;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    SuperuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.loadCompanies();
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.company = (filterkey == "") ? _this.companySource :
                _this.companySource.filter(function (x) {
                    return x.isDeleted !== true &&
                        (x.name.toString().toUpperCase().includes(filterkey) ||
                            (x.adminUser.name && x.adminUser.name.toString().toUpperCase().includes(filterkey)) ||
                            (x.adminUser.email && x.adminUser.email.toString().toUpperCase().includes(filterkey)));
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    SuperuserComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    SuperuserComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    SuperuserComponent.prototype.openUserdialog = function (id) {
        this.fabricInitialize();
        if (id != undefined) {
            this.isEdit = true;
            var comapny = this.company.find(function (u) { return u.id == id; });
            this.companyForm.controls['id'].setValue(comapny.id);
            this.companyForm.controls['name'].setValue(comapny.name);
            this.companyForm.controls['domain'].setValue(comapny.domain);
            this.companyForm.controls['address'].setValue(comapny.address);
            this.companyForm.controls['packageId'].setValue(comapny.package.id);
            this.companyForm.controls['transactionPrice'].setValue(comapny.package.transactionPrice);
            this.companyForm.controls['price'].setValue(comapny.package.price);
            this.companyForm.controls['priceUnit'].setValue(comapny.package.priceUnit);
            this.companyForm.controls['isActive'].setValue(comapny.isActive);
            this.companyForm.controls['promotionCode'].setValue(comapny.promotionCode);
        }
        else {
            this.isEdit = false;
            this.companyForm.controls['id'].setValue('00000000-0000-0000-0000-000000000000');
            this.companyForm.controls['name'].setValue('');
            this.companyForm.controls['address'].setValue('');
            this.companyForm.controls['packageId'].setValue('00000000-0000-0000-0000-000000000000');
            this.companyForm.controls['domain'].setValue('');
            this.companyForm.controls['transactionPrice'].setValue(0);
            this.companyForm.controls['price'].setValue(0);
            this.companyForm.controls['priceUnit'].setValue('EUR');
            this.companyForm.controls['isActive'].setValue(false);
            this.companyForm.controls['promotionCode'].setValue('');
        }
        this.dialogComponent.open();
    };
    SuperuserComponent.prototype.userSubmit = function () {
        var _this = this;
        this.customerSaving = true;
        var data = this.companyForm.value;
        data.id && data.id != '00000000-0000-0000-0000-000000000000' && this.adminService.editCompanyPackage(data.id, data).subscribe(function (data) {
            _this.dialogComponent.close();
            _this.loadCompanies();
            _this.customerSaving = false;
        }, function (error) {
            _this.customerSaving = false;
            console.log(error);
        });
        data.id == '00000000-0000-0000-0000-000000000000' && this.adminService.addCompany(data).subscribe(function (data) {
            _this.dialogComponent.close();
            _this.loadCompanies();
            _this.customerSaving = false;
        }, function (error) {
            _this.customerSaving = false;
            console.log(error);
        });
    };
    SuperuserComponent.prototype.fabricInitialize = function () {
        var userDialog = document.querySelector(".userdialog1");
        var dialog = userDialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
    };
    SuperuserComponent.prototype.viewcounts = function () {
        this.entityCount = this.company.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    SuperuserComponent.prototype.openUnsubscribeDialog = function (id) {
        var userDialog = document.querySelector(".companyUnsubscribeDialog");
        var dialog = userDialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
        this.selectedCustomerId = id;
        this.dialogComponent.open();
    };
    SuperuserComponent.prototype.openResubscribeDialog = function (id) {
        var userDialog = document.querySelector(".companyResubscribeDialog");
        var dialog = userDialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
        this.selectedCustomerId = id;
        this.dialogComponent.open();
    };
    SuperuserComponent.prototype.unsubscribeCustomer = function () {
        var _this = this;
        this.subNunsubcribing = true;
        this.adminService.unsubscribeCompany(this.selectedCustomerId).subscribe(function (res) {
            console.log('Customer unsubscribed successfully.');
            _this.loadCompanies();
            var customerIndex = _this.company.findIndex(function (c) {
                return c.id == _this.selectedCustomerId;
            });
            _this.company.splice(customerIndex, 1);
            _this.subNunsubcribing = false;
            _this.dialogComponent.close();
        }, function (error) {
            _this.subNunsubcribing = false;
            console.log(error);
        });
    };
    SuperuserComponent.prototype.resubscribeCustomer = function () {
        var _this = this;
        this.subNunsubcribing = true;
        this.adminService.resubscribeCompany(this.selectedCustomerId).subscribe(function (res) {
            console.log('Customer resubscribed successfully.');
            _this.loadCompanies();
            var customerIndex = _this.company.findIndex(function (c) {
                return c.id == _this.selectedCustomerId;
            });
            _this.company.splice(customerIndex, 1);
            _this.subNunsubcribing = false;
            _this.dialogComponent.close();
        }, function (error) {
            _this.subNunsubcribing = false;
            console.log(error);
        });
    };
    SuperuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-superuser',
            template: __webpack_require__("./src/app/components/superuser/superuser.component.html"),
            styles: [__webpack_require__("./src/app/components/superuser/superuser.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], SuperuserComponent);
    return SuperuserComponent;
}());



/***/ }),

/***/ "./src/app/components/superuserhome/superuserhome.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light border-bottom\">\r\n    <a class=\"navbar-brand pr-2\" style=\"font-weight: 500;\">\r\n        <img src=\"../../../assets/ss_logo.png\" height=\"25\" class=\"logo d-inline-block align-top mt-1 mr-1\"\r\n            alt='{{\"Connectid Mail\" | translate}}'>\r\n    </a>\r\n\r\n    <!--\r\n    <div ngbDropdown placement=\"bottom-right\" class=\"d-inline-block\">\r\n        <div id=\"dropdownBasic1\" style=\"cursor: pointer;\" ngbDropdownToggle>Super Admin</div>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n            <button class=\"dropdown-item\">Log out</button>\r\n        </div>\r\n    </div>\r\n-->\r\n<div class=\"navbar-collapse\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item nav-padding\" [ngClass]=\"{'activemodule': selectmodule == 'customers'}\">\r\n        <a class=\"nav-link active\" (click)=\"routecheck('customers')\" [routerLink]=\"['home']\">{{\"Customers\" | translate}}</a>\r\n      </li>\r\n      <li class=\"nav-item nav-padding\" [ngClass]=\"{'activemodule': selectmodule == 'surveillance'}\">\r\n        <a class=\"nav-link nav-padding\" (click)=\"routecheck('surveillance')\" [routerLink]=\"['surveillance']\">{{\"Surveillance\" | translate}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"userdialog\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\">\r\n        <div class=\"ms-Dialog-content\">\r\n            {{\"Invalid user.\" | translate}}\r\n        </div>\r\n        <div class=\"ms-Dialog-actions\">\r\n            <button type=\"button\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n                <span class=\"ms-Button-label\">{{\"Close\" | translate}}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/superuserhome/superuserhome.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/superuserhome/superuserhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperuserhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuperuserhomeComponent = /** @class */ (function () {
    function SuperuserhomeComponent(storage, router, route, location, authenticationService, commonService) {
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.location = location;
        this.authenticationService = authenticationService;
        this.commonService = commonService;
        this.authlink = '';
        this.stopCondition = true;
        this.selectmodule = "customers";
    }
    SuperuserhomeComponent.prototype.ngOnInit = function () {
        var path = this.location.path(true);
        if (path.includes("surveillance")) {
            this.selectmodule = 'surveillance';
        }
        else if (path.includes("home")) {
            this.selectmodule = 'customers';
        }
    };
    SuperuserhomeComponent.prototype.ngOnDestroy = function () {
        this.subscription &&
            this.subscription.unsubscribe();
    };
    SuperuserhomeComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    SuperuserhomeComponent.prototype.fabricInitialize = function () {
        var userDialog = document.querySelector(".userdialog");
        var dialog = userDialog.querySelector(".ms-Dialog");
        this.dialogComponent = new fabric['Dialog'](dialog);
    };
    SuperuserhomeComponent.prototype.routecheck = function (data) {
        this.selectmodule = data;
    };
    SuperuserhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-superuserhome',
            template: __webpack_require__("./src/app/components/superuserhome/superuserhome.component.html"),
            styles: [__webpack_require__("./src/app/components/superuserhome/superuserhome.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__services__["d" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["e" /* CommonService */]])
    ], SuperuserhomeComponent);
    return SuperuserhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/superusersurveillance/superusersurveillance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <div class=\"row no-gutters pt-4 pb-3\">\r\n    <div class=\"col-md-2 routeheader\">\r\n      {{ \"Surveillance\" | translate }}\r\n    </div>\r\n    <div class=\"col-md-1 padding-zero\" style=\"height: 20px;\">\r\n      <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\" />\r\n    </div>\r\n  </div>\r\n  <fieldset class=\"search-container\" style=\"border:1px inset #ccc;padding:5px;margin:0;\">\r\n    <legend style=\"width:auto;padding: 0 8px;margin-bottom:0;font-size:inherit;\">{{\"Search\" | translate}}</legend>\r\n    <div class=\"form-inline\" [formGroup]=\"filterForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"top\" style=\"width:70px;\">{{\"Top\" | translate}}</label>\r\n        <select id=\"top\" formControlName=\"maxResultCount\" class=\"form-control form-control-sm\">\r\n          <option value=\"0\">{{ \"All\" | translate}}</option>\r\n          <option value=\"10\">10</option>\r\n          <option value=\"50\">50</option>\r\n          <option value=\"100\">100</option>\r\n          <option value=\"200\">200</option>\r\n          <option value=\"500\">500</option>\r\n          <option value=\"1000\">1000</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"from\">{{\"Date\" | translate}}</label>\r\n        <input id=\"from\" type=\"date\" formControlName=\"logTimeFrom\" class=\"form-control form-control-sm date-picker\" />\r\n        <label for=\"to\" style=\"width:auto\">-</label>\r\n        <input id=\"to\" type=\"date\" formControlName=\"logTimeTo\" class=\"form-control form-control-sm date-picker\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"logType\">{{\"Log Type\" | translate}}</label>\r\n        <select id=\"logType\" formControlName=\"messageType\" class=\"form-control form-control-sm\">\r\n          <option *ngFor=\"let item of messageTypes\" [value]=\"item\">{{item}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"action\">{{\"Action\" | translate}}</label>\r\n        <select id=\"action\" formControlName=\"actionName\" class=\"form-control form-control-sm\">\r\n          <option *ngFor=\"let item of actionTypes\" [value]=\"item\">{{item}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"severity\">{{\"Severity\" | translate}}</label>\r\n        <select id=\"severity\" formControlName=\"severity\" class=\"form-control form-control-sm\">\r\n          <option *ngFor=\"let item of severities\" [value]=\"item.id\">{{item.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"company\">{{\"Company\" | translate}}</label>\r\n        <select id=\"company\" formControlName=\"companyId\" class=\"form-control form-control-sm\">\r\n          <option *ngFor=\"let company of companies\" [value]=\"company.id\">{{company.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <div class=\"col-md-4\" [formGroup]=\"searchForm\" style=\"padding:0;margin-top:5px;float:left;\">\r\n    <input style=\"margin-top:5px;\" formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"{{ 'Search' | translate }}...\" />\r\n  </div>\r\n  <div class=\"col-md-8\" style=\"float:left;padding:0;\">\r\n    <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <p class=\"second-element\" *ngIf=\"entityCount > 0\">\r\n            {{ \"Showing\" | translate }} {{ entitystart }} {{ \"to\" | translate }}\r\n            {{ entityend }} {{ \"of\" | translate }} {{ entityCount }}\r\n            {{ \"entries\" | translate }}\r\n          </p>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <pagination-controls style=\"float:right;\"\r\n                               previousLabel=\"{{ 'Previous' | translate }}\"\r\n                               nextLabel=\"{{ 'Next' | translate }}\"\r\n                               (pageChange)=\"pageChanged($event)\"\r\n                               #api></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--data list-->\r\n  <table class=\"table table-bordered table-sm\" cellspacing=\"0\" width=\"100%\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"th-sm\">{{ \"Time\" | translate }}</th>\r\n        <th class=\"th-sm\">{{ \"Log Type\" | translate }}</th>\r\n        <th class=\"th-sm\">{{ \"Company\" | translate }}</th>\r\n        <th class=\"th-sm\">{{ \"User\" | translate }}</th>\r\n        <th class=\"th-sm\">{{ \"Action\" | translate }}</th>\r\n        <th class=\"th-sm\">{{ \"Severity\" | translate }}</th>\r\n        <th class=\"th-sm\">{{ \"Message\" | translate }}</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"logs\">\r\n      <tr *ngIf=\"entityCount == 0\" class=\"data-list-row\">\r\n        <td colspan=\"8\">{{ \"No Data Found\" | translate }}</td>\r\n      </tr>\r\n      <tr [ngClass]=\"log.messageType\"\r\n          *ngFor=\"let log of logs | paginate : { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n        <td class=\"wp-nr\">\r\n          {{ log.logTime | date: \"yyyy-MM-dd hh:mm:ss\" }} <br />\r\n          <a href=\"#\" (click)=\"openLogDetailDialog(log)\" class=\"namelink btn-log-detail\" style=\"cursor: pointer;\">{{ \"View Detail\" | translate }}</a>\r\n        </td>\r\n        <td class=\"wp-nr\">{{ log.messageType }}</td>\r\n        <td class=\"wp-nr\">{{ log.companyName }}<br />{{ log.companyDomain }}</td>\r\n        <td class=\"wp-nr\">{{ log.userName }}<br />{{ log.userEmail }}</td>\r\n        <td class=\"wp-nr\">{{ log.actionName }}</td>\r\n        <td class=\"wp-nr\">{{ log.severityName }}</td>\r\n        <td>{{ log.logMessage }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount > 0\">\r\n          {{ \"Showing\" | translate }} {{ entitystart }} {{ \"to\" | translate }}\r\n          {{ entityend }} {{ \"of\" | translate }} {{ entityCount }}\r\n          {{ \"entries\" | translate }}\r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\"\r\n                             previousLabel=\"{{ 'Previous' | translate }}\"\r\n                             nextLabel=\"{{ 'Next' | translate }}\"\r\n                             (pageChange)=\"pageChanged($event)\"\r\n                             #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"logdetaildialog\">\r\n    <div class=\"ms-Dialog ms-Dialog--blocking\" style=\"max-width: 1500px; width: 900px;\">\r\n      <div class=\"ms-Dialog-title\">\r\n        {{'Surveillance Detail' | translate}}\r\n        <i (click)=\"dialogComponent.close()\" class=\"fa fa-close close-dialog-icon\"></i>\r\n      </div>\r\n      <div *ngIf=\"logDetail\" style=\"max-height: 70vh;overflow: auto;\">\r\n        <div class=\"log-info-row\"><span class=\"label\">Id</span><span class=\"text\">: {{ logDetail.id }}</span></div>\r\n        <div class=\"log-info-row\"><span class=\"label\">Time</span><span class=\"text\">: {{ logDetail.logTime | date: \"yyyy-MM-dd hh:mm:ss\" }}</span></div>\r\n        <div *ngIf=\"logDetail.companyName\" class=\"log-info-row\"><span class=\"label\">Company</span><span class=\"text\">: {{ logDetail.companyName }} ({{ logDetail.companyDomain }})</span></div>\r\n        <div *ngIf=\"logDetail.userEmail\" class=\"log-info-row\"><span class=\"label\">User</span><span class=\"text\">: {{ logDetail.userName }} ({{ logDetail.userEmail }})</span></div>\r\n        <div class=\"log-info-row\"><span class=\"label\">Type</span><span class=\"text\">: {{ logDetail.messageType }}</span></div>\r\n        <div class=\"log-info-row\"><span class=\"label\">Action</span><span class=\"text\">: {{ logDetail.actionName }}</span></div>\r\n        <div class=\"log-info-row\"><span class=\"label\">Severity</span><span class=\"text\">: {{ logDetail.severityName }}</span></div>\r\n        <div *ngIf=\"logDetail.logMessage\" class=\"log-info-row\">\r\n          <span class=\"label-long\">Message</span>\r\n          <p class=\"text-long\">{{ logDetail.logMessage }}</p>\r\n        </div>\r\n        <div *ngIf=\"logDetail.result\" class=\"log-info-row\">\r\n          <span class=\"label-long\">Result</span>\r\n          <code class=\"text-long\">{{ logDetail.result }}</code>\r\n        </div>\r\n        <div *ngIf=\"logDetail.moduleName || logDetail.subModuleName\" class=\"log-info-row\">\r\n          <span class=\"label-long\">Module</span>\r\n          <p class=\"text-long\">{{ logDetail.moduleName }}<br />{{ logDetail.subModuleName}}</p>\r\n        </div>\r\n        <div *ngIf=\"logDetail.machineName || logDetail.machineIP\" class=\"log-info-row\"><span class=\"label\">Client Machine</span><span class=\"text\">: {{ logDetail.machineName }}({{ logDetail.machineIP}})</span></div>\r\n        <div *ngIf=\"logDetail.entityName\" class=\"log-info-row\"><span class=\"label\">Entity</span><span class=\"text\">: {{ logDetail.entityName }}</span></div>\r\n        <div *ngIf=\"logDetail.oldObject\" class=\"log-info-row\">\r\n          <span class=\"label-long\">Old Value</span>\r\n          <code class=\"text-long\">{{ logDetail.oldObject }}</code>\r\n        </div>\r\n        <div *ngIf=\"logDetail.newObject\" class=\"log-info-row\">\r\n          <span class=\"label-long\">New Value</span>\r\n          <code class=\"text-long\">{{ logDetail.newObject }}</code>\r\n        </div>\r\n        <div *ngIf=\"logDetail.userAgent\" class=\"log-info-row\">\r\n          <span class=\"label-long\">User Agent</span>\r\n          <p class=\"text-long\">{{ logDetail.userAgent }}</p>\r\n        </div>\r\n        <div *ngIf=\"logDetail.appVersion\" class=\"log-info-row\"><span class=\"label\">App Version</span><span class=\"text\">: {{ logDetail.appVersion }}</span></div>\r\n      </div>\r\n      <div class=\"ms-Dialog-actions\">\r\n        <button type=\"button\" (click)=\"dialogComponent.close()\" class=\"ms-Button\">\r\n          <span class=\"ms-Button-label\">{{\"Close\" | translate}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/superusersurveillance/superusersurveillance.component.scss":
/***/ (function(module, exports) {

module.exports = ".wp-nr {\n  white-space: nowrap; }\n\ntr.Error {\n  color: #721c24;\n  background-color: #f8d7da;\n  border: 2px solid #f5c6cb; }\n\ntr.Warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border: 2px solid #ffeeba; }\n\n.padding-zero {\n  padding: 0 !important; }\n\ntr th {\n  white-space: nowrap; }\n\ntr.filter-row td {\n  padding: 0; }\n\n.log-info-row .label {\n  font-weight: bold;\n  width: 120px;\n  display: table-cell;\n  float: left; }\n\n.log-info-row .label-long {\n  font-weight: bold;\n  border-bottom: 1px solid #ccc;\n  width: 100%;\n  display: table;\n  margin-bottom: 2px;\n  padding-bottom: 2px; }\n\n.log-info-row .text-long {\n  margin-bottom: 2px; }\n\n.close-dialog-icon {\n  float: right;\n  margin-right: 10px;\n  cursor: pointer;\n  color: #aaa;\n  padding: 5px; }\n\n.search-container .date-picker {\n  width: 135px;\n  padding-right: 0;\n  padding-left: 2px; }\n\n.search-container #top, .search-container #severity {\n  width: 100px; }\n\n.search-container #company {\n  width: 285px; }\n\n.search-container .form-group {\n  margin: 2px; }\n\n.search-container .form-group label {\n    margin-right: 5px;\n    width: 70px;\n    display: inline; }\n\n.search-container .form-group .form-control {\n    margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/components/superusersurveillance/superusersurveillance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperuserSurveillanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_surveillance_service__ = __webpack_require__("./src/app/services/surveillance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuperuserSurveillanceComponent = /** @class */ (function () {
    function SuperuserSurveillanceComponent(adminService, surveillanceService, commonService, router, route, fb, storage) {
        this.adminService = adminService;
        this.surveillanceService = surveillanceService;
        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.logs = [];
        this.logsSource = [];
        this.loading = false;
        this.companies = [];
        this.severities = [];
        this.actionTypes = [];
        this.messageTypes = [];
        this.logDetail = {};
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.searchForm = this.fb.group({
            searchText: ['']
        });
        this.filterForm = this.fb.group({
            maxResultCount: [100],
            logTimeFrom: [null],
            logTimeTo: [null],
            companyId: [null],
            severity: [null],
            actionName: ['All'],
            messageType: ['All']
        });
    }
    SuperuserSurveillanceComponent.prototype.loadSurveillances = function () {
        var _this = this;
        var options = this.filterForm.getRawValue();
        if (options.companyId === 'null') {
            options.companyId = null;
        }
        if (options.severity === 'null') {
            options.severity = null;
        }
        if (options.actionName === 'All') {
            options.actionName = null;
        }
        if (options.messageType === 'All') {
            options.messageType = null;
        }
        if (options.maxResultCount === '0') {
            options.maxResultCount = null;
        }
        this.surveillanceService.getSurveillances(options).subscribe(function (data) {
            _this.loading = false;
            _this.logs = data;
            _this.logsSource = _this.logs;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    SuperuserSurveillanceComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.adminService.getCompanyList(false).subscribe(function (data) {
            _this.loading = false;
            _this.companies = [{ id: null, name: 'All' }].concat(data);
        }, function (error) {
            _this.loading = false;
        });
    };
    SuperuserSurveillanceComponent.prototype.loadEnums = function () {
        var _this = this;
        this.surveillanceService.getEnums().subscribe(function (data) {
            _this.loading = false;
            _this.severities = [{ id: null, name: 'All' }].concat(data.severities);
            _this.actionTypes = ['All'].concat(data.actionTypes);
            _this.messageTypes = ['All'].concat(data.messageTypes);
        }, function (error) {
            _this.loading = false;
        });
    };
    SuperuserSurveillanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.loadSurveillances();
        this.loadCompanies();
        this.loadEnums();
        this.searchForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.logs = (filterkey === '') ? _this.logsSource :
                _this.logsSource.filter(function (x) {
                    return (x.companyName && x.companyName.toString().toUpperCase().includes(filterkey)) ||
                        (x.companyDomain && x.companyDomain.toString().toUpperCase().includes(filterkey)) ||
                        (x.userName && x.userName.toString().toUpperCase().includes(filterkey)) ||
                        (x.userEmail && x.userEmail.toString().toUpperCase().includes(filterkey)) ||
                        (x.logMessage && x.logMessage.toString().toUpperCase().includes(filterkey)) ||
                        (x.moduleName && x.moduleName.toString().toUpperCase().includes(filterkey)) ||
                        (x.subModuleName && x.subModuleName.toString().toUpperCase().includes(filterkey)) ||
                        (x.messageType && x.messageType.toString().toUpperCase().includes(filterkey)) ||
                        (x.actionName && x.actionName.toString().toUpperCase().includes(filterkey)) ||
                        (x.severityName && x.severityName.toString().toUpperCase().includes(filterkey));
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
        this.filterForm.valueChanges.subscribe(function (data) {
            _this.loadSurveillances();
        });
    };
    SuperuserSurveillanceComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    SuperuserSurveillanceComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    SuperuserSurveillanceComponent.prototype.viewcounts = function () {
        this.entityCount = this.logs.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    SuperuserSurveillanceComponent.prototype.fabricInitialize = function () {
        var logDetailDialog = document.querySelector('.logdetaildialog');
        var dialog = logDetailDialog.querySelector('.ms-Dialog');
        this.dialogComponent = new fabric['Dialog'](dialog);
    };
    SuperuserSurveillanceComponent.prototype.openLogDetailDialog = function (log) {
        var _this = this;
        this.fabricInitialize();
        if (log && log.id) {
            this.dialogComponent.open();
            this.loading = true;
            this.surveillanceService.getSurveillance(log.id).subscribe(function (data) {
                log = data;
                _this.loading = false;
                _this.logDetail = data;
            }, function (error) {
                _this.loading = false;
            });
        }
        return false;
    };
    SuperuserSurveillanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-superuser-surveillance',
            template: __webpack_require__("./src/app/components/superusersurveillance/superusersurveillance.component.html"),
            styles: [__webpack_require__("./src/app/components/superusersurveillance/superusersurveillance.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_4__services_surveillance_service__["a" /* SurveillanceService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], SuperuserSurveillanceComponent);
    return SuperuserSurveillanceComponent;
}());



/***/ }),

/***/ "./src/app/components/trusted-link/trusted-link.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\n  <div class=\"ms-Grid-row\">\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\n    </div>\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\n        <app-header [company]=\"company\"></app-header>\n      </div>\n\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2\">\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\n      </div>\n      <div *ngIf=\"trustedLink.step === 1\">\n        <form *ngIf=\"trustedLink\" [formGroup]=\"otpSendForm\">\n          <div class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-2\">\n            {{\"Please enter your email address to continue.\" | translate}}\n          </div>\n          <div class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-2\">\n            <div class=\"ms-TextField ms-TextField--underlined\">\n              <label class=\"ms-Label\">{{\"Email Address\" | translate}}</label>\n              <input formControlName=\"email\" class=\"ms-TextField-field input-otp\" type=\"text\" value=\"\"\n                placeholder=\"johndoe@dotnet.com\">\n            </div>\n            <div class=\"ms-Grid-row pt-1 pb-2\">\n              <div class=\"ms-Grid-col ms-sm12\">\n                <button type=\"button\" class=\"ms-Button ms-Button--primary float-right\" [disabled]=\"otpSendForm.invalid\"\n                  (click)=\"sendotp()\">\n                  <span class=\"ms-Button-label\">{{'Continue' | translate}}</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div *ngIf=\"!(trustedLink || loading)\" class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-2\">\n          <p>{{'This is not a valid link.' | translate}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"trustedLink.step === 2\">\n        <div class=\"ms-Grid-row ms-textAlignCenter pt-4 pb-4 consent-title\">\n          {{\"An email has been sent to you with a one time password. Please enter the password below\" | translate}}\n        </div>\n        <form [formGroup]=\"otpMatchForm\">\n          <div class=\"ms-TextField ms-TextField--underlined\">\n            <label class=\"ms-Label\">{{\"Password\" | translate}}</label>\n            <input formControlName=\"otpPasscode\" class=\"ms-TextField-field input-otp\" type=\"password\" value=\"\"\n              placeholder=\"\">\n          </div>\n          <div *ngIf=\"message\" class=\"ms-Grid-row pt-1 pb-2\">\n            <div class=\"ms-Grid-col ms-sm12\">\n              <span class=\"ms-message\">{{message}}</span>\n            </div>\n          </div>\n          <div class=\"ms-Grid-row pt-1 pb-2\">\n            <div class=\"ms-Grid-col ms-sm9\">\n              <!-- <button *ngIf=\"optStep == 2\" type=\"button\" class=\"ms-Button ms-Button--default float-left\"\n                (click)=\"otpsendForm.valid && !isLinkExpired && sendotp()\">\n                <span class=\"ms-Button-label\">{{\"Resend OTP\" | translate}}</span>\n              </button> -->\n            </div>\n            <div class=\"ms-Grid-col ms-sm3\">\n              <button type=\"button\" [disabled]=\"otpMatchForm.invalid\" (click)=\"otpMatchForm.valid && matchotp()\"\n                class=\"ms-Button ms-Button--primary float-right\">\n                <span class=\"ms-Button-label\">{{\"Ok\" | translate}}</span>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <form *ngIf=\"trustedLink.step === 3\" [formGroup]=\"consentForm\">\n        <div class=\"ms-Grid-row pt-4 pb-2\">\n        </div>\n        <div class=\"ms-Grid-row border consent-description p-2\">\n          <pre class=\"pretagcss\">{{consent.consentText}}</pre>\n        </div>\n        <div class=\"ms-Grid-row pt-1\">\n          <div class=\"ms-CheckBox\">\n            <input style=\"margin-top: 10px;\" formControlName=\"consent1\" tabindex=\"-1\" type=\"checkbox\"\n              class=\"ms-CheckBox-input\">\n            <label role=\"checkbox\" class=\"ms-CheckBox-field\" tabindex=\"0\" aria-checked=\"false\" name=\"checkboxa\">\n              <span class=\"ms-Label\">{{\"I agree to this.\" | translate}}</span>\n            </label>\n          </div>\n        </div>\n        <hr>\n\n        <div class=\"ms-Grid-row float-right pt-2 pb-2\">\n          <button type=\"button\" class=\"ms-Button\">\n            <span class=\"ms-Button-label\">{{\"Cancel\" | translate}}</span>\n          </button>\n          <button type=\"button\" [disabled]=\"consentForm.invalid\" (click)=\"consentForm.valid && consentConfirm()\"\n            class=\"ms-Button ms-Button--primary\">\n            <span class=\"ms-Button-label\">{{\"Confirm\" | translate}}</span>\n          </button>\n        </div>\n      </form>\n      <div *ngIf=\"trustedLink.step === 4\">\n        <form [formGroup]=\"tuestedLinkDataForm\">\n          <div class=\"ms-TextField ms-TextField--multiline\">\n            <label class=\"ms-Label\">{{'Message' | translate}}</label>\n            <textarea formControlName=\"message\" class=\"ms-TextField-field\"></textarea>\n          </div>\n          <div class=\"ms-Grid-row p2-4 pb-2\">\n            <div class=\"ms-Grid-col ms-sm12 ms-md12\">\n              <div>{{'Files' | translate}}</div>\n              <div class=\"pt-1 pb-1 pl-4 pr-4 filerow\" *ngFor=\"let file of tuestedLinkFiles\">\n                <span *ngIf=\"file.fileName\">{{file.fileName}}</span>\n                <span *ngIf=\"!file.fileName\">{{file.file.name}}</span>\n                <span style=\"float: right;cursor: pointer;\" *ngIf=\"file.uploaded!='uploading'\">\n                  <img (click)=\"removefile(file.id)\" class=\"checkicon\" src=\"../../../assets/close.png\">\n                </span>\n                <span class=\"uploadedsign\" *ngIf=\"file.uploaded=='uploaded'\">\n                  <img class=\"checkicon\" src=\"../../../assets/icon_check.png\">\n                </span>\n                <span class=\"uploadedsign\" *ngIf=\"file.uploaded=='uploading'\">\n                  <img class=\"sharefileloadingimage\" src=\"../../../assets/loading.gif\">\n                </span>\n                <span class=\"failed\" *ngIf=\"file.uploaded!='uploaded' && file.uploaded!='uploading'\"\n                  [title]=\"file.uploaded\">failed</span>\n              </div>\n              <div class=\"ms-textAlignCenter pt-2\">\n                <file-drop (onFileDrop)=\"dropped($event)\" multiple=\"true\">\n                  <div class=\"ms-Grid-row pt-1\">\n                    <div class=\"pt-1\">\n                      <img class=\"actionlogo\" src=\"../../../assets/icon_upload_to_cloud.png\">\n                    </div>\n                    <div class=\"dragstyle pt-1\">{{\"Drag files here\" | translate}}</div>\n                    <div class=\"orstyle\">{{\"or\" | translate}}</div>\n                  </div>\n                  <div class=\"ms-Grid-row pt-1 pb-3\">\n                    <label class=\"ms-Button ms-Button--primary\">\n                      <input [disabled]=\"loading\" type=\"file\" multiple (change)=\"onFileChange($event)\"\n                        value=\"Browse files\" />\n                      <span class=\"ms-Button-label\">{{\"Browse files\" | translate}}</span>\n                    </label>\n                  </div>\n                </file-drop>\n              </div>\n            </div>\n          </div>\n          <div class=\"ms-Grid-row float-right pt-3 pb-2\">\n            <div class=\"ms-Grid-col ms-sm6\">{{tuestedLinkDataForm.value | json}}</div>\n            <div class=\"ms-Grid-col ms-sm6\">\n              <button type=\"button\" [disabled]=\"tuestedLinkDataForm.invalid || loading\"\n                (click)=\"tuestedLinkDataForm.valid && !loading && senddata()\" class=\"ms-Button ms-Button--primary\">\n                <span class=\"ms-Button-label\">{{\"Send data\" | translate}}</span>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/trusted-link/trusted-link.component.scss":
/***/ (function(module, exports) {

module.exports = ".actionlogo {\n  height: 25px;\n  width: 25px; }\n\ninput[type=\"file\"] {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/trusted-link/trusted-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustedLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_otp_service__ = __webpack_require__("./src/app/services/otp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TrustedLinkComponent = /** @class */ (function () {
    function TrustedLinkComponent(router, cd, route, location, formBuilder, storage, otpService, postdataService, adminService, commonService) {
        this.router = router;
        this.cd = cd;
        this.location = location;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.otpService = otpService;
        this.postdataService = postdataService;
        this.adminService = adminService;
        this.commonService = commonService;
        this.trustedLink = {};
        this.tlKey = route.snapshot.params['tlKey'];
        this.trustedLink.step = 0;
        this.consent = {};
        this.otpSendForm = this.formBuilder.group({
            email: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__services_validation_service__["a" /* ValidationService */].emailValidator]]
        });
        this.otpMatchForm = this.formBuilder.group({
            otpPasscode: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
        });
        this.consentForm = this.formBuilder.group({
            consent1: [false, this.commonService.truefalseValidator]
        });
        this.tuestedLinkDataForm = this.formBuilder.group({
            message: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            files: [[], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
        });
    }
    TrustedLinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.trustedLink = this.storage.get("trustedLink")
        this.loading = true;
        this.postdataService.getTrustedLink(this.tlKey).subscribe(function (data) {
            if (data && data.company) {
                _this.company = data.company;
                // if (this.trustedLink == null || this.trustedLink.id !== data.id) {
                _this.trustedLink = data;
                _this.trustedLink.step = 4;
                //   this.storage.set("trustedLink", this.trustedLink);
                // }
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
    };
    TrustedLinkComponent.prototype.sendotp = function () {
        var _this = this;
        if (this.otpSendForm.valid) {
            var postObj = { receiver: this.otpSendForm.value.email, resourceId: this.trustedLink.id };
            this.otpService.sendOtp(postObj).subscribe(function (data) {
                console.log(data);
                if (data && data.otpExpDate) {
                    _this.trustedLink.step = 2;
                    //this.storage.set("trustedLink", this.trustedLink);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    TrustedLinkComponent.prototype.matchotp = function () {
        var _this = this;
        if (this.otpMatchForm.valid) {
            var postObj = { receiver: this.otpSendForm.value.email, resourceId: this.trustedLink.id, otp: this.otpMatchForm.value.otpPasscode };
            this.otpService.matchOtp(postObj).subscribe(function (data) {
                if (data && data.otpMatch) {
                    _this.adminService
                        .getconsent(_this.company.id, __WEBPACK_IMPORTED_MODULE_7__config__["a" /* default */].consentType.values.RequestData)
                        .subscribe(function (consent) {
                        console.log(consent);
                        if (consent.consentText) {
                            _this.trustedLink.step = 3;
                            _this.consent = consent;
                            //this.storage.set("trustedLink", this.trustedLink);
                            setTimeout(_this.fabricInitialization, 1000);
                        }
                        else {
                            _this.trustedLink.step = 4;
                        }
                    });
                }
                else {
                    console.log(data.message);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    TrustedLinkComponent.prototype.consentConfirm = function () {
        if (this.consentForm.valid) {
            this.trustedLink.step = 4;
        }
    };
    TrustedLinkComponent.prototype.dropped = function (event) {
        var _this = this;
        if (event.files.length > 0 && !this.loading) {
            for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
                var droppedFile = _a[_i];
                if (droppedFile.fileEntry.isFile) {
                    var fileEntry = droppedFile.fileEntry;
                    fileEntry.file(function (file) {
                        _this.uploadFile(file);
                        _this.cd.detectChanges();
                    });
                }
                else {
                    var fileEntry = droppedFile.fileEntry;
                    console.log(droppedFile.relativePath, fileEntry);
                }
            }
        }
    };
    TrustedLinkComponent.prototype.onFileChange = function (event) {
        var filecount = event.target.files && event.target.files.length;
        if (filecount > 0 && !this.loading) {
            for (var i = 0; i < filecount; i++) {
                this.uploadFile(event.target.files[i]);
            }
        }
    };
    TrustedLinkComponent.prototype.uploadFile = function (file) {
        // this.loading = true;
        // let selecteddata = this.requestDatas.controls.find(x => x.value.id == id);
        // let uploadFile = { id: selecteddata.value.fieldValue.length + 1, file: file, uploaded: 'uploading' };
        // selecteddata.value.fieldValue.push(uploadFile);
        // selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
        // let uploaddata = { postDataId: this.postdataId, postDataFieldId: id, senderEmail: this.sender.email, file: file, receiverId: this.receiver.id };
        // this.postdataService.uploadfile(uploaddata).subscribe(data => {
        //   if (data) {
        //     this.loading = false;
        //     selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).uploaded = 'uploaded';
        //     selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).id = data.fileId;
        //     selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).fileName = data.fileName;
        //     selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
        //     this.cd.detectChanges();
        //   }
        // }, error => {
        //   this.loading = false;
        //   selecteddata.value.fieldValue.find(x => x.id === uploadFile.id).uploaded = (error.error && error.error.text) || 'failed';
        //   selecteddata.patchValue({ fieldValue: selecteddata.value.fieldValue });
        //   this.cd.detectChanges();
        // });
    };
    TrustedLinkComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialization();
    };
    TrustedLinkComponent.prototype.fabricInitialization = function () {
        var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
        for (var i = 0; i < CheckBoxElements.length; i++) {
            new fabric["CheckBox"](CheckBoxElements[i]);
        }
        var ButtonElements = document.querySelectorAll(".ms-Button");
        for (var i = 0; i < ButtonElements.length; i++) {
            new fabric["Button"](ButtonElements[i]);
        }
    };
    TrustedLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-trusted-link',
            template: __webpack_require__("./src/app/components/trusted-link/trusted-link.component.html"),
            styles: [__webpack_require__("./src/app/components/trusted-link/trusted-link.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__services__["k" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__services_otp_service__["a" /* OtpService */], __WEBPACK_IMPORTED_MODULE_0__services__["i" /* PostdataService */], __WEBPACK_IMPORTED_MODULE_0__services__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_0__services__["e" /* CommonService */]])
    ], TrustedLinkComponent);
    return TrustedLinkComponent;
}());



/***/ }),

/***/ "./src/app/components/userfiles/userfiles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n\r\n    <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-10 routeheader\">\r\n        <nav aria-label=\"breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a\r\n                routerLink=\"/admin/{{companyId}}/root/{{status}}\">{{\"Folders\" | translate}}</a></li>\r\n            <li class=\"breadcrumb-item\"><a routerLink=\"/admin/{{companyId}}/folders\">{{\"User Folders\"}}</a></li>\r\n            <li *ngIf=\"messageSender\" class=\"breadcrumb-item\"><a\r\n                routerLink=\"/admin/{{companyId}}/userfolder/{{folderUser}}\">{{messageSender}}</a></li>\r\n            <li *ngIf=\"messageFileFolder\" class=\"breadcrumb-item active\" aria-current=\"page\">{{messageFileFolder}}</li>\r\n          </ol>\r\n        </nav>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row pt-2 pb-4\">\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\"\r\n          placeholder=\"{{'Search' | translate}}...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-9\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-4\">\r\n        {{\"User folder\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Added\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Availability\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Size\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"userfiles\">\r\n    <div *ngFor=\"let rowdata of userfiles | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <span>\r\n                <img class=\"folder\" src=\"../../../assets/{{rowdata.type}}\"> {{rowdata.name}}\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span *ngIf=\"rowdata.createdDate\">{{rowdata.createdDate | date}}</span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span *ngIf=\"rowdata.expDate<6 && rowdata.expDate>=0\" style=\"color:#ed1c24;\">{{rowdata.expDate}}\r\n                {{\"days\" | translate}}</span>\r\n              <span *ngIf=\"rowdata.expDate<11 && rowdata.expDate>5\" style=\"color:#f7931e;\">{{rowdata.expDate}}\r\n                {{\"days\" | translate}}</span>\r\n              <span *ngIf=\"rowdata.expDate>10\" style=\"color:#39b54a;\">{{rowdata.expDate}} {{\"days\" | translate}}</span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              {{(rowdata.size/1000000) | number : '1.2-4'}} MB\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span>\r\n                <a target=\"_blank\" [href]=\"rowdata.downloadUrl\" title=\"\"> <img class=\"folder\"\r\n                    src=\"../../../assets/icon_download.png\"></a>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-12 text-center\">\r\n          {{(user && user.id != folderUser) ? \"Contents of this folder are not visible\" : \"No Data Found\" | translate}}\r\n        </div> -->\r\n        <div *ngIf=\"user && user.id != folderUser\" class=\"col-12 text-center\">\r\n          {{\"Contents of this folder are not visible\" | translate}}\r\n        </div>\r\n        <div *ngIf=\"!(user && user.id != folderUser)\" class=\"col-12 text-center\">\r\n          {{\"No Data Found\" | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">\r\n          {{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}} {{entityend}} {{\"of\" | translate}}\r\n          {{entityCount}} {{\"entries\" | translate}}\r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\" previousLabel=\"{{'Previous' | translate}}\"\r\n          nextLabel=\"{{'Next' | translate}}\" (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/userfiles/userfiles.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/userfiles/userfiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserfilesComponent = /** @class */ (function () {
    function UserfilesComponent(adminUserService, commonService, router, location, route, fb, storage) {
        this.adminUserService = adminUserService;
        this.commonService = commonService;
        this.router = router;
        this.location = location;
        this.fb = fb;
        this.storage = storage;
        this.folderId = '';
        this.folderUser = '';
        this.userfiles = [];
        this.userfilesSource = [];
        this.loading = false;
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.folderId = route.snapshot.params['id'];
        this.messageFileFolder = route.snapshot.params['foldername'];
        this.companyId = this.storage.get('companyId');
        this.folderUser = this.storage.get('folderUser');
        this.status = this.storage.get('userstatus');
        this.user = this.storage.get('user');
        this.filterForm = this.fb.group({
            searchText: ''
        });
        this.loading = true;
        this.folderUser &&
            this.loaduser(this.folderUser);
    }
    UserfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.userfiles = (filterkey == "") ? _this.userfilesSource :
                _this.userfilesSource.filter(function (x) {
                    return x.name.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    UserfilesComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    UserfilesComponent.prototype.loaduser = function (userid) {
        var _this = this;
        this.adminUserService.getUserfolder(userid).subscribe(function (data) {
            _this.loading = false;
            var files = [];
            files = data.filter(function (x) { return x.id === _this.folderId; });
            files.forEach(function (file) {
                _this.modifieddate = file && file.sentDate && file.sentDate;
                if (file && file.postDataFiles) {
                    _this.messageSender = file.senderName;
                    if (_this.user.id == userid) {
                        var userfiles = file.postDataFiles.filter(function (f) { return f.fileFolder == _this.messageFileFolder; });
                        userfiles.forEach(function (element) {
                            element.expDate = _this.commonService.dateDiff(element.expDate) && _this.commonService.dateDiff(element.expDate);
                            element.downloadUrl = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].api.base + '/api/file/downloadblob' + '/' + element.fileId;
                            element.type = _this.commonService.getFileTypeIcon(element.name);
                        });
                        if (userfiles.length > 0)
                            _this.userfilesSource = _this.userfiles = userfiles;
                    }
                }
                _this.viewcounts();
            });
        }, function (error) {
            _this.loading = false;
        });
    };
    UserfilesComponent.prototype.viewcounts = function () {
        this.entityCount = this.userfiles.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    UserfilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userfiles',
            template: __webpack_require__("./src/app/components/userfiles/userfiles.component.html"),
            styles: [__webpack_require__("./src/app/components/userfiles/userfiles.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], UserfilesComponent);
    return UserfilesComponent;
}());



/***/ }),

/***/ "./src/app/components/userfolder/userfolder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div [formGroup]=\"filterForm\">\r\n\r\n    <div class=\"row no-gutters pt-4 pb-3\">\r\n      <div class=\"col-md-10 routeheader\">\r\n        <nav aria-label=\"breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a\r\n                routerLink=\"/admin/{{companyId}}/root/{{status}}\">{{\"Folders\" | translate}}</a></li>\r\n            <li class=\"breadcrumb-item\"> <a routerLink=\"/admin/{{companyId}}/folders\">{{\"User Folders\" | translate}}</a>\r\n            </li>\r\n            <li *ngIf=\"message\" class=\"breadcrumb-item active\" aria-current=\"page\">{{message}}</li>\r\n          </ol>\r\n        </nav>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row pt-2 pb-4\">\r\n      <div class=\"col-md-3\">\r\n        <input formControlName=\"searchText\" type=\"text\" class=\"form-control form-control-sm\"\r\n          placeholder=\"{{'Search' | translate}}...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-9\" style=\"height: 20px;\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--data list-->\r\n  <div class=\"data-list-header border border-top-0 border-left-0 border-right-0\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-sm-6\">\r\n        {{\"User folder\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Modified date\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Availability\" | translate}}\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        {{\"Files available\" | translate}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"userfolders\">\r\n    <div *ngFor=\"let rowdata of userfolders | paginate: { itemsPerPage: displayLength, currentPage: currentPage }\">\r\n      <div class=\"data-list-row border border-light border-top-0 border-left-0 border-right-0\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <span class=\"namelink\" style=\"cursor: pointer;\"\r\n                routerLink=\"/admin/{{companyId}}/file/{{rowdata.id}}/{{rowdata.fileFolder}}\">\r\n                <img class=\"folder\" src=\"../../../assets/icon_user_folder.png\"> {{rowdata.fileFolder}}\r\n              </span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              {{rowdata.sentDate | date}}\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <span *ngIf=\"rowdata.expDate<6 && rowdata.expDate>=0\" style=\"color:#ed1c24;\">{{rowdata.expDate}}\r\n                {{\"days\" | translate}}</span>\r\n              <span *ngIf=\"rowdata.expDate<11 && rowdata.expDate>5\" style=\"color:#f7931e;\">{{rowdata.expDate}}\r\n                {{\"days\" | translate}}</span>\r\n              <span *ngIf=\"rowdata.expDate>10\" style=\"color:#39b54a;\">{{rowdata.expDate}} {{\"days\" | translate}}</span>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              {{rowdata.noOfFiles}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"entityCount==0\" class=\"data-list-row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">{{\"No Data Found\" | translate}}</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"data-list-pagination border border-bottom-0 border-left-0 border-right-0 row-striped\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p class=\"second-element\" *ngIf=\"entityCount>0\">\r\n          {{\"Showing\" | translate}} {{entitystart}} {{\"to\" | translate}} {{entityend}} {{\"of\" | translate}}\r\n          {{entityCount}} {{\"entries\" | translate}}</p>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <pagination-controls style=\"float:right;\" previousLabel=\"{{'Previous' | translate}}\"\r\n          nextLabel=\"{{'Next' | translate}}\" (pageChange)=\"pageChanged($event)\" #api></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/userfolder/userfolder.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/userfolder/userfolder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserfolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserfolderComponent = /** @class */ (function () {
    function UserfolderComponent(adminUserService, commonService, location, router, route, fb, storage) {
        this.adminUserService = adminUserService;
        this.commonService = commonService;
        this.location = location;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.userId = '';
        this.companyId = '';
        this.userfolders = [];
        this.userfolderSource = [];
        this.loading = false;
        this.displayLength = 10;
        this.currentPage = 1;
        this.entityCount = 0;
        this.entitystart = 1;
        this.userId = route.snapshot.params['id'];
        this.storage.set('folderUser', this.userId);
        this.companyId = this.storage.get('companyId');
        this.status = this.storage.get('userstatus');
        this.filterForm = this.fb.group({
            searchText: ''
        });
        this.loading = true;
        this.loaduser(this.userId);
    }
    UserfolderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.controls.searchText.valueChanges.subscribe(function (data) {
            var filterkey = data.toString().trim().toUpperCase();
            _this.userfolders = (filterkey == "") ? _this.userfolderSource :
                _this.userfolderSource.filter(function (x) {
                    return x.fileFolder.toString().toUpperCase().includes(filterkey);
                });
            _this.currentPage = 1;
            _this.entitystart = 1;
            _this.viewcounts();
        });
    };
    UserfolderComponent.prototype.pageChanged = function (pageNumber) {
        this.currentPage = pageNumber;
        this.entitystart = this.commonService.getStart(this.currentPage);
        this.entityend = this.commonService.getEnd(this.entitystart, this.entityCount);
    };
    UserfolderComponent.prototype.loaduser = function (userid) {
        var _this = this;
        this.adminUserService.getUserfolder(userid).subscribe(function (data) {
            _this.loading = false;
            data.forEach(function (element) {
                var days = element.postDataFiles[0] && _this.commonService.dateDiff(element.postDataFiles[0].expDate);
                // if (days && (days >= 0)){
                var groupedCollection = element.postDataFiles.reduce(function (previous, current) {
                    if (!previous[current['fileFolder']]) {
                        previous[current['fileFolder']] = [current];
                    }
                    else {
                        previous[current['fileFolder']].push(current);
                    }
                    return previous;
                }, {});
                var pFiles = Object.keys(groupedCollection).map(function (key) { return ({ key: key, files: groupedCollection[key] }); });
                pFiles.forEach(function (f) {
                    _this.userfolders.push({
                        senderName: element.senderName,
                        noOfFiles: f.files.length,
                        sentDate: element.sentDate,
                        id: element.id,
                        fileFolder: f.key,
                        expDate: days
                    });
                });
                //}
            });
            _this.userfolderSource = _this.userfolders;
            _this.message = _this.userfolders[0] && _this.userfolders[0].senderName;
            _this.viewcounts();
        }, function (error) {
            _this.loading = false;
        });
    };
    UserfolderComponent.prototype.viewcounts = function () {
        this.entityCount = this.userfolders.length;
        this.entityend = this.commonService.getEndForFirst(this.entityCount);
    };
    UserfolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userfolder',
            template: __webpack_require__("./src/app/components/userfolder/userfolder.component.html"),
            styles: [__webpack_require__("./src/app/components/userfolder/userfolder.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AdminUserService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */]])
    ], UserfolderComponent);
    return UserfolderComponent;
}());



/***/ }),

/***/ "./src/app/components/viewfile/viewfile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid\">\r\n  <div class=\"ms-Grid-row\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-5 companyname\">\r\n        <app-header></app-header>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2\">\r\n        <img *ngIf=\"loading\" class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row ms-textAlignCenter pt-2 pb-4 consent-title\">\r\n        <span *ngIf=\"days>=0\">{{\"These files will be available for\" | translate}} {{days}}\r\n          {{\"more days.\" | translate}}</span>\r\n        <span *ngIf=\"days<1\">{{\"These files were deleted.\" | translate}}</span>\r\n      </div>\r\n\r\n      <div *ngFor=\"let item of files\" class=\"ms-Grid-row pt-4\">\r\n        <span>{{item.name}}</span>\r\n        <span class=\"float-right\">\r\n          <button type=\"button\" class=\"ms-Button ms-Button--small\" (click)=\"OpenViewDialog(item)\">\r\n            <span class=\"ms-Button-label\">{{\"view\" | translate}}</span>\r\n          </button>\r\n          <!-- <a style=\"text-decoration: none;cursor: pointer;\" target=\"_blank\" href=\"{{item.fileUrl}}\" title=\"\">\r\n            <span style=\"background-color: #0078d7;color: white;height: 32px;min-width: 80px;padding: 1px 10px 2px;\">View</span>\r\n          </a> -->\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"ms-Grid-row pt-4 pb-4\">\r\n        <a (click)=\"downloadpermission()\" class=\"ms-Link permissionlink\" title=\"Click for more info\">\r\n          {{\"Request permission to download files\" | translate}}\r\n        </a>\r\n      </div>\r\n      <div class=\"ms-Grid-row pt-4 pb-4\">\r\n        <app-safety-signature></app-safety-signature>\r\n      </div>\r\n    </div>\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md4\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"viewfileDialog\">\r\n  <div class=\"ms-Dialog ms-Dialog--blocking\" style=\"max-width:100% !important;padding:5px;\">\r\n    <div class=\"ms-Dialog-title\" style=\"margin-bottom:5px;font-size:1em;\">\r\n      <span>{{\"View File\" | translate}}</span>\r\n      <i style=\"float:right; cursor:pointer;margin:2px;\" (click)=\"CloseViewDialog()\"\r\n        class=\"ms-Icon ms-Icon--Cancel\"></i>\r\n      <i style=\"float:right; cursor:pointer;margin:2px;\" (click)=\"toggleDialogScreen()\"\r\n        class=\"ms-Icon ms-Icon--FullScreen\"></i>\r\n    </div>\r\n    <img class=\"docviewer-progress loadingimage\" src=\"../../../assets/loading.gif\">\r\n    <iframe [src]=\"viewFileUrl\" (load)=\"iframeLoaded()\" class=\"pdfviewer screen-normal\" [class]=\"viewerClass\"></iframe>\r\n    <!-- <img [src]=\"viewFileUrl\" class=\"imgviewer\" width=\"900px\" height=\"550px\"/>-->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/viewfile/viewfile.component.scss":
/***/ (function(module, exports) {

module.exports = ".permissionlink {\n  color: #0078d7 !important; }\n\n.screen-full {\n  width: calc(100vw - 20px);\n  height: calc(100vh - 35px); }\n\n.screen-normal {\n  width: calc(80vw - 20px);\n  height: calc(80vh - 35px); }\n"

/***/ }),

/***/ "./src/app/components/viewfile/viewfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewfileComponent = /** @class */ (function () {
    function ViewfileComponent(router, sharefileservice, commonService, cd, storage, sanitizer, el) {
        this.router = router;
        this.sharefileservice = sharefileservice;
        this.commonService = commonService;
        this.cd = cd;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.el = el;
        this.files = [];
        this.loading = false;
        this.viewerClass = "pdfviewer screen-normal";
        this.timerId = null;
    }
    ViewfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var otp = this.storage.get('otp');
        otp &&
            this.sharefileservice.getfiles(otp).subscribe(function (data) {
                data.files.forEach(function (file) {
                    var fname = file.name;
                    var fext = fname.split('.').pop();
                    var fileUrl = file.fileUrl;
                    // convertion
                    // if (fext == 'docx' || fext == 'xlsx'){
                    //   let path = fileUrl.replace('//','');
                    //   var localpath = path.substring(path.indexOf('/') + 1, path.lastIndexOf('/'));
                    //   let filepath = fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length);
                    //   let odtfilename = filepath.split('.')[0] + '.odt';
                    //   let odsfilename = filepath.split('.')[0] + '.ods';
                    //   fext == 'docx' && (file.fileUrl = config.api.base + '/assets/PreviewDoc/#/files/' + localpath + '/' + odtfilename);
                    //   (fext == 'xlsx') && (file.fileUrl = config.api.base + '/assets/PreviewDoc/#/files/' + localpath + '/' + odsfilename);
                    // } else {
                    //   file.fileUrl = config.api.base + '/assets/PreviewDoc/#' + fileUrl;
                    // }
                    // file.fileUrl = config.api.base + '/assets/PreviewDoc/#' + fileUrl;
                    var vfileurl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].api.base + '/api/file/downloadblob' + '/' + file.fileId;
                    file.fileUrl = '/assets/PreviewDoc/#' + vfileurl;
                    // file.fileUrl = vfileurl;
                });
                _this.loading = false;
                if (data) {
                    _this.days = data.files[0].expDate && _this.commonService.dateDiff(data.files[0].expDate);
                    if (_this.days >= 0) {
                        _this.files = data.files;
                    }
                }
            }, function (error) {
                _this.loading = false;
            });
    };
    ViewfileComponent.prototype.ngAfterViewInit = function () {
        this.fabricInitialize();
    };
    ViewfileComponent.prototype.OpenViewDialog = function (obj) {
        var _this = this;
        var iframe = this.el.nativeElement.querySelector('.pdfviewer');
        var progress_container = this.el.nativeElement.querySelector('.docviewer-progress');
        iframe.hidden = true;
        progress_container.hidden = false;
        this.viewDialogComponent.open();
        var fileurl = this.commonService.getFileViewUrl(obj, "/api/file/viewfile/");
        iframe.src = '';
        setTimeout(function () {
            _this.viewFileUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(fileurl);
        }, 100);
        this.timerId = setInterval(function () {
            iframe.src = '';
            _this.viewFileUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(fileurl);
        }, 2000);
    };
    ViewfileComponent.prototype.iframeLoaded = function () {
        var iframe = this.el.nativeElement.querySelector('.pdfviewer');
        if (iframe.src.indexOf("https://docs.google.com/gview") != -1 || iframe.src.indexOf('/assets/PreviewDoc/#') != -1) {
            var progress_container = this.el.nativeElement.querySelector('.docviewer-progress');
            iframe.hidden = false;
            progress_container.hidden = true;
            if (this.timerId)
                clearInterval(this.timerId);
        }
    };
    ViewfileComponent.prototype.CloseViewDialog = function () {
        this.viewDialogComponent.close();
        if (this.timerId)
            clearInterval(this.timerId);
    };
    ViewfileComponent.prototype.toggleDialogScreen = function () {
        if (this.viewerClass.indexOf("screen-normal") != -1) {
            this.viewerClass = "pdfviewer screen-full";
        }
        else {
            this.viewerClass = "pdfviewer screen-normal";
        }
    };
    ViewfileComponent.prototype.fabricInitialize = function () {
        var viewdialog = document.querySelector(".viewfileDialog");
        var dialogView = viewdialog.querySelector(".ms-Dialog");
        this.viewDialogComponent = new fabric['Dialog'](dialogView);
    };
    ViewfileComponent.prototype.downloadpermission = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].routes.downloadpermission]);
    };
    ViewfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewfile',
            template: __webpack_require__("./src/app/components/viewfile/viewfile.component.html"),
            styles: [__webpack_require__("./src/app/components/viewfile/viewfile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services__["j" /* SharefileService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ViewfileComponent);
    return ViewfileComponent;
}());



/***/ }),

/***/ "./src/app/components/welcomepage/welcomepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-Grid-row pt2\">\r\n  <div *ngIf=\"loading\" class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n    <img class=\"loadingimage\" src=\"../../../assets/loading.gif\">\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!companyInactive\">\r\n  <div class=\"ms-Grid-row pt4\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-md12 ms-textAlignCenter\">\r\n      <span>{{\"Welcome to Connectid Mail. Connectid Mail helps you send and collect data quickly, simply, and securely with the proper consent. Click continue to get started.\" | translate}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!loading\" class=\"ms-Grid-row ms-textAlignCenter pt2\">\r\n    <a (click)=\"continue()\" class=\"ms-Button\">\r\n      <span class=\"ms-Button-label\">{{\"Continue\" | translate}}</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"companyInactive\">\r\n  <div class=\"ms-Grid-row pt4\">\r\n    <div class=\"ms-Grid-col ms-sm12 ms-textAlignCenter\">\r\n      <p>\r\n        {{\"We are sorry, but your account has been deactivated. Your account is part of a subscription that has expired.\" | translate}}\r\n      </p>\r\n      <p>{{\"Please contact your administrator for further information.\" | translate}}</p>\r\n      <p>{{\"For information on how to subscribe, contact\" | translate}}&nbsp;<a\r\n          href=\"mailto:compliant@safeonline.dk\">compliant@safeonline.dk</a></p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/welcomepage/welcomepage.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/welcomepage/welcomepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WelcomepageComponent = /** @class */ (function () {
    function WelcomepageComponent(router, commonService, userService, authenticationService, storage, logger, translate) {
        this.router = router;
        this.commonService = commonService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.logger = logger;
        this.translate = translate;
        this.authlink = '';
        this.stopCondition = true;
        this.loading = false;
        this.companyInactive = false;
        this.intervalIndex = 1;
    }
    WelcomepageComponent.prototype.ngOnInit = function () {
        this.loading = true;
        var me = this;
        var code = me.storage.get("code");
        var user = this.storage.get("user");
        if (!code) {
            this.authorize();
        }
        else if (!user) {
            this.setUserInStorage();
        }
        else {
            this.redirectToUserPage(user);
        }
    };
    WelcomepageComponent.prototype.ngOnDestroy = function () {
        this.subscription && this.subscription.unsubscribe();
        this.authsubscription && this.authsubscription.unsubscribe();
    };
    WelcomepageComponent.prototype.readCode = function () {
        var _this = this;
        var self = this;
        this.stopCondition = false;
        // this.logger.log("starting reading auth code interval. welcomepageCpmt-line-105");
        this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].interval(2000)
            .takeWhile(function () { return !_this.stopCondition; })
            .subscribe(function (i) {
            // this.logger.log("parsing subscribtion result. Index: " + self.intervalIndex + ". welcomepageCpmt-line-109");
            var code = _this.storage.get("code");
            if (code) {
                // this.windowview.close();
                _this.stopCondition = true;
                _this.authenticationService
                    .getauthwithuserresponse(code)
                    .subscribe(function (data) {
                    _this.storage.set("coderesponse", data);
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].routes.registration]);
                });
            }
            self.intervalIndex++;
        });
    };
    WelcomepageComponent.prototype.checkcode = function (code) {
        var _this = this;
        if (code) {
            this.stopCondition = true;
            this.authenticationService
                .getauthwithuserresponse(code)
                .subscribe(function (data) {
                _this.storage.set("user", data.user);
                _this.redirectToUserPage(data.user);
            });
        }
    };
    WelcomepageComponent.prototype.setUserInStorage = function () {
        var _this = this;
        var me = this;
        this.stopCondition = false;
        this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].interval(2000)
            .takeWhile(function () { return !_this.stopCondition; })
            .subscribe(function (i) {
            var code = me.storage.get("code");
            if (code) {
                _this.stopCondition = true;
                _this.authenticationService
                    .getauthwithuserresponse(code)
                    .subscribe(function (data) {
                    if (data.issuccess) {
                        _this.storage.set("user", data.user);
                        if (data.user.language) {
                            _this.translate.use(data.user.language);
                        }
                        _this.redirectToUserPage(data.user);
                    }
                    else {
                        me.storage.remove("code");
                        _this.authorize();
                    }
                });
            }
        });
    };
    WelcomepageComponent.prototype.redirectToUserPage = function (user) {
        if (user.company.isActive === false) {
            this.companyInactive = true;
            this.loading = false;
        }
        else if (user.isActive && user.company && user.company.isActive) {
            var returnUrl = this.storage.get('returnUrl');
            if (returnUrl) {
                this.storage.remove('returnUrl');
                this.router.navigate([returnUrl]);
            }
            else if (user.isSuperAdmin) {
                this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].routes.superuserhome]);
            }
            else if (user.type === true) {
                this.router.navigate([
                    __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].routes.admin + "/" + user.company.id
                ]);
            }
            else if (user.type === false) {
                this.router.navigate([
                    __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].routes.admin + "/" + user.company.id + "/root/" + user.id
                ]);
            }
        }
        else {
            this.loading = false;
        }
    };
    WelcomepageComponent.prototype.authorize = function () {
        var _this = this;
        if (this.authlink === '') {
            this.commonService.getAdAppClientId().subscribe(function (data) {
                _this.authlink = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].api.AuthLink(data);
                window.location.href = _this.authlink;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            window.location.href = this.authlink;
        }
    };
    WelcomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-welcomepage",
            template: __webpack_require__("./src/app/components/welcomepage/welcomepage.component.html"),
            styles: [__webpack_require__("./src/app/components/welcomepage/welcomepage.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["d" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["k" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__services__["g" /* LoggerService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], WelcomepageComponent);
    return WelcomepageComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");

var config = {
    api: {
        base: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiBase,
        AuthLink: function (clientId) { return 'https://login.microsoftonline.com/common/oauth2/authorize?client_id=' + clientId + '&prompt=login&response_type=code&state=admin&redirect_uri=' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].uiBase + '/authresponse.html&response_mode=query'; },
        tokenLabel: 'Authorization',
        tokenValue: function (token) { return 'Bearer ' + token; },
        contentType: 'application/json; charset=UTF-8'
    },
    ui: {
        base: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].uiBase,
        logoSize: 500000
    },
    debounce: {
        interval: 300,
        searchInterval: 1000,
    },
    routes: {
        home: 'home',
        welcome: 'home/welcome',
        registration: 'home/registration',
        action: 'home/actions',
        confirm: 'home/confirm',
        inactiveuser: 'home/inactiveuser',
        requestconsent: '/requestconsent',
        requestsubmit: 'requestsubmit',
        viewfile: '/viewfile',
        otpsend: '/otpsend',
        downloadpermission: '/downloadpermission',
        permissiongranted: '/permissiongranted',
        downloadfile: '/downloadfile',
        showpostdata: '/showpostdata',
        superuserhome: 'superadmin/home',
        admin: 'admin',
        adminuser: 'home',
        userFolder: 'userfolder'
    },
    storage: {
        user: 'user',
        token: 'token',
        refreshToken: '',
    },
    apiendpoint: {
        adAppClientId: 'values/clientid',
        AppConfig: 'values/Config',
        uploadfile: 'file/upload',
        updatereceiver: 'file/receivers',
        getsharedatalink: 'file/link',
        receivers: 'file/receivers',
        sendotp: 'file/sendotp',
        getfiles: 'file/files',
        senddownloadrequest: 'file/senddownloadrequest',
        acceptdownloadrequest: 'file/acceptdownloadrequest',
        getacceptrequestfiles: 'file/acceptrequestfiles',
        downloadfile: 'file/downloadblob',
        rejectrequestdownload: 'file/rejectrequestdownload',
        viewbloburl: 'file/viewbloburl',
        deletetemp: 'file/deletetemp',
        deletefile: 'file',
        getpackages: 'package',
        consent: 'consent',
        config: 'config',
        adduser: 'user',
        addcompany: 'company',
        getuserbymail: 'user/email',
        getuserbyId: 'user/Id',
        postdata: 'postdata',
        postdatalink: 'postdata/link',
        trustedLink: 'postdata/trustedlink',
        updatepostdatareceiver: 'postdata/receivers',
        deletepostdata: 'postdata/postdatafield',
        postdatareceivers: 'postdata/receivers',
        postdatasendotp: 'postdata/sendotp',
        getpostdatafiled: 'postdata/fields',
        postdatafileupload: 'postdata/upload',
        postdataupdatefiled: 'postdata/senddata',
        postdatafiledelete: 'postdata/file',
        logsharedata: 'log/sharedata',
        logpostdata: 'log/postdata',
        auth: 'Authorize',
        authcode: 'Authorize/Code',
        folders: 'postdata/company',
        userfolder: 'postdata/user',
        companyLogo: 'logo',
        billing: 'report/billings',
        superadmin: 'report/company',
        showpostdatamails: 'postdata/senderemail',
        showpostdataotp: 'postdata/senderotp',
        sharedfolderroot: 'sharedfolder/folders',
        sharedfolderuserroot: 'sharedfolder/userfolderhome',
        sharedfolder: 'sharedfolder/companyfolders',
        usersharedfolder: 'sharedfolder/userfolders',
        sharedfolderfile: 'sharedfolder/files',
        shareduser: 'sharedfolder/users',
        userbycomapny: 'user/company',
        removeusersharedfolder: 'sharedfolder/removesharedfolder',
        addusersharedfolder: 'sharedfolder/assignusersfolder',
        addnewfolder: 'sharedfolder/adminfolder',
        savedata: 'postdata/savedata',
        isSaved: 'postdata/issavedata',
        postbloburl: 'postdata/viewbloburl',
        deletetemppost: 'postdata/deletetemp',
        editcompanyprice: 'company/companyprice',
        sendMailOnDemand: 'company/senddemanddata',
        updateCompanyContact: 'user',
        createLog: 'log',
        surveillance: 'surveillance',
        sendOtp: 'otp/send',
        matchOtp: 'otp/match'
    },
    tokeninfo: {
        id: '',
        token: ''
    },
    consentType: {
        values: {
            RequestData: 'Request Data',
            ShareData: 'Share Data',
        },
        labels: {
            RequestData: 'Request data',
            ShareData: 'Share data',
        },
        list: [
            //'CUSTOM'
            'RequestData', 'ShareData',
        ],
    },
    country_list: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas",
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands",
        "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica",
        "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
        "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
        "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia",
        "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania",
        "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia",
        "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
        "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
        "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan",
        "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay",
        "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
    country_code: {
        "countries": [
            { "code": "+1", "name": "USA and Canada" },
            { "code": "+1-441", "name": "Bermuda" },
            { "code": "+20", "name": "Egypt" },
            { "code": "+210", "name": "Morocco" },
            { "code": "+212", "name": "Morocco" },
            { "code": "+213", "name": "Algeria" },
            { "code": "+215", "name": "Algeria" },
            { "code": "+216", "name": "Tunisia" },
            { "code": "+217", "name": "Tunisia" },
            { "code": "+218", "name": "Libya" },
            { "code": "+219", "name": "Libya" },
            { "code": "+220", "name": "The Gambia" },
            { "code": "+221", "name": "Senegal" },
            { "code": "+222", "name": "Mauritania" },
            { "code": "+223", "name": "Mali" },
            { "code": "+224", "name": "Guinea" },
            { "code": "+225", "name": "Ivory Coast (also called La Cote d'Ivoire)" },
            { "code": "+226", "name": "Burkina Faso (former Upper Volta)" },
            { "code": "+227", "name": "Niger" },
            { "code": "+228", "name": "Togo (Togolese Republic)" },
            { "code": "+229", "name": "Benin" },
            { "code": "+230", "name": "Mauritius" },
            { "code": "+231", "name": "Liberia" },
            { "code": "+232", "name": "Sierra Leone" },
            { "code": "+233", "name": "Ghana" },
            { "code": "+234", "name": "Nigeria" },
            { "code": "+235", "name": "Chad" },
            { "code": "+236", "name": "Central African Republic" },
            { "code": "+237", "name": "Cameroon" },
            { "code": "+238", "name": "Cape Verde" },
            { "code": "+239", "name": "Sao Tome and Principe" },
            { "code": "+240", "name": "Equatorial Guinea" },
            { "code": "+241", "name": "Gabon" },
            { "code": "+242", "name": "Congo" },
            { "code": "+243", "name": "Zaire" },
            { "code": "+244", "name": "Angola" },
            { "code": "+245", "name": "Guinea-Bissau" },
            { "code": "+246", "name": "Diego Garcia" },
            { "code": "+247", "name": "Ascension Island" },
            { "code": "+248", "name": "Seychelles" },
            { "code": "+249", "name": "Sudan" },
            { "code": "+250", "name": "Rwanda (Rwandese Republic)" },
            { "code": "+251", "name": "Ethiopia" },
            { "code": "+252", "name": "Somalia" },
            { "code": "+253", "name": "Djibouti" },
            { "code": "+254", "name": "Kenya" },
            { "code": "+255", "name": "Tanzania (includes Zanzibar)" },
            { "code": "+256", "name": "Uganda" },
            { "code": "+257", "name": "Burundi" },
            { "code": "+258", "name": "Mozambique" },
            { "code": "+259", "name": "Zanzibar" },
            { "code": "+260", "name": "Zambia" },
            { "code": "+261", "name": "Madagascar" },
            { "code": "+262", "name": "Reunion (France)" },
            { "code": "+263", "name": "Zimbabwe" },
            { "code": "+264", "name": "Namibia (former South-West Africa)" },
            { "code": "+265", "name": "Malawi" },
            { "code": "+266", "name": "Lesotho" },
            { "code": "+267", "name": "Botswana" },
            { "code": "+268", "name": "Swaziland" },
            { "code": "+269", "name": "Comoros and Mayotte" },
            { "code": "+27", "name": "South Africa" },
            { "code": "+28", "name": "spare" },
            { "code": "+290", "name": "St. Helena" },
            { "code": "+291", "name": "spare" },
            { "code": "+292", "name": "spare" },
            { "code": "+293", "name": "spare" },
            { "code": "+294", "name": "spare" },
            { "code": "+295", "name": "San Marino" },
            { "code": "+296", "name": "Trinidad" },
            { "code": "+297", "name": "Aruba" },
            { "code": "+298", "name": "Faroe (Faeroe) Islands (Denmark)" },
            { "code": "+299", "name": "Greenland" },
            { "code": "+30", "name": "Greece" },
            { "code": "+31", "name": "Netherlands" },
            { "code": "+32", "name": "Belgium" },
            { "code": "+33", "name": "France" },
            { "code": "+34", "name": "Spain (including Balearic Islands)" },
            { "code": "+350", "name": "Gibraltar" },
            { "code": "+351", "name": "Portugal (includes Azores)" },
            { "code": "+352", "name": "Luxembourg" },
            { "code": "+353", "name": "Ireland (Irish Republic; Eire)" },
            { "code": "+354", "name": "Iceland" },
            { "code": "+355", "name": "Albania" },
            { "code": "+356", "name": "Malta" },
            { "code": "+357", "name": "Cyprus" },
            { "code": "+358", "name": "Finland" },
            { "code": "+359", "name": "Bulgaria" },
            { "code": "+36", "name": "Hungary" },
            { "code": "+370", "name": "Lithuania" },
            { "code": "+371", "name": "Latvia" },
            { "code": "+373", "name": "Moldova" },
            { "code": "+374", "name": "Armenia" },
            { "code": "+375", "name": "Belarus" },
            { "code": "+377", "name": "Monaco" },
            { "code": "+38", "name": "Yugoslavia" },
            { "code": "+380", "name": "Ukraine" },
            { "code": "+381", "name": "Serbia, Republic of" },
            { "code": "+385", "name": "Croatia" },
            { "code": "+387", "name": "Bosnia" },
            { "code": "+387", "name": "Herzegovina" },
            { "code": "+389", "name": "Fyrom (Macedonia)" },
            { "code": "+39", "name": "Italy" },
            { "code": "+39-66982", "name": "Vatican City" },
            { "code": "+40", "name": "Romania" },
            { "code": "+41", "name": "Liechtenstein" },
            { "code": "+41", "name": "Switzerland" },
            { "code": "+42", "name": "Czechoslovakia" },
            { "code": "+43", "name": "Austria" },
            { "code": "+44", "name": "United Kingdom" },
            { "code": "+45", "name": "Denmark" },
            { "code": "+46", "name": "Sweden" },
            { "code": "+47", "name": "Norway" },
            { "code": "+48", "name": "Poland" },
            { "code": "+49", "name": "Germany, Federal Republic of (West Germany)" },
            { "code": "+500", "name": "Falkland Islands" },
            { "code": "+501", "name": "Belize" },
            { "code": "+502", "name": "Guatemala" },
            { "code": "+503", "name": "El Salvador" },
            { "code": "+504", "name": "Honduras" },
            { "code": "+505", "name": "Nicaragua" },
            { "code": "+506", "name": "Costa Rica" },
            { "code": "+507", "name": "Panama" },
            { "code": "+508", "name": "St. Pierre &(et) Miquelon (France)" },
            { "code": "+509", "name": "Haiti" },
            { "code": "+51", "name": "Peru" },
            { "code": "+52", "name": "Mexico" },
            { "code": "+53", "name": "Cuba" },
            { "code": "+53", "name": "Guantanamo Bay" },
            { "code": "+54", "name": "Argentina" },
            { "code": "+55", "name": "Brazil" },
            { "code": "+56", "name": "Chile" },
            { "code": "+57", "name": "Colombia" },
            { "code": "+58", "name": "Venezuela" },
            { "code": "+590", "name": "French Antilles (St. Barthelemy, Guadeloupe, French side of St. Martin)" },
            { "code": "+591", "name": "Bolivia" },
            { "code": "+592", "name": "Guyana" },
            { "code": "+593", "name": "Ecuador" },
            { "code": "+594", "name": "French Guiana" },
            { "code": "+595", "name": "Paraguay" },
            { "code": "+596", "name": "Martinique (French Antilles)" },
            { "code": "+597", "name": "Suri" },
            { "code": "+598", "name": "Uruguay (East Republic)" },
            { "code": "+599", "name": "Netherlands Antilles" },
            { "code": "+60", "name": "Malaysia" },
            { "code": "+61", "name": "Australia" },
            { "code": "+62", "name": "Indonesia" },
            { "code": "+63", "name": "Philippines" },
            { "code": "+64", "name": "New Zealand" },
            { "code": "+65", "name": "Singapore" },
            { "code": "+66", "name": "Thailand" },
            { "code": "+670", "name": "North Mariana Islands (Saipan)" },
            { "code": "+671", "name": "Guam" },
            { "code": "+672", "name": "Antarctica" },
            { "code": "+672", "name": "Norfolk Island" },
            { "code": "+673", "name": "Brunei Darussalm" },
            { "code": "+674", "name": "Nauru" },
            { "code": "+675", "name": "Papua New Guinea" },
            { "code": "+676", "name": "Tonga" },
            { "code": "+677", "name": "Solomon Islands" },
            { "code": "+678", "name": "Vanuatu (New Hebrides)" },
            { "code": "+679", "name": "Fiji" },
            { "code": "+680", "name": "Palau" },
            { "code": "+681", "name": "Wallis and Futuna" },
            { "code": "+682", "name": "Cook Islands" },
            { "code": "+683", "name": "Niue" },
            { "code": "+684", "name": "American Samoa" },
            { "code": "+685", "name": "Western Samoa" },
            { "code": "+686", "name": "Kiribati Republic (Gilbert Islands)" },
            { "code": "+687", "name": "New Caledonia" },
            { "code": "+688", "name": "Tuvalu (Ellice Islands)" },
            { "code": "+689", "name": "Tahiti (French Polynesia)" },
            { "code": "+690", "name": "Tokelau" },
            { "code": "+691", "name": "Micronesia (F.S. of Polynesia)" },
            { "code": "+692", "name": "Marshall Islands" },
            { "code": "+7", "name": "CIS" },
            { "code": "+808", "name": "Midway Islands" },
            { "code": "+809", "name": "Anguilla" },
            { "code": "+809", "name": "Antigua" },
            { "code": "+809", "name": "Barbuda" },
            { "code": "+809", "name": "Bahamas" },
            { "code": "+809", "name": "Barbados" },
            { "code": "+809", "name": "Bermuda or 1+441" },
            { "code": "+809", "name": "British Virgin Islands" },
            { "code": "+81", "name": "Japan" },
            { "code": "+82", "name": "Korea, Republic of (South Korea)" },
            { "code": "+84", "name": "Viet Nam" },
            { "code": "+850", "name": "Democratic People's Republic of Korea (North Korea)" },
            { "code": "+852", "name": "Hong Kong" },
            { "code": "+853", "name": "Macao" },
            { "code": "+855", "name": "Khmer Republic (Cambodia/Kampuchea)" },
            { "code": "+856", "name": "Laos" },
            { "code": "+86", "name": "China (People's Republic)" },
            { "code": "+871", "name": "Marisat--Atlantic Ocean" },
            { "code": "+872", "name": "Marisat--Pacific Ocean" },
            { "code": "+873", "name": "Marisat--Indian Ocean" },
            { "code": "+874", "name": "Atlantic West" },
            { "code": "+880", "name": "Bangladesh" },
            { "code": "+886", "name": "China-Taiwan" },
            { "code": "+90", "name": "Turkey" },
            { "code": "+91", "name": "India" },
            { "code": "+91", "name": "Belem" },
            { "code": "+92", "name": "Pakistan" },
            { "code": "+93", "name": "Afghanistan" },
            { "code": "+94", "name": "Sri Lanka" },
            { "code": "+95", "name": "Myanmar" },
            { "code": "+960", "name": "Maldives" },
            { "code": "+961", "name": "Lebanon" },
            { "code": "+962", "name": "Jordan" },
            { "code": "+963", "name": "Syrian Arab Republic" },
            { "code": "+964", "name": "Iraq" },
            { "code": "+965", "name": "Kuwait" },
            { "code": "+966", "name": "Saudi Arabia" },
            { "code": "+967", "name": "Yemen Arab Republic" },
            { "code": "+968", "name": "Oman" },
            { "code": "+969", "name": "Yemen" },
            { "code": "+971", "name": "United Arab Emirates" },
            { "code": "+972", "name": "Israel" },
            { "code": "+973", "name": "Bahrain" },
            { "code": "+974", "name": "Qatar" },
            { "code": "+975", "name": "Bhutan" },
            { "code": "+976", "name": "Mongolia" },
            { "code": "+977", "name": "Nepal" },
            { "code": "+98", "name": "Iran" },
            { "code": "+993", "name": "Turkmenistan" },
            { "code": "+994", "name": "Azerbaijan" },
            { "code": "+995", "name": "Georgia" }
        ]
    },
};
/* harmony default export */ __webpack_exports__["a"] = (config);


/***/ }),

/***/ "./src/app/pipe/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy || orderBy.trim() == "") {
            return array;
        }
        //ascending
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(parseInt(item1[orderBy]), parseInt(item2[orderBy]));
            });
        }
        else {
            //not asc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(parseInt(item2[orderBy]), parseInt(item1[orderBy]));
            });
        }
    };
    OrderByPipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'codeOrderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/pipe/star.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StarPipe = /** @class */ (function () {
    function StarPipe() {
    }
    StarPipe.prototype.transform = function (value, skip) {
        var newStr = '';
        skip = skip ? skip : 0;
        for (var i = 0; i < value.length; i++) {
            newStr += (value[i] == ' ' || i >= value.length - skip) ? value[i] : '*';
        }
        return newStr;
    };
    StarPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'star'
        })
    ], StarPipe);
    return StarPipe;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = /** @class */ (function () {
    function AdminService(http, http_local) {
        this.http = http;
        this.http_local = http_local;
    }
    //user
    AdminService.prototype.getUserInfo = function (email) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.getuserbymail + '/' + email);
    };
    AdminService.prototype.adduser = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.adduser, data);
    };
    AdminService.prototype.editUser = function (id, data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.adduser + '/' + id, data);
    };
    AdminService.prototype.deleteUser = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.adduser + '/' + id);
    };
    //package
    AdminService.prototype.getPackages = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.getpackages);
    };
    AdminService.prototype.addpackage = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.getpackages, data);
    };
    AdminService.prototype.editpackage = function (id, data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.getpackages + '/' + id, data);
    };
    //company
    AdminService.prototype.getCompanyList = function (activeOnly) {
        if (activeOnly === void 0) { activeOnly = false; }
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.superadmin;
        if (activeOnly) {
            url += "?activeOnly=" + activeOnly;
        }
        return this.http.get(url);
    };
    AdminService.prototype.editCompanyPackage = function (id, data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.editcompanyprice + '/' + id, data);
    };
    AdminService.prototype.editCompany = function (id, data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany + '/' + id, data);
    };
    AdminService.prototype.addCompany = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany, data);
    };
    AdminService.prototype.updateCompanyLogo = function (file, companyId) {
        var _formData = new FormData();
        _formData.append("file", file);
        var observable = this.http_local.post(this.http.getServiceURL(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany, true) + '/logo/' + companyId, _formData);
        return observable;
    };
    AdminService.prototype.getCompany = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany + "/" + id);
    };
    AdminService.prototype.unsubscribeCompany = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany + "/UnSubscribe/" + id);
    };
    AdminService.prototype.resubscribeCompany = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany + "/ReSubscribe/" + id);
    };
    //consent 
    AdminService.prototype.addconsent = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.consent, data);
    };
    AdminService.prototype.editconsent = function (id, data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.consent + '/' + id, data);
    };
    AdminService.prototype.getconsents = function (companyid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.consent + '/' + companyid);
    };
    AdminService.prototype.getconsent = function (companyid, type) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.consent + '/type/' + companyid + '/' + type);
    };
    //config
    AdminService.prototype.editStorage = function (id, data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.config + '/' + id, data);
    };
    AdminService.prototype.addStorage = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.config, data);
    };
    AdminService.prototype.getStorage = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.config + "/" + id);
    };
    AdminService.prototype.getStorageByCompId = function (companyid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.config + "/company/" + companyid);
    };
    //logs
    AdminService.prototype.getlogs = function (companyid, logfor) {
        var apiend = (logfor == 'sharedata') ? __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.logsharedata : __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.logpostdata;
        return this.http.get(apiend + '/' + companyid);
    };
    AdminService.prototype.getbilling = function () {
    };
    AdminService.prototype.sendMailOnDemand = function (data, contactname, contactemail, integrationtype, emailfrom) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.sendMailOnDemand + "/" + contactname + "/" + contactemail + "/" + integrationtype + "/" + emailfrom, data);
    };
    AdminService.prototype.updateCompanyContactPerson = function (prevcontactid, newcontactid) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.updateCompanyContact + '/updatecompanycontact/' + prevcontactid + '/' + newcontactid);
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_base_service__["a" /* ApiBaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/adminuser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUserService = /** @class */ (function () {
    function AdminUserService(http, http_local) {
        this.http = http;
        this.http_local = http_local;
    }
    AdminUserService.prototype.getAdminUser = function (companyid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.adduser + '/company/' + companyid);
    };
    AdminUserService.prototype.getFolders = function (companyid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.folders + '/' + companyid);
    };
    AdminUserService.prototype.getUserfolder = function (userid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.userfolder + '/' + userid);
    };
    AdminUserService.prototype.getBillingInfo = function (companyid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.billing + '/' + companyid);
    };
    AdminUserService.prototype.getUserById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.adduser + '/' + id);
    };
    AdminUserService.prototype.getsharedfolderroot = function (id, status) {
        var apiend = (status === 'a') ? __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.sharedfolderroot + '/' + id : __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.sharedfolderuserroot + '/' + status;
        return this.http.get(apiend);
    };
    AdminUserService.prototype.getSharedFolder = function (id, status) {
        var url = (status == 'a') ? __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.sharedfolder + '/' + id : __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.usersharedfolder + '/' + status;
        return this.http.get(url);
    };
    AdminUserService.prototype.getSharedFolderFile = function (id, userid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.sharedfolderfile + '/' + id + '/' + userid);
    };
    AdminUserService.prototype.getSharedUsers = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.shareduser + '/' + id);
    };
    AdminUserService.prototype.getuserbycompany = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.userbycomapny + '/' + id);
    };
    AdminUserService.prototype.getactiveusersbycompany = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.userbycomapny + '/' + id + '?onlyActive=true');
    };
    AdminUserService.prototype.removeshareduser = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.removeusersharedfolder, data);
    };
    AdminUserService.prototype.addusertosharedfolder = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.addusersharedfolder, data);
    };
    AdminUserService.prototype.addnewfolder = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.addnewfolder, data);
    };
    AdminUserService.prototype.updatefolder = function (id, data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.addnewfolder + '/' + id, data);
    };
    AdminUserService.prototype.deleteSharedFolder = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.addnewfolder + '/' + id);
    };
    AdminUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_base_service__["a" /* ApiBaseService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AdminUserService);
    return AdminUserService;
}());



/***/ }),

/***/ "./src/app/services/api-base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiBaseService = /** @class */ (function (_super) {
    __extends(ApiBaseService, _super);
    function ApiBaseService(_backend, _defaultOptions) {
        var _this = _super.call(this, _backend, _defaultOptions) || this;
        _this._backend = _backend;
        _this._defaultOptions = _defaultOptions;
        _this.requests = false;
        _this._requestsCount = 0;
        return _this;
    }
    ApiBaseService.prototype._headers = function (options) {
        options = options || {};
        options['headers'] = options.headers || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        options.headers.set('Cache-Control', 'no-cache');
        options.headers.set('Pragma', 'no-cache');
        var value = null;
        try {
            value = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        }
        catch (ex) { }
        // set content type
        //options.headers.append('Content-Type', config.api.contentType);
        if (value && value.shareSimpleToken && value.id) {
            options.headers.append('token', value.shareSimpleToken);
            options.headers.append('userid', value.id);
        }
        return options;
    };
    ApiBaseService.prototype._snakecase = function (obj) {
        var _regex = /([a-z])([A-Z])/g;
        return obj ? Object.keys(obj).reduce(function (output, item) {
            output[item.replace(_regex, '$1_$2').toLowerCase()] = obj[item];
            return output;
        }, {}) : obj;
    };
    ApiBaseService.prototype._camelcase = function (obj) {
        var _regex = /(_)(\w)/g;
        return obj ? Object.keys(obj).reduce(function (output, item) {
            output[item.replace(_regex, '$2').toUpperCase()] = obj[item];
            return output;
        }, {}) : obj;
    };
    ApiBaseService.prototype._serialize = function (value) {
        return JSON.stringify(value) || '{}';
    };
    ApiBaseService.prototype._deserialize = function (res) {
        var _this = this;
        return res
            .map(function (res) {
            var data = null;
            try {
                data = res['_body'] && res.json() || {};
            }
            catch (_a) {
                data = res['_body'];
            }
            // let data = res['_body'] && res.json() || {};
            return (data);
        })
            .catch(function (res) {
            if (res.status >= 500 && res.status < 600) {
                var data = void 0;
                try {
                    data = res.json() || {};
                }
                catch (e) {
                    data = _this._error(res.text(), res.status);
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(res.text());
            }
            if (res.status >= 400 && res.status < 500) {
                var data = res.json() || {};
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(data);
            }
            // return Observable.throw(res.text());
            return res['_body'];
        });
    };
    ApiBaseService.prototype._encode = function (params) {
        if (params instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */])
            return params;
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        Object.keys(params).forEach(function (key) { return params[key] !== null && searchParams.set(key, params[key]); });
        return searchParams;
    };
    ApiBaseService.prototype._error = function (message, status) {
        if (status === void 0) { status = 400; }
        return {
            error: {
                code: status,
                message: message || 'Server error (${status})',
            }
        };
    };
    ApiBaseService.prototype.get = function (url, params, options) {
        options = this._headers(options);
        params && (options.search = this._encode(this._snakecase(params)));
        var res = _super.prototype.get.call(this, this.getServiceURL(url, true), options).share();
        this.setStatus(res);
        return this._deserialize(res);
    };
    ApiBaseService.prototype.post = function (url, body, params, options) {
        options = this._headers(options);
        // body = this._serialize(body);
        params && (options.search = this._encode(params));
        var res = _super.prototype.post.call(this, this.getServiceURL(url, true), body, options).share();
        this.setStatus(res);
        var result = this._deserialize(res);
        return result;
    };
    ApiBaseService.prototype.put = function (url, body, params, options) {
        options = this._headers(options);
        // body = this._serialize(body);
        params && (options.search = this._encode(params));
        var res = _super.prototype.put.call(this, this.getServiceURL(url, true), body, options).share();
        this.setStatus(res);
        return this._deserialize(res);
    };
    ApiBaseService.prototype.delete = function (url, params, options) {
        options = this._headers(options);
        params && (options.search = this._encode(params));
        var res = _super.prototype.delete.call(this, this.getServiceURL(url, true), options).share();
        this.setStatus(res);
        return this._deserialize(res);
    };
    ApiBaseService.prototype.setStatus = function (observable) {
        var _this = this;
        this._requestsCount++;
        this.requests = true;
        observable.debounceTime(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].debounce.interval).subscribe(function () { }, function () { }, function () {
            _this._requestsCount--;
            _this.requests = !!_this._requestsCount;
        });
    };
    ApiBaseService.prototype.getStatus = function (type) {
        return !!this.requests;
    };
    ApiBaseService.prototype.getServiceURL = function (url, forapi) {
        var baseUrl = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].api.base;
        if (baseUrl == null || baseUrl == '') {
            baseUrl = window.location.host;
        }
        if (forapi) {
            baseUrl += '/api/';
        }
        return baseUrl + url;
    };
    ApiBaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]])
    ], ApiBaseService);
    return ApiBaseService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));



/***/ }),

/***/ "./src/app/services/app.routes-auth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAdminAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IsSuperAdminAuthenticated; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsAuthenticated = /** @class */ (function () {
    function IsAuthenticated(router, commonService, storage) {
        this.router = router;
        this.commonService = commonService;
        this.storage = storage;
        this.authlink = '';
    }
    IsAuthenticated.prototype.canActivate = function (route, state) {
        var _this = this;
        var user = this.storage.get('user');
        if (user && user.isActive) {
            return true;
        }
        else {
            this.storage.set('returnUrl', state.url);
            if (this.authlink === '') {
                this.commonService.getAdAppClientId().subscribe(function (data) {
                    _this.authlink = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].api.AuthLink(data);
                    window.location.href = _this.authlink;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                window.location.href = this.authlink;
            }
        }
    };
    IsAuthenticated = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["k" /* Storage */]])
    ], IsAuthenticated);
    return IsAuthenticated;
}());

var IsAdminAuthenticated = /** @class */ (function () {
    function IsAdminAuthenticated(router, commonService, storage) {
        this.router = router;
        this.commonService = commonService;
        this.storage = storage;
        this.authlink = '';
    }
    IsAdminAuthenticated.prototype.canActivate = function (route, state) {
        var _this = this;
        var user = this.storage.get('user');
        if (user && user.type && user.isActive) {
            return true;
        }
        else {
            this.storage.set('returnUrl', state.url);
            if (this.authlink === '') {
                this.commonService.getAdAppClientId().subscribe(function (data) {
                    _this.authlink = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].api.AuthLink(data);
                    window.location.href = _this.authlink;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                window.location.href = this.authlink;
            }
        }
    };
    IsAdminAuthenticated = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["k" /* Storage */]])
    ], IsAdminAuthenticated);
    return IsAdminAuthenticated;
}());

var IsSuperAdminAuthenticated = /** @class */ (function () {
    function IsSuperAdminAuthenticated(router, commonService, storage) {
        this.router = router;
        this.commonService = commonService;
        this.storage = storage;
        this.authlink = '';
    }
    IsSuperAdminAuthenticated.prototype.canActivate = function (route, state) {
        var _this = this;
        var user = this.storage.get('user');
        if (user && user.type && user.isSuperAdmin && user.isActive) {
            return true;
        }
        else {
            this.storage.set('returnUrl', state.url);
            this.storage.remove('user');
            if (this.authlink === '') {
                this.commonService.getAdAppClientId().subscribe(function (data) {
                    _this.authlink = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].api.AuthLink(data);
                    window.location.href = _this.authlink;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                window.location.href = this.authlink;
            }
        }
    };
    IsSuperAdminAuthenticated = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services__["e" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["k" /* Storage */]])
    ], IsSuperAdminAuthenticated);
    return IsSuperAdminAuthenticated;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.getauthresponse = function (email) {
        var emialjson = { email: email };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.auth, emialjson);
    };
    AuthenticationService.prototype.getauthwithuserresponse = function (code) {
        var codejson = { code: code };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.authcode, codejson);
    };
    AuthenticationService.prototype.getUserInfoById = function (Id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.getuserbyId + '/' + Id);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_base_service__["a" /* ApiBaseService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.activeAdmin = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    CommonService.prototype.getEndForFirst = function (entityCount) {
        return ((entityCount >= 10) ? 10 : entityCount);
    };
    CommonService.prototype.getStart = function (currentPage) {
        return ((currentPage - 1) * 10) + 1;
    };
    CommonService.prototype.getEnd = function (entitystart, entityCount) {
        return ((entitystart + 9) > entityCount) ? entityCount :
            (entitystart + 9);
    };
    CommonService.prototype.SetAdmin = function (data) {
        this.activeAdmin.next(data);
    };
    CommonService.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value.toString() || '').trim().length === 0;
        var isValid = !isWhitespace;
        return isValid ? null : { 'required': true };
    };
    CommonService.prototype.truefalseValidator = function (control) {
        return (control.value && (control.value === true || control.value === false)) ? null : { 'required': true };
    };
    CommonService.prototype.dateDiff = function (fromdate) {
        var diff = Math.floor(new Date(fromdate).getTime() - new Date().getTime());
        var dayconverter = 1000 * 60 * 60 * 24;
        var days = (Math.floor(diff / dayconverter)) + 1;
        return days;
    };
    CommonService.prototype.minuteDiff = function (fromdate) {
        var diff = Math.floor(new Date(fromdate).getTime() - new Date().getTime());
        var dayconverter = 1000 * 60;
        var days = Math.floor(diff / dayconverter);
        return days;
    };
    CommonService.prototype.getFileTypeIcon = function (fileName) {
        var icon = 'other.png';
        fileName = fileName ? fileName.toLowerCase() : "";
        if (fileName.includes('.txt')) {
            icon = 'text.png';
        }
        else if (fileName.includes('.pdf')) {
            icon = 'pdf.png';
        }
        else if (fileName.includes('.doc') || fileName.includes('.docx')) {
            icon = 'docx.png';
        }
        else if (fileName.includes('.zip') || fileName.includes('.rar')) {
            icon = 'icon_zip_file.png';
        }
        else if (fileName.includes('.xls') || fileName.includes('.xlsx')) {
            icon = 'icon_xls_file.png';
        }
        else if (fileName.includes('.ppt') || fileName.includes('.pptx')) {
            icon = 'ppt.png';
        }
        return icon;
    };
    CommonService.prototype.getFileViewUrl = function (fileInfo, fileApiBaseUrl) {
        var fileNameParts = fileInfo && fileInfo.name ? fileInfo.name.toLowerCase().split('.') : '';
        var fileExt = fileNameParts.length <= 1 ? "" : fileNameParts[fileNameParts.length - 1];
        var fileApiUrl = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].api.base + fileApiBaseUrl + fileInfo.fileId + "/" + fileInfo.name;
        var fileurl = '';
        if (fileExt == 'pdf' || fileExt == 'doc' || fileExt == 'docx' || fileExt == 'xls' || fileExt == 'xlsx' || fileExt == 'ppt' || fileExt == 'pptx')
            fileurl = 'https://docs.google.com/gview?url=' + fileApiUrl + '&embedded=true';
        else
            fileurl = '/assets/PreviewDoc/#' + fileApiUrl;
        return fileurl;
    };
    CommonService.prototype.getAdAppClientId = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.adAppClientId);
    };
    CommonService.prototype.getAppLinkConfig = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.AppConfig + '/LinkConfig');
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_base_service__["a" /* ApiBaseService */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyService = /** @class */ (function () {
    function CompanyService(http, http_local) {
        this.http = http;
        this.http_local = http_local;
    }
    CompanyService.prototype.getCompany = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany + "/" + id);
    };
    CompanyService.prototype.deleteCompany = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany + "/" + id);
    };
    CompanyService.prototype.unsubscribe = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].apiendpoint.addcompany + '/UnSubscribe/' + id);
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_base_service__["a" /* ApiBaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_service__ = __webpack_require__("./src/app/services/admin.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminuser_service__ = __webpack_require__("./src/app/services/adminuser.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__adminuser_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__api_base_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__("./src/app/services/common.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__common_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_service__ = __webpack_require__("./src/app/services/company.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__company_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__("./src/app/services/logger.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__logger_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__otp_service__ = __webpack_require__("./src/app/services/otp.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__otp_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__postdata_service__ = __webpack_require__("./src/app/services/postdata.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__postdata_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sharefile_service__ = __webpack_require__("./src/app/services/sharefile.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__sharefile_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__storage_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__surveillance_service__ = __webpack_require__("./src/app/services/surveillance.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__surveillance_service__["a"]; });














/***/ }),

/***/ "./src/app/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggerService = /** @class */ (function () {
    function LoggerService(http) {
        this.http = http;
    }
    LoggerService.prototype.log = function (message) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.createLog + '?message=' + message;
        return this.http.post(url);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_base_service__["a" /* ApiBaseService */]])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/services/otp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtpService = /** @class */ (function () {
    function OtpService(http) {
        this.http = http;
    }
    OtpService.prototype.sendOtp = function (postObj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.sendOtp, postObj);
    };
    OtpService.prototype.matchOtp = function (postObj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.matchOtp, postObj);
    };
    OtpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_base_service__["a" /* ApiBaseService */]])
    ], OtpService);
    return OtpService;
}());



/***/ }),

/***/ "./src/app/services/postdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostdataService = /** @class */ (function () {
    function PostdataService(http, http_local) {
        this.http = http;
        this.http_local = http_local;
    }
    PostdataService.prototype.uploadfile = function (queryobject) {
        var _formData = new FormData();
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
        var observable = this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdatafileupload, _formData);
        return observable;
    };
    PostdataService.prototype.addPostData = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdata, data);
    };
    PostdataService.prototype.getPostDataLink = function (id, mode) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdatalink + '/' + id + '/' + mode);
    };
    PostdataService.prototype.getTrustedLink = function (key) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.trustedLink + '/' + key);
    };
    PostdataService.prototype.updatereceivers = function (queryobject) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.updatepostdatareceiver, queryobject);
    };
    PostdataService.prototype.deletepostdata = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.deletepostdata + '/' + id);
    };
    PostdataService.prototype.getfiels = function (otp) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.getpostdatafiled + '/' + otp);
    };
    PostdataService.prototype.updatepostdatafield = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdataupdatefiled, data);
    };
    PostdataService.prototype.deletepostdatafile = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdatafiledelete + '/' + id);
    };
    PostdataService.prototype.getshowpostdata = function (key, receiverid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdata + '/' + key + '/' + receiverid);
    };
    PostdataService.prototype.receiveByRequestor = function (postDataKey, receiverid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdata + '/receiveByRequestor/' + postDataKey + '/' + receiverid);
    };
    PostdataService.prototype.getUserFolder = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.usersharedfolder + '/' + id);
    };
    PostdataService.prototype.savepostdata = function (folderid, ispersonal, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.savedata + '/' + folderid + '/' + ispersonal, data);
    };
    PostdataService.prototype.isSaved = function (postdataid, receiverid) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.isSaved + '/' + postdataid + '/' + receiverid);
    };
    PostdataService.prototype.getviewbloburl = function (fileid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postbloburl + '/' + fileid);
    };
    PostdataService.prototype.deletetemp = function () {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.deletetemppost);
    };
    PostdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_base_service__["a" /* ApiBaseService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PostdataService);
    return PostdataService;
}());



/***/ }),

/***/ "./src/app/services/sharefile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharefileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharefileService = /** @class */ (function () {
    function SharefileService(http, http_local) {
        this.http = http;
        this.http_local = http_local;
    }
    SharefileService.prototype.uploadfile = function (queryobject) {
        var _formData = new FormData();
        _formData.append("senderEmail", queryobject.senderEmail);
        _formData.append("file", queryobject.file);
        _formData.append("mode", queryobject.mode);
        _formData.append("shareDataId", queryobject.shareDataId);
        var value = JSON.parse(localStorage.getItem('user'));
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
        var observable = this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.uploadfile, _formData);
        return observable;
    };
    SharefileService.prototype.updatereceivers = function (queryobject) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.updatereceiver, queryobject);
    };
    SharefileService.prototype.getSharedataLink = function (id, mode) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.getsharedatalink + '/' + id + '/' + mode);
    };
    SharefileService.prototype.getReceivers = function (key, status) {
        var endpoint = (status == 'postdata') ? __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdatareceivers : __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.receivers;
        return this.http.get(endpoint + '/' + key);
    };
    SharefileService.prototype.sendOtp = function (requestObj, status) {
        if (status == 'postdata') {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.postdatasendotp + '/' + requestObj.ReceiverId);
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.sendotp, requestObj);
        }
    };
    SharefileService.prototype.getfiles = function (otp) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.getfiles + '/' + otp);
    };
    SharefileService.prototype.deletefile = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.deletefile + '/' + id);
    };
    SharefileService.prototype.sendDownloadPermission = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.senddownloadrequest, data);
    };
    SharefileService.prototype.rejectrequest = function (dkey) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.rejectrequestdownload + '/' + dkey);
    };
    SharefileService.prototype.getacceptrequestfiles = function (dkey) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.getacceptrequestfiles + '/' + dkey);
    };
    SharefileService.prototype.downloadfile = function (fileid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.downloadfile + '/' + fileid);
    };
    SharefileService.prototype.acceptdownloadrequest = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.acceptdownloadrequest, data);
    };
    //post data show
    SharefileService.prototype.getpostdatashowreceiver = function (key) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.showpostdatamails + '/' + key);
    };
    //post data show otp
    SharefileService.prototype.getpostdatashowotp = function (key) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.showpostdataotp + '/' + key);
    };
    SharefileService.prototype.getviewbloburl = function (fileid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.viewbloburl + '/' + fileid);
    };
    SharefileService.prototype.deletetemp = function () {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.deletetemp);
    };
    SharefileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_base_service__["a" /* ApiBaseService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], SharefileService);
    return SharefileService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Storage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Storage = /** @class */ (function () {
    function Storage() {
    }
    // TODO: try to add caching
    Storage.prototype.get = function (key) {
        var value = localStorage.getItem(key);
        try {
            return value == undefined ? undefined : JSON.parse(value);
        }
        catch (err) {
            return value; // err.name == 'SyntaxError' // err instanceof SyntaxError
        }
    };
    Storage.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    Storage.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    Storage.prototype.clear = function () {
        localStorage.clear();
    };
    Storage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Storage);
    return Storage;
}());



/***/ }),

/***/ "./src/app/services/surveillance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveillanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveillanceService = /** @class */ (function () {
    function SurveillanceService(http) {
        this.http = http;
    }
    SurveillanceService.prototype.getEnums = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.surveillance + '/enums');
    };
    SurveillanceService.prototype.getSurveillances = function (searchOptions) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.surveillance, searchOptions);
    };
    SurveillanceService.prototype.getSurveillance = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].apiendpoint.surveillance + '/' + id);
    };
    SurveillanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_base_service__["a" /* ApiBaseService */]])
    ], SurveillanceService);
    return SurveillanceService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            required: 'Required',
            invalidCreditCard: 'Is invalid credit card number',
            invalidEmailAddress: 'Invalid email address',
            invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            minlength: "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { invalidCreditCard: true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { invalidPassword: true };
        }
    };
    ValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiBase: 'https://localhost:44399',
    uiBase: 'https://localhost:44399'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map