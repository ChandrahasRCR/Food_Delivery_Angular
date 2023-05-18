
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  title="sample app"
  paymentHandler: any = null;
 
  success: boolean = false;
  
  failure:boolean = false;

  price:any;
  
  //userName = localStorage.getItem('userName');
  //userAddress = localStorage.getItem('userAddress');

 
  constructor(private notifyService : NotificationService) {
    
  }
 
  ngOnInit() {
    this.invokeStripe();
    if (localStorage.getItem('price') != null) {
      this.price = localStorage.getItem('price');
    
    }

     
    
  }
 
  makePayment() {
    var amount = this.price;
    console.log(amount);

    
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Mb2TuSB73RjjV4cXhXPxfGRlPX6RiWuC6x3xvupgnr7hQre2z2ujRacb9PhIDbuBw7S8idgfgOHHw5LRcB6wpCX00lOWL7Kei',
      locale: 'auto',
      token: function (stripeToken: any) {
      console.log(stripeToken);
      alert("payment done");
               window.location.replace("/success");

      // alert('Your payment is sucessfully done!');
      // this.notifyService.payment();
      
      //this.notifyService.success("your pay");
      },
      
    });
 
 
    paymentHandler.open({
      name: 'FooDBaskeT',
      description: 'Online Booking',
      amount: amount,

    
     
    });
  }
 
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Mb2TuSB73RjjV4cXhXPxfGRlPX6RiWuC6x3xvupgnr7hQre2z2ujRacb9PhIDbuBw7S8idgfgOHHw5LRcB6wpCX00lOWL7Kei'
          ,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
 
      window.document.body.appendChild(script);
    }
  }
}