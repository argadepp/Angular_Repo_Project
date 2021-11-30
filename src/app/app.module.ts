import { AdminService } from './admin/admin.service';
import { LoginService } from './login.service';
import { CustomerService } from './customer.service';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustDataComponent } from './cust-data/cust-data.component';
import { CustListComponent } from './cust-list/cust-list.component';
import { TarrifPlanComponent } from './tarrif-plan/tarrif-plan.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login1/login1.component';
import { BillComponent } from './bill/bill.component';
import { CallListComponent } from './call-list/call-list.component';
import { ConnectionComponent } from './cust-data/connection/connection.component';
import { AloginComponent } from './admin/alogin/alogin.component';
import { SmsListComponent } from './sms-list/sms-list.component';
import { PaymentComponent } from './payment/payment.component';
import { DebitComponent } from './debit/debit.component';
import { CareComponent } from './care/care.component';
import { CreditComponent } from './credit/credit.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    CustDataComponent,
    CustListComponent,
    TarrifPlanComponent,
    AdminComponent,
    LoginComponent,
    BillComponent,
    CallListComponent,
    ConnectionComponent,
    AloginComponent,
    SmsListComponent,
    PaymentComponent,
    DebitComponent,
    CareComponent,
    CreditComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([ 
       {path:'register' ,component:RegisterComponent} ,
      
       {path:'home' ,component:HomeComponent} ,
       {path:'list' ,component:CustListComponent} ,
       {path:'admin' ,component:AdminComponent} ,
       {path:'plans' ,component:TarrifPlanComponent,canActivate:[LoginService]} ,
       {path:'cust' ,component:CustDataComponent,canActivateChild:[LoginService]} ,
       {path:'callDetail' ,component:CallListComponent} ,
       {path:'smsDetail' ,component:SmsListComponent} ,
       {path:'billllDetail' ,component:BillComponent} ,
       {path:'adlogin' ,component:AloginComponent} ,
       {path:'pay' ,component:PaymentComponent,canActivate:[LoginService]} ,
       {path:'debit' ,component:DebitComponent} ,
       {path:'care' ,component:CareComponent} ,
       {path:'credit' ,component:CreditComponent} ,
       
      
       
       {path:'login' ,component:LoginComponent} ,
       {path:'**' ,component:HomeComponent,canActivate:[AdminService]} ,
      
             
    ])
  
  ],
  providers: [CustomerService 
  ,LoginService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
