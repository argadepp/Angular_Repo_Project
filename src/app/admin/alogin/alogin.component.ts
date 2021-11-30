import { AdminService } from './../admin.service';
import { Router } from '@angular/router';
import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  constructor(private service:AdminService,private router:Router) { }
  id:number;
  password:number;


  login1() {
    this.service
    .login1(this.id, this.password)
    .subscribe( response => {
        var result = response.json();
 
        if( result != null ) {
           //  sessionStorage['ad_Id'] = result.id; 
           sessionStorage['ad_Id']= JSON.stringify(result);
            this.router.navigate(['/admin']);
            return true;
         } else {
            alert('invalid user name or password');
        }
           });
   }
  ngOnInit() {
  }

}
