import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
  card_no: any = null;
    cvv:any = null;
    bank_name: any = null; 
    amount:number;
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit() {
  }

  pay(){
   // alert(this.card_no +' '+ this.bank_name+' ' + this.cvv +' '+ sessionStorage['cust_id'] + ' '+ sessionStorage['amount']);
    //this.service.pay(this.card_no,this.bank_name,this.cvv, sessionStorage['cust_id'],sessionStorage['amount'])
    //.subscribe(response =>{
    //  alert('inside pay');
       //     var result = response.json(); 
      //       alert('pament sucessfull');
        //    this.router.navigate(['/home']);
       // });

this.service.pay(this.card_no,this.bank_name,this.cvv,sessionStorage['cust_id'],this.amount=sessionStorage['amount'])
.subscribe(response=>
{
  var result=response.json();
  alert('payment sucessfull');
  this.router.navigate(['/home']);
});



       
}

 selectBank(event:any)
    {
       this.bank_name=event.target.value;
    }


}
