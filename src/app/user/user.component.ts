import { Component } from '@angular/core';
import { FoodAppserviceService } from '../food-appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  Employees:any;
  employee:any;
 
  // form:NgForm;
  constructor(private stuServ:FoodAppserviceService,private route:Router){
    this.employee=null;
  }
ngOnInit(): void {
  this.getEmpList();
}
getEmpList(){
   this.stuServ.getAllUsers().subscribe((emp:any)=>{
    this.Employees=emp;
     this.route.navigateByUrl("/user");
    // console.log(emp);
  })
}
delEmp(id: any) {
  console.log(id);
   return this.stuServ.deleteUser(id).subscribe((emp:any)=>{
   this.ngOnInit()
  
  })
 
  // return this.route.navigateByUrl("employee");
}
edit(emp:any){
  console.log(emp);
  this.employee=emp;
 
  // return this.stuServ.updateemp(emp).subscribe((emp:any)=>{
  }

  upemp(){
   return this.stuServ.updateUser(this.employee).subscribe((e:any)=>{
    //  this.route.navigateByUrl("/employee");
    this.employee=null;
   })

}
}
