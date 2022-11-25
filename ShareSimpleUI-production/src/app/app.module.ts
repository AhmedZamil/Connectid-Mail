import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http, XHRBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FileDropModule } from 'ngx-file-drop';
import { routes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PaginationModule } from 'ng2-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgPipesModule } from 'ngx-pipes';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { IsAuthenticated, IsAdminAuthenticated, IsSuperAdminAuthenticated } from './services/app.routes-auth';
import { OrderByPipe } from './pipe/orderby.pipe';
import {
  WelcomepageComponent,
  HomeComponent,
  ActionlistComponent,
  RegistrationComponent,
  SharefilesComponent,
  RequestdataComponent,
  RequestdataconsentComponent,
  RequestdatasubmitComponent,
  ConfirmationComponent,
  AdminuserComponent,
  AdminCompany,
  AuthComponent,
  OtpsendComponent,
  DownloadfileComponent,
  ViewfileComponent,
  DownloadpermissionfileComponent,
  PermissiongrantedComponent,
  HeaderComponent,
  AcceptComponent,
  RejectComponent,
  ShowpostdataComponent,
  AdminhomeComponent,
  AdminPackageComponent,
  AdminConsentComponent,
  LogsComponent,
  SuperuserComponent,
  SuperuserhomeComponent,
  NocontentComponent,
  BillingComponent,
  FoldersComponent,
  UserfolderComponent,
  UserfilesComponent,
  MessageinactiveuserComponent,
  RootfolderComponent,
  SharedfolderComponent,
  SharedfolderfileComponent,
  ManagesharingComponent,
  NewfolderComponent,
  FooterComponent,
} from './components';

import {
  AdminService,
  AdminUserService,
  ApiBaseService,
  AuthenticationService,
  CommonService,
  CompanyService,
  LoggerService,
  PostdataService,
  OtpService,
  SharefileService,
  SurveillanceService,
  Storage
} from './services';
import { SafetySignatureComponent } from './components/safety-signature/safety-signature.component';
import { StarPipe } from './pipe/star.pipe';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { SuperuserSurveillanceComponent } from './components/superusersurveillance/superusersurveillance.component';
import { TrustedLinkComponent } from './components/trusted-link/trusted-link.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  entryComponents: [
    NewfolderComponent,
    ManagesharingComponent
  ],
  declarations: [
    AppComponent,
    WelcomepageComponent,
    HomeComponent,
    ActionlistComponent,
    RegistrationComponent,
    SharefilesComponent,
    RequestdataComponent,
    RequestdataconsentComponent,
    RequestdatasubmitComponent,
    ConfirmationComponent,
    AdminuserComponent,
    AdminCompany,
    AuthComponent,
    OtpsendComponent,
    DownloadfileComponent,
    ViewfileComponent,
    DownloadpermissionfileComponent,
    PermissiongrantedComponent,
    HeaderComponent,
    AcceptComponent,
    RejectComponent,
    ShowpostdataComponent,
    AdminhomeComponent,
    AdminPackageComponent,
    AdminConsentComponent,
    LogsComponent,
    SuperuserComponent,
    NocontentComponent,
    SuperuserhomeComponent,
    BillingComponent,
    FoldersComponent,
    UserfolderComponent,
    UserfilesComponent,
    MessageinactiveuserComponent,
    RootfolderComponent,
    SharedfolderComponent,
    SharedfolderfileComponent,
    ManagesharingComponent,
    NewfolderComponent,
    FooterComponent,
    OrderByPipe,
    SafetySignatureComponent,
    StarPipe,
    DeleteCustomerComponent,
    SuperuserSurveillanceComponent,
    TrustedLinkComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpModule,
    FormsModule,
    Ng2PaginationModule,
    FileDropModule,
    ReactiveFormsModule,
    NgPipesModule,
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    IsAuthenticated,
    IsAdminAuthenticated,
    IsSuperAdminAuthenticated,
    ApiBaseService,
    CommonService,
    CompanyService,
    AdminService,
    AdminUserService,
    Storage,
    PostdataService,
    OtpService,
    AuthenticationService,
    LoggerService,
    SharefileService,
    SurveillanceService,
    {
      provide: ApiBaseService,
      deps: [XHRBackend, RequestOptions],
      useFactory: (Backend, defaultOptions) => new ApiBaseService(Backend, defaultOptions)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
