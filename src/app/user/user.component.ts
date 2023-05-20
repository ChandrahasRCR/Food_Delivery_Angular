import { Component,OnInit } from '@angular/core';
import { FoodAppserviceService } from '../food-appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  Users:any;
  user:any;
  Foods:any;
  Fooditem:any;
  fds1:any;
  food:any;
  FC:any;
  fc:any;
  searchText:any;
  carts:any;
  count:any;
  ct1:any;
 
  constructor(private stuServ:FoodAppserviceService,private route:Router){
    this.user=null;
  }
ngOnInit(): void {
  //this.getfdsList();
  this.getAllList();
  
}

getAllList(){
   this.stuServ.getAllUsers().subscribe((ur:any)=>{
   this.Users=ur;
    console.log(this.Users);
  })
   
  this.stuServ.getAllFoodCategory().subscribe((fd:any)=>{
    this.FC=fd;
    console.log(this.Foods)
  })
  
  this.stuServ.getAllFood().subscribe((fd:any)=>{
    this.Foods=fd;
    console.log(this.Foods)
  })
   this.stuServ.getAllCart().subscribe((data: any) => {
    this.carts = data;
    console.log(data);
  });
}
// user Methods
edit(ur:any){
  console.log(ur);
  this.user=ur;
  }
delUrs(id: any) {
  console.log(id);
   return this.stuServ.deleteUser(id).subscribe((ur:any)=>{
   this.ngOnInit()
  
  })
}
upurs(){
  return this.stuServ.updateUser(this.user).subscribe((u:any)=>{
   this.user=null;
  })
}



// Food methods
  editFood(ur:any){
    console.log(ur);
    this.food=ur;
    }
    delFood(id: any) {
      console.log(id);
       return this.stuServ.deleteFood(id).subscribe((ur:any)=>{
       this.ngOnInit()
      
      })
    }
    upfds(){
      return this.stuServ.updateFood(this.food).subscribe((u:any)=>{
       this.food=null;
      })
    }
    searchFood(formData:any){
      // console.log(formData);
      
      return this.stuServ.getFoodBYNAME(formData).subscribe((ur:any)=>{
        this.Fooditem=ur;
       console.log(this.Fooditem);
      //  this.Fooditem=null;
     })
    }searchFoodByCategory(formData:any){
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
    // Food Category Methods
    editFC(ur:any){
      console.log(ur);
      this.fc=ur;
      }
      delFC(id: any) {
        console.log(id);
         return this.stuServ.deleteFoodCategory(id).subscribe((ur:any)=>{
         this.ngOnInit()
        })
      }
upfc(){
  return this.stuServ.updateFoodCategory(this.fc).subscribe((u:any)=>{
   this.fc=null;
  })
}
//Cart Methods
delCart(id:any){
  console.log(id);
  return this.stuServ.deleteCart(id).subscribe((ur:any)=>{
  this.ngOnInit()
 })
}
cAdd(){
  this.ct1="count";
}
Plus(data:any){
  this.count=data;
  console.log(this.count);
  this.ct1=null;
  return this.stuServ.createCart(data).subscribe((u:any)=>{
    this.count=u;
    console.log(this.count);
    
   })
  }

}
