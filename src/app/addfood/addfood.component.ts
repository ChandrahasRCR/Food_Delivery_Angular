import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodAppserviceService } from '../food-appservice.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent {
  newemp:any;
  constructor(private route:Router, private stuServ:FoodAppserviceService){

  }
  addfood(formData:any){
 this.stuServ.createFood(formData).subscribe((e:any)=>{
  this.newemp=e;
  console.log(e);
  this.route.navigateByUrl("/user");
})

  }
 


}
