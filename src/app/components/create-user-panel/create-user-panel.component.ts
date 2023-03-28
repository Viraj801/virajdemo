import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user-panel',
  templateUrl: './create-user-panel.component.html',
  styleUrls: ['./create-user-panel.component.scss']
})
export class CreateUserPanelComponent {

status:number=1;
ChangeCom(i:number){
  this.status=i;
  console.log(i);  
}
}
