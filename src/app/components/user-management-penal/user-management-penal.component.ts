import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management-penal',
  templateUrl: './user-management-penal.component.html',
  styleUrls: ['./user-management-penal.component.scss']
})

export class UserManagementPenalComponent {
status:number=1;
ChangeCom(i:number){
  this.status=i;
  console.log(i);  
}
}
