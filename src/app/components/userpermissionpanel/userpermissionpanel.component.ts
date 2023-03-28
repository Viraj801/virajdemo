import { Component } from '@angular/core';

@Component({
  selector: 'app-userpermissionpanel',
  templateUrl: './userpermissionpanel.component.html',
  styleUrls: ['./userpermissionpanel.component.scss']
})
export class UserpermissionpanelComponent {
  status:number=1;
ChangeCom(i:number){
  this.status=i;
  console.log(i);  
}

}
