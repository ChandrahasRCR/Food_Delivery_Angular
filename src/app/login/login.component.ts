import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodAppserviceService } from '../food-appservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private foodservice:FoodAppserviceService,private route:Router){}

  aftemail:any;
  aftpass:any;

  validate(data:any){
    return this.foodservice.getIdByEmail(data.uemail).subscribe((aftemail:any)=>{
      // console.log(aftemail); 
      this.foodservice.getIdByPassword(data.upassword).subscribe((aftpass:any)=>{
      
        if(aftemail==aftpass){
          this.foodservice.setuser(data.uemail);
          this.route.navigateByUrl("menu");

        }else if(aftemail==null||aftpass==null){
          alert("invalid credentials")
          this.route.navigateByUrl("login");
        }
        else{
          alert("invalid credentials")
          this.route.navigateByUrl("login");
        }
      
      });

    });
  }



}
