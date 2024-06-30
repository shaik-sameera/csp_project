import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { reg } from '../reg';
import { PesticideserviceService } from '../pesticideservice.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  ngOnInit(): void { }
  readarray = [];
  error = false;

  user: reg = {
    e: '',
    p: ''
  }
  constructor(private service: PesticideserviceService, private router: Router) { }
  Subscription: Subscription = new Subscription();
  Read() {
    this.Subscription = this.service.Read1(this.user.e).subscribe(
      (data: any) => {
        this.readarray = data.Result[0];
        console.log(this.readarray);
        if (data.Result[0]) {
          if (this.readarray[1] == this.user.p) {
            this.router.navigate(['/main']);
          }
          else {
            this.error = true;
          }
        }
        else {
          this.error = true;

        }
      })
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}