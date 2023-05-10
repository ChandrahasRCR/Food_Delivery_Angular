import { Component } from '@angular/core';
import { FoodAppserviceService } from '../food-appservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  countries:any;
  constructor(private stuServ:FoodAppserviceService){
  
  }
  ngOnInit(): void {
    this.getallCountries();
  }
  
  submitForm(reg:any){
   
    if(reg.UserId==1&&reg.Name=="xyz"){
      alert("Welcome Student")
    }
    else
    alert("Invalid Creds.")
    // console.log(reg);
  }
  getallCountries()  {
  return this.stuServ.getallCountries().subscribe((c:any)=>
  {
  console.log(c);
  this.countries=c;
  })
  }
}
