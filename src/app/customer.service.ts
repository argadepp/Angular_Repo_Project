import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService  implements CanActivate {

  constructor(private http:Http,private router:Router) { }

url:string="http://localhost:8080/demo1/login";
url1:string="http://localhost:8080/demo1/register";
url2:string="http://localhost:8080/demo1";

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  if (sessionStorage['login_status'] == 1) {
      return true;
  }
  
  this.router.navigate(['/register']);
  return false;
}


public getCustomer()
{
  var listUrl=this.url2+"/"+"customerList";
  var responce=this.http.get(listUrl);
 return responce;

}

public getPlan()
{
  var planUrl="http://localhost:8080/demo1/tarrifList";
  var response=this.http.get(planUrl);
  return response;
}



public deleteCusromer(id)
{
  var deleteUrl=this.url2+"/"+"deleteCust"+"/"+id;
  var response=this.http.delete(deleteUrl);
  return response;
}

public getProfile(id)
{
  var profileUrl="http://localhost:8080/demo1/profileCust"+"/"+id;
  var response=this.http.get(profileUrl);
  return response;
}


public getCallListByConId(id)
{
  var callUrl="http://localhost:8080/demo1"+"/"+"callList"+"/"+id;
  var response=this.http.get(callUrl);
  //alert('in service');
  return response;
}

public getSmsList(id)
{
  var callUrl="http://localhost:8080/demo1"+"/"+"smsList"+"/"+id;
  var response=this.http.get(callUrl);
  return response;
}
public getBillListByConId(id)
{
  var callUrl="http://localhost:8080/demo1"+"/"+"billList"+"/"+id;
  var response=this.http.get(callUrl);
  return response;
}


public getTotlBill(id)
{
  var callUrl="http://localhost:8080/demo1"+"/"+"getBillCharges"+"/"+id;
  var response=this.http.get(callUrl);
  return response;
}


public updateCustomer(name: string, email: string, address:string,password:string,id:number) {
  var updateUrl = this.url2+"/"+"update"+"/"+id;
  var body = {
   "name":name,
   "email":email,
   "address":address,
   "password":password
  };

  var header = new Headers({'Content-type': 'application/json'});
  var requestOption = new RequestOptions({headers: header});

  return this.http.put(updateUrl, body, requestOption);
}







}
