import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodAppserviceService } from '../food-appservice.service';
import { Cart } from '../home/Cart';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
Foods:any;
Fooditem:any;
cartitem:any;
count:any;
Cart:any;

  constructor(private stuServ:FoodAppserviceService,private route:Router){}
  ngOnInit(): void {
    this.displayAll();
  }
  
  

  displayAll(){
     return this.stuServ.getAllFood().subscribe((fd:any)=>{
      this.Foods=fd;
      console.log(this.Foods)

    })
    }
  searchFood(formData:any){
    // console.log(formData);
    
    return this.stuServ.getFoodBYNAME(formData).subscribe((ur:any)=>{
      this.Fooditem=ur;
     console.log(this.Fooditem);
    //  this.Fooditem=null;
   })
  }
  searchFoodByCategory(formData:any){
    console.log(formData);
    
    return this.stuServ.getFoodByCategory(formData).subscribe((ur:any)=>{
      this.Fooditem=ur;
     console.log(this.Fooditem);
    //  this.Fooditem=null;
   })
  }
  close(){
    this.Fooditem=null;
  }

 main(){

  this.route.navigateByUrl("/vegetarion");

 }
 addToCart(cartdata:any){
  
  let userid:number;
  let data=this.stuServ.getuser();
  
  if(data){
    console.log(data);
    
    userid=data.uid;
    console.log(userid);
    
  }else{
    this.stuServ.setuser("rcr@gmail.com");
    data=this.stuServ.getuser();
    console.log(data);
    userid=data.uid;
  }
  this.Cart= new Cart(data.uid,data.uid,cartdata.foodid);

this.stuServ.createCart(this.Cart).subscribe((ur:any)=>{
  
})
 }

edit(q:any){
  console.log(q);
  this.count=q;
  }
Plus(){
 this.stuServ.updateCart(this.count).subscribe((u:any)=>{
  this.count=u;
 })
 this.route.navigateByUrl("/menu");
}
deleteCart(id:any){
  console.log(id);
  
  return this.stuServ.deleteCart(id).subscribe((u:any)=>{
    console.log(u);
    this.showcart();
  })

}
 closecart(){
  this.cartitem=null;
 }
 showcart(){

let userid:number;
let data=this.stuServ.getuser();

if(data){
  console.log(data);
  
  userid=data.uid;
}else{
  this.stuServ.setuser("rcr@gmail.com");
  data=this.stuServ.getuser();
  console.log(data);
  userid=data.uid;
}


  this.stuServ.getCartByID(userid).subscribe((ur:any)=>{
    this.cartitem=ur;
   console.log(this.cartitem);
   this.cartitem.forEach((item: any) => {
    // console.log(item.foodid);
    this.stuServ.getFoodByID(item.foodid).subscribe((res: any) => {

      item.name=res.name;
      item.image = res.image;
      item.price=res.price;
      // this.Foodpic.push(res);
      console.log(res);
      this.ngOnInit();
    })
  });
  //  this.Fooditem=null;
 })

 }
 
}