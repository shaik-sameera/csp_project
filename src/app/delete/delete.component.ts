
import { Component,OnInit,OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Flower,
  UniqueConstraintError,
} from '../flower';
import { Subscription } from 'rxjs';
import { PesticideserviceService } from '../pesticideservice.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  implements OnInit, OnDestroy{
  SuccessMsg = '';
  ErrorMsg = '';
  deletedMsg = '';
  errorMsg = '';
  constructor(private Service: PesticideserviceService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Flower = {
    id:'',
    name: '',
    price: 0,
    qantity: 0,
  };
  Delete(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Delete(this.User.id).subscribe(
      (data:any)=>{
        if(data){
          console.log(data);
          this.SuccessMsg = `SUCCESSFULLY DELETED`;
        }
        else{
          alert("failed");
          this.ErrorMsg = `${this.User.id} NO RECORD FOUND`;
         }
      }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
  