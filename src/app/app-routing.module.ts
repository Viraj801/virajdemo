import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlPanelComponent } from './components/access-control-panel/access-control-panel.component';
import { CreateUserPanelComponent } from './components/create-user-panel/create-user-panel.component';
import { UpdateUserPanelComponent } from './components/update-user-panel/update-user-panel.component';
import { UserManagementPenalComponent } from './components/user-management-penal/user-management-penal.component';
import { UseraccesscontrolpanelComponent } from './components/useraccesscontrolpanel/useraccesscontrolpanel.component';
import { UserpermissionpanelComponent } from './components/userpermissionpanel/userpermissionpanel.component';
import { LoginUserComponent } from './FrontPanel/login-user/login-user.component';
import { NavbarComponent } from './UserManagementNavbar/navbar/navbar.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'',component:LoginUserComponent},
  {path:'userManagementpanel',component:UserManagementPenalComponent},
  {path:'createuserpanel',component:CreateUserPanelComponent},
  {path:'updateuserpanel',component:UpdateUserPanelComponent},
  {path:'userpermissionpanel',component:UserpermissionpanelComponent},
  {path:'useraccesscontrol',component:UseraccesscontrolpanelComponent},
  {path:"accesscontrolpanel",component:AccessControlPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
