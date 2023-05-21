import { CartComponent } from "../cart/cart.component";

export class Cart{
    cartid:any;
    uid:any;
    foodid:any;
    quantity:any;
    constructor(cartid:any,uid:any,foodid:any){
this.cartid=cartid;
this.uid=uid;
this.foodid=foodid;
this.quantity=1;
    }

}