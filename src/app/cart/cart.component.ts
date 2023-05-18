import { Component, OnInit } from '@angular/core';
import { FoodAppserviceService } from '../food-appservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart:any;
  constructor(private cartser:FoodAppserviceService) {

    }

 
 
  ngOnInit(): void {
    this.getAllCart();
  }
 

  getAllCart() {
    return this.cartser.getAllCart().subscribe((data: any) => {
      this.cart = data;
      console.log(data);
    });
  }

}
