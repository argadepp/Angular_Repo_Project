import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css']
})
export class CallListComponent implements OnInit {

  constructor(private service:CustomerService) { }

     conId:any;
     callDetails:any;
     selectedConnection:any;
 
     dateOfCall:Date;
     callMadeNo:number;
     time:Time;
     duration=JSON.stringify(this.time);

     call_Id:number;
     connection_id:number;	


     getCallList()
     {
           
   // this.customer=conid;
   // alert(this.conId);
     var obs=this.service.getCallListByConId(this.conId);
     obs.subscribe(response=>
    {
     var result=response.json();
     //alert(result);
     this.callDetails=result;
    // alert(this.callDetails);
   // alert();
    });

     }



  ngOnInit() {
  }

}
