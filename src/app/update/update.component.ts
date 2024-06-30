import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Flower,
  UniqueConstraintError
} from '../flower';
import { Subscription } from 'rxjs';
//import { CrudoperationService } from './crudoperation.service';
import { PesticideserviceService } from '../pesticideservice.service';
//import { CurrencyPipe } from '@angular/common';
//import { CRUDService } from '../crudoperation.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy {
  constructor(private Service: PesticideserviceService) { }
  a=[];
  ngOnInit() { }
  canshowData = false;
  Subscription: Subscription = new Subscription();
  User: Flower = {
    id: '',
    name: '',
    price: 0,
    qantity: 0
  };

  SuccessMsg = '';
  ErrorMsg = '';
  Read() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Read(this.User.id).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          //document.write('Succesfully read');
          //console.log(data);
          //document.write('Succesfully deleted');
          console.log(data.Result)
          this.a = data.Result[0];
          console.log(this.a);
          this.canshowData = true;
          this.User = {
            id: this.a[0],
            name: this.a[1],
            price: this.a[2],
            qantity: this.a[3]
          };

        }

        else {
          console.log("Failed");
        }
      }
    )
  }

  Update() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    //alert("Updated Successfully");
    this.Subscription = this.Service.Update(this.User.id, this.User).subscribe(
      (data:InsertedSuccess | UniqueConstraintError) => {
        if ( "errorNum" in data) {
          
          //document.write('Succesfully Updated');
         this.ErrorMsg=data.errorNum.toString();
       

        }
        else {
          this.SuccessMsg="successfully Updated";
          this.canshowData = false;
        }
      }
    )
  }
  Cancel()
  {
    this.canshowData = false;

  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}


