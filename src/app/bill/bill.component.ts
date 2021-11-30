import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private service:CustomerService) { }
  id:number;
  charges:number 
  connection_Id:number;
  conId:any;
  billDatas:any;
  selectedBill:any;



  getbillList()
  {
        
// this.customer=conid;
// alert(this.conId);
  var obs=this.service.getBillListByConId(this.conId);
  obs.subscribe(response=>
 {
  var result=response.json();
  //alert(result);
  sessionStorage['amount1'] =  JSON.stringify(result);
  var amount1=sessionStorage['amount1'];
var amount=JSON.parse(amount1);
 // alert(amount[0].charges);
  this.billDatas=result;
  //alert('in side');
sessionStorage['amount']=amount[0].charges;
 })



 var ob=this.service.getTotlBill(this.conId);
  }
  ngOnInit() {
  }

}
