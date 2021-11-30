import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:LoginService,private router:Router) { }


email:string;
mobile_No:string;
address:string;
password:string;
name:string;


  ngOnInit() {
  }


  save()
  {
    this.service.register(this.name,this.email,this.address,this.mobile_No,this.password)
    .subscribe(response => {
        var result = response.json();
          alert('registered sucessfully');
           //sessionStorage['login_status'] = 1;
           // this.router.navigate(['/home']);
          //  delay(10);
           this.router.navigate(['/cust']);
    });
  
  }



}
