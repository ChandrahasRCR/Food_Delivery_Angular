import { Component,OnInit } from '@angular/core';
import { FoodAppserviceService } from '../food-appservice.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  cart:any;
  Foods:any;
constructor(private stuServ:FoodAppserviceService){

}
ngOnInit(): void {
  this.getAllCart();
}
getAllCart() {
  this.stuServ.getAllFood().subscribe((fd:any)=>{
    this.Foods=fd;
    console.log(this.Foods)
  })
  return this.stuServ.getAllCart().subscribe((data: any) => {
    let cartList = data;
    cartList.forEach((item: any) => {
      this.stuServ.getFoodByID(item.foodId).subscribe((res: any) => {
        item.food = res;
      })
    });
    setTimeout(() => {
      this.cart = cartList;
    }, 10);     
  });

}

}
