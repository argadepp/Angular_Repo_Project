import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {
  }

  logout() {
    sessionStorage['cust_id'] = 0;
    sessionStorage['ad_id'] = 0;
    
    this.router.navigate(['/login']);
  }
}