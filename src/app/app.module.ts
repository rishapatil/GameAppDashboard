import { SidebarService } from './services/sidebar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';

import { PageService } from './services/page.service';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { WinningnosService } from './services/winningnos.service';
import { StationService } from './services/station.service';
import { DeviceService } from './services/device.service';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminAddPageComponent } from './components/admin-add-page/admin-add-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminStationsComponent } from './components/admin-stations/admin-stations.component';
import { AdminDevicesComponent } from './components/admin-devices/admin-devices.component';
import { AdminWinningNosComponent } from './components/admin-winning-nos/admin-winning-nos.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';
import { AdminEditWinningnosComponent } from './components/admin-edit-winningnos/admin-edit-winningnos.component';
import { AdminAddwinningnoComponent } from './components/admin-addwinningno/admin-addwinningno.component';
import { AdminAddStationComponent } from './components/admin-add-station/admin-add-station.component';
import { AdminEditStationComponent } from './components/admin-edit-station/admin-edit-station.component';
import { AdminAddDeviceComponent } from './components/admin-add-device/admin-add-device.component';
import { AdminEditDeviceComponent } from './components/admin-edit-device/admin-edit-device.component';

const appRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'admin/pages', component: AdminPagesComponent},
    {path: 'admin/add-page', component: AdminAddPageComponent},
    {path: 'admin/edit-page/:id', component: AdminEditPageComponent},
    {path: 'admin/sidebar', component: AdminSidebarComponent},
    {path: ':page', component: PagesComponent},
    {path: ':admin/users', component: AdminUsersComponent},
    {path: ':admin/stations', component: AdminStationsComponent},
    {path: ':admin/devices', component: AdminDevicesComponent},
    {path: ':admin/winning-nos', component: AdminWinningNosComponent},
    {path: '', component: PagesComponent},
    {path: 'admin/edit-user/:id', component: AdminEditUserComponent},
    {path: 'admin/add-user', component: AdminAddUserComponent},
    {path: 'admin/edit-winningnos/:id', component: AdminEditWinningnosComponent},
    {path: 'admin/addwinningno', component: AdminAddwinningnoComponent},
    {path: 'admin/edit-station/:id', component: AdminEditStationComponent},
    {path: 'admin/add-station', component: AdminAddStationComponent},
    {path: 'admin/edit-device/:id', component: AdminEditDeviceComponent},
    {path: 'admin/add-device', component: AdminAddDeviceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminPagesComponent,
    AdminNavbarComponent,
    AdminAddPageComponent,
    AdminEditPageComponent,
    AdminSidebarComponent,
    AdminUsersComponent,
    AdminStationsComponent,
    AdminDevicesComponent,
    AdminWinningNosComponent,
    AdminEditUserComponent,
    AdminAddUserComponent,
    AdminEditWinningnosComponent,
    AdminAddwinningnoComponent,
    AdminAddStationComponent,
    AdminEditStationComponent,
    AdminAddDeviceComponent,
    AdminEditDeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      PageService,
      Title,
      UserService,
      SidebarService,
      WinningnosService,
      StationService,
      DeviceService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
