import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './FrontPanel/login-user/login-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './UserManagementNavbar/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserManagementPenalComponent } from './components/user-management-penal/user-management-penal.component';
import { CreateUserPanelComponent } from './components/create-user-panel/create-user-panel.component';
import { UpdateUserPanelComponent } from './components/update-user-panel/update-user-panel.component';
import { UserpermissionpanelComponent } from './components/userpermissionpanel/userpermissionpanel.component';
import { UseraccesscontrolpanelComponent } from './components/useraccesscontrolpanel/useraccesscontrolpanel.component';
import { UsermanagementAdministorComponent } from './components/usermanagement-administor/usermanagement-administor.component';
import { AccessControlPanelComponent } from './components/access-control-panel/access-control-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    NavbarComponent,
    UserManagementPenalComponent,
    CreateUserPanelComponent,
    UpdateUserPanelComponent,
    UserpermissionpanelComponent,
    UseraccesscontrolpanelComponent,
    UsermanagementAdministorComponent,
    AccessControlPanelComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
