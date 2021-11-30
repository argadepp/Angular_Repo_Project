import { CustomerService } from './../customer.service';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-cust-data',
  templateUrl: './cust-data.component.html',
  styleUrls: ['./cust-data.component.css']
})
export class CustDataComponent implements OnInit {

  
  constructor(private service:CustomerService) { 

  }
  customer_Id:number;
  name:string;
  email:string;
  address:string;
  mobile_Id:string;
  password:string;

  selectedConnection:any;


  conList:any;
  tarrif_Plan: string;
  connection_Id: number;
  //customer_Id: number;
  status: string;

  customer:any;
  conid : any;
  selectedCustomer:any;

  getProfile()
  {
    
   // this.customer=conid;
   // alert(this.conid);
     var obs=this.service.getProfile(this.conid);
     obs.subscribe(response=>
    {
     var result=response.json();
     this.customer=result;
    // this.conList=this.customer.conList;
   //  alert(this.conList.tarrif_Plan);
     //alert(result);
    });

    
  }
      



  ngOnInit() {
  }

}
