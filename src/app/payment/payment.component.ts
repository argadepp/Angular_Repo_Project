import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

selectedPay:string='';
payment:any=[
  'DEBIT CARD',
  'CREDIT CARD',
  'COD'
];

paymentMethod(event:any)
{
  this.selectedPay=event.target.value;
}
pay(){
 // alert(this.selectedPay);
   if(this.selectedPay == this.payment[0])
   {
    // alert('inside');
     this.router.navigate(['/debit']);
   }
   else if(this.selectedPay == this.payment[1])
   {
     this.router.navigate(['/credit']);
   }
}

}
