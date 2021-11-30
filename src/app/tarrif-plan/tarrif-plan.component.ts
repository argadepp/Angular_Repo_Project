import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarrif-plan',
  templateUrl: './tarrif-plan.component.html',
  styleUrls: ['./tarrif-plan.component.css']
})
export class TarrifPlanComponent implements OnInit {

  constructor(private service:CustomerService) {
      this.getPlans();
   }

   plan_Name:string;
   call_Charges:number;
   sms_Charges:number;

   plans:any;
   selectedPlan:any=null;
 

   getPlans() {
    // observable
    var observableResponse = this.service.getPlan();

    // to get the repsonse object from observable
    observableResponse.subscribe((response) => {
        var result = response.json();
         this.plans=result;
    });
}



  ngOnInit() {
  }

}
