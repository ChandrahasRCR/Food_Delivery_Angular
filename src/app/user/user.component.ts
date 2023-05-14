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
  food:any;
  FC:any;
  fc:any;
 
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
    // Food Category Methods
    editFC(ur:any){
      console.log(ur);
      this.food=ur;
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
}
