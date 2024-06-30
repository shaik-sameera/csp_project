// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { reg } from '../reg';
import { PesticideserviceService } from '../pesticideservice.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  ngOnInit(): void { }
  constructor(private service: PesticideserviceService) { }
  Subscription: Subscription = new Subscription();
  user: reg = {
    e: '',
    p: '',
  }
  register(Form:NgForm) {
    this.Subscription = this.service.Insert1(Form.value).subscribe(
      (data) => {
      if (data) {
        console.log(data);
      }
      else {
        console.log("Failed");
      }
    })
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}