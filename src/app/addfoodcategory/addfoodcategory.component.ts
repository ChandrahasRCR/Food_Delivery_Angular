import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodAppserviceService } from '../food-appservice.service';

@Component({
  selector: 'app-addfoodcategory',
  templateUrl: './addfoodcategory.component.html',
  styleUrls: ['./addfoodcategory.component.css']
})
export class AddfoodcategoryComponent {
  newemp:any;
  constructor(private route:Router, private stuServ:FoodAppserviceService){

  }
  addfc(formData:any){
 this.stuServ.createFoodCategory(formData).subscribe((e:any)=>{
  this.newemp=e;
  console.log(e);
  this.route.navigateByUrl("/user");
})

  }

}
