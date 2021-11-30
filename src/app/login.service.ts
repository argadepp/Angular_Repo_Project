import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: Http ,private router: Router) { }




    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (sessionStorage['cust_id'] != null ) {
            return true;
        }
        else  {
            this.router.navigate(['/login']);
            return false;
        }
       
    }

    url:string="http://localhost:8080/demo1/login";
    url1:string="http://localhost:8080/demo1/register";
    url2:string="http://localhost:8080/demo1/payment";
    url4:string="https://selfcare.bsnl.co.in/tungsten/UI/facelets/login.xhtml";
    public login(email,password)
    {
      var body={
        email:email,
        password:password
      };
  
      var header = new Headers({'Content-Type': 'application/json'});
      var requestOption = new RequestOptions({headers: header});
     var response= this.http.post(this.url,body, requestOption);
      return response;
  
    }


    public register(name,email,address,mobile_No,password)
    {
      var body={
        name:name,
    email:email,
    address:address,
    mobile_No:mobile_No,
    password:password
        };
      var header = new Headers({'Content-Type': 'application/json'});
      var requestOption = new RequestOptions({headers: header});
    
      return this.http.post(this.url1,body, requestOption);
    
    }

 public save(name,email,address,mobile_Id,password)
{
  var body={
    name:name,
email:email,
address:address,
mobile_Id:mobile_Id,
password:password
    };
  var header = new Headers({'Content-Type': 'application/json'});
  var requestOption = new RequestOptions({headers: header});

  return this.http.post(this.url1,body, requestOption);

}


public pay(debit_card ,bank_name,cvv ,cust_id,amount){
           
  var body = {
      debit_card: debit_card,
      bank_name: bank_name,
      cvv: cvv,
      cust_id:cust_id,
      amount:amount
  };
  alert(body.amount);
  var header = new Headers({'Content-Type': 'application/json'});
  var requestOption = new RequestOptions({headers: header});

  return this.http.post(this.url2, body, requestOption);
 }



  public care()
  {
    var response=this.http.get(this.url4);
  }






}
