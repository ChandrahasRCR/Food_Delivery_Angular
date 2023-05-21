import { Component,OnInit } from '@angular/core';
import { FoodAppserviceService } from '../food-appservice.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  carts:any;
  Foods:any;
  Foodpic:any[] = [];
  count:any;
constructor(private stuServ:FoodAppserviceService){

}
ngOnInit(): void {
  this.getAllCart();
}
edit(q:any){
  console.log(q);
  this.count=q;
  }
Plus(){
return this.stuServ.updateCart(this.count).subscribe((u:any)=>{
  this.count=u;
 })
}
Minus(){

}

getAllCart() {
  // this.stuServ.getAllFood().subscribe((fd:any)=>{
  //   this.Foods=fd;
  //   // console.log(this.Foods);
  // })
  // this.stuServ.getFoodImage(this.Foods.foodId).subscribe((fimage:any)=>{
  //    this.image=fimage;
  //     console.log(fimage);
  // })
  return this.stuServ.getAllCart().subscribe((data: any) => {
    this.carts = data;

    
    this.carts.forEach((item: any) => {
      // console.log(item.foodid);
      this.stuServ.getFoodByID(item.foodid).subscribe((res: any) => {
        item.image = res.image;
        item.price=res.price;
        // this.Foodpic.push(res);
        console.log(res);
      })
    });
    
    console.log(this.carts);
    
    // setTimeout(() => {
      // this.carts= data;
    // }, 10);     
  });

}

}
