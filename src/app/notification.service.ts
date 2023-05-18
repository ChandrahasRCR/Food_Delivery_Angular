import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }
//register
 
  userError(){
    this.toastr.warning("User Already Exits with this name or email")
  }

  userSuccess(){
    this.toastr.success("You have successfully registered")
  }


//login

userlogin(){
  this.toastr.error("Invaldi credentials")
}

//user
user(){
  this.toastr.success("Item added sucessfully")
}

//payment
payment(){
  this.toastr.success("Item added sucessfully")
}

//address

address(){
  this.toastr.success("address added sucessfully")
}
}
