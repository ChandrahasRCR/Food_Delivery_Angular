import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodAppserviceService } from '../food-appservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UserId:any;
  password:any;
  constructor(private route:Router ,private user:FoodAppserviceService){

  }

  submitForm(login:any){
 
    if(login.UserId=="admin"&&login.password=="Admin1"){
      // alert("Welcome Student")
      this.user.setuserLoggedin();
      this.route.navigateByUrl("user");
    }
    else
    this.route.navigate(['login'])
    // alert("Invalid Creds.")
    // console.log(reg);
  }

}
