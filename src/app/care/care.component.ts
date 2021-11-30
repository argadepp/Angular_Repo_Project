import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.css']
})
export class CareComponent implements OnInit {

  constructor(private service:LoginService) { }

  ngOnInit() {
  }

   care()
   {
     this.service.care();
   }
   
   
}
