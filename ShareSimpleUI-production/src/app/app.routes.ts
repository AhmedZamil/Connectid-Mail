import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { Routes } from '@angular/router';
import { IsAuthenticated, IsSuperAdminAuthenticated, IsAdminAuthenticated } from './services/app.routes-auth';
import {
    WelcomepageComponent,
    HomeComponent,
    RegistrationComponent,
    ActionlistComponent,
    SharefilesComponent,
    RequestdataComponent,
    RequestdataconsentComponent,
    RequestdatasubmitComponent,
    ConfirmationComponent,
    AdminuserComponent,
    AuthComponent,
    OtpsendComponent,
    DownloadfileComponent,
    ViewfileComponent,
    DownloadpermissionfileComponent,
    PermissiongrantedComponent,
    AcceptComponent,
    RejectComponent,
    ShowpostdataComponent,
    AdminCompany,
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
    SharedfolderfileComponent
} from './components';
import { SuperuserSurveillanceComponent } from './components/superusersurveillance/superusersurveillance.component';
import { TrustedLinkComponent } from './components/trusted-link/trusted-link.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'welcome', pathMatch: 'full'
            },
            {
                path: 'welcome',
                component: WelcomepageComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent,
                canActivate: [IsAuthenticated]
            },
            {
                path: 'actions',
                component: ActionlistComponent,
                canActivate: [IsAuthenticated]
            },
            {
                path: 'sharefiles',
                component: SharefilesComponent,
                canActivate: [IsAuthenticated]
            },
            {
                path: 'requestdata',
                component: RequestdataComponent,
                canActivate: [IsAuthenticated]
            },
            {
                path: 'confirm',
                component: ConfirmationComponent,
                canActivate: [IsAuthenticated]
            },
            {
                path: 'inactiveuser',
                component: MessageinactiveuserComponent,
                canActivate: [IsAuthenticated]
            }
        ]
    },
    {
        path: 'admin/:id',
        component: AdminhomeComponent,
        canActivate: [IsAuthenticated],
        children: [
            {
                path: '',
                redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                component: AdminuserComponent
            },
            {
                path: 'home/:id',
                component: AdminuserComponent
            },
            {
                path: 'company',
                component: AdminCompany
            },
            {
                path: 'package',
                component: AdminPackageComponent
            },
            {
                path: 'consent',
                component: AdminConsentComponent
            },
            {
                path: 'log',
                component: LogsComponent
            },
            {
                path: 'billing',
                component: BillingComponent
            },
            {
                path: 'root/:id',
                component: RootfolderComponent
            },
            {
                path: 'folders',
                component: FoldersComponent
            },
            {
                path: 'userfolder/:id',
                component: UserfolderComponent
            },
            {
                path: 'file/:id/:foldername',
                component: UserfilesComponent
            },
            {
                path: 'sharedfolder',
                component: SharedfolderComponent
            },
            {
                path: 'sharedfolder/tl',
                component: SharedfolderComponent
            },
            {
                path: 'sharedfolderfile/:folderid',
                component: SharedfolderfileComponent
            }
        ]
    },
    {
        path: 'superadmin',
        component: SuperuserhomeComponent,
        children: [
            {
                path: 'home',
                component: SuperuserComponent,
                canActivate: [IsSuperAdminAuthenticated]
            },
            {
                path: 'surveillance',
                component: SuperuserSurveillanceComponent,
                canActivate: [IsSuperAdminAuthenticated]
            }
        ]
    },
    {
        path: 'deleteCustomer/:id',
        component: DeleteCustomerComponent,
        canActivate: [IsAuthenticated, IsAdminAuthenticated]
    },
    {
        path: 'requestconsent',
        component: RequestdataconsentComponent
    },
    {
        path: 'requestsubmit',
        component: RequestdatasubmitComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'otp/:key/:status',
        component: OtpsendComponent
    },
    {
        path: 'downloadfile',
        component: DownloadfileComponent
    },
    {
        path: 'viewfile',
        component: ViewfileComponent
    },
    {
        path: 'downloadpermission',
        component: DownloadpermissionfileComponent
    },
    {
        path: 'permissiongranted/:key',
        component: PermissiongrantedComponent
    },
    {
        path: 'accept/:dkey',
        component: AcceptComponent
    },
    {
        path: 'reject/:dkey',
        component: RejectComponent
    },
    {
        path: 'showpostdata',
        component: ShowpostdataComponent
    },
    {
        path: 'trustedlink/:tlKey',
        component: TrustedLinkComponent
    },
    {
        path: '**',
        component: NocontentComponent
    }
];