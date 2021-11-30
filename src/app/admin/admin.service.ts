import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(   private http: Http ,private router: Router) { }
  adminurl:string="http://localhost:8080/demo1/ad";


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage['ad_id'] != null ) {
        return true;
    }
    else  {
        this.router.navigate(['/adlogin']);
        return false;
    }
   
}



  public login1(id,password)
  {
    var body={
      id:id,
      password:password
    };

    var header = new Headers({'Content-Type': 'application/json'});
    var requestOption = new RequestOptions({headers: header});
   var response= this.http.post(this.adminurl, body, requestOption);
    return response;

  }
}
