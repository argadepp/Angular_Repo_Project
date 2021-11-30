import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-list',
  templateUrl: './sms-list.component.html',
  styleUrls: ['./sms-list.component.css']
})
export class SmsListComponent implements OnInit {

  constructor(private service:CustomerService) { }

  smsDetails:any;
  selectedConnection:any;

  connection_Id:number;
  sms_Id:number;
  charges:number;
  smsMadeNo:number;
  conId:any;

  ngOnInit() {
  }




  getSmsList()
  {
        
// this.customer=conid;
// alert(this.conId);
  var obs=this.service.getSmsList(this.conId);
  obs.subscribe(response=>
 {
  var result=response.json();
  //alert(result);
  this.smsDetails=result;
 // alert(this.callDetails);
 });

  }




}
