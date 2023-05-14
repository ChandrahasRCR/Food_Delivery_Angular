import { Component } from '@angular/core';
import { FoodAppserviceService } from '../food-appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  newemp:any;
  constructor(private route:Router, private stuServ:FoodAppserviceService){

  }
  addusr(formData:any){
 this.stuServ.createNewUser(formData).subscribe((e:any)=>{
  this.newemp=e;
  console.log(e);
  this.route.navigateByUrl("/user");
})

  }
 

}


