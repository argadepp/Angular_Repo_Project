import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-cust-list',
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.css']
})
export class CustListComponent implements OnInit {

  constructor(private service:CustomerService) { 
    this.reloadCustomerList();
  }

  ngOnInit() {
  }
  customer_Id:number;
  name:string;
  email:string;
  address:string;
  mobile_No:string;
  password:string;


  customers: any;
  selectedCustomer: any = null;



  reloadCustomerList() {
    // observable
    var observableResponse = this.service.getCustomer();

    // to get the repsonse object from observable
    observableResponse.subscribe((response) => {
        var result = response.json();
         this.customers=result;
    });
}

deleteCusromer(id)
{
  
this.service.deleteCusromer(id).subscribe(
(response)=>
{
  var result=response.json();
  this.reloadCustomerList();
  alert('record is deleted');
})

}




editCustomer(customer) {
 this.selectedCustomer=customer;
 this.name=customer.name;
 this.email=customer.email;
 this.address=customer.address;
 this.password=customer.password;
 
}

updateCust() {
  this.service
      .updateCustomer(this.name,this.email,this.address,this.password,this.selectedCustomer.customer_Id)
      .subscribe(response => {
          var result = response.json();
         alert(result);
          this.selectedCustomer = null;
      })
}

cancelUpdate() {
  this.selectedCustomer = null;
}


}
