import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Flower,
  UniqueConstraintError,
} from '../flower';
import { Subscription } from 'rxjs';
import {PesticideserviceService } from '../pesticideservice.service'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit, OnDestroy {
  constructor(private Service: PesticideserviceService) { }
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  User: Flower = {
    id: '',
    name: '',
    price: 0,
    qantity: 0,

  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Insert(this.User).subscribe(
      (data) => {
        if (data) {
          console.log(data);
          
        }
        else {
          console.log("Failed");
        }
      }
    )
  }

  // this.Subscription = this.Service.Insert(this.User).subscribe({
  //   next: (Data: InsertedSuccess | UniqueConstraintError) => {
  //     if ('errorNum' in Data) {
  //       this.ErrorMsg = `${this.User.p_id} alredy Exists`;
  //     } else {
  //       this.SuccessMsg = `${this.User.p_id} Inserted Succesfully`;
  //     }
  //   },
  //   error: (Error) => {
  //     console.log(Error);
  //   },
// });
//     // this the another syntax for the Subscribe Its advanced Handling everything
//   }

ngOnDestroy() {
  this.Subscription.unsubscribe();
}
}