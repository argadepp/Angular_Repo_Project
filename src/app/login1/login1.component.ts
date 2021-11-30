import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login1.component.html',
    styleUrls: ['./login1.component.css']
})
export class LoginComponent implements OnInit {
    email:string;
    customer_Id:number;
    mobile_No:number;
    address:string;
    password:string;
    name:string;
    constructor(private service: LoginService, private router: Router) { 

    }
    login() {
        this.service
        .login(this.email, this.password)
        .subscribe( response => {
            var result = response.json();
            if( result != 0 ) {
                sessionStorage['customer'] =  JSON.stringify(result);
                 sessionStorage['cust_id'] = result.customer_Id; 
                 this.router.navigate(['/cust']);
                return true;
             } else {
                alert('invalid user name or password');
            }
               });
       }
       register(){
        this.router.navigate(['/register']);
       }
    ngOnInit(): void { }
}