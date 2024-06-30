// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterinterfaceService {

//   constructor() { }
// }

export interface Logininterface {
  e:string,
  p:string
}

export interface UniqueConstraintError {
  errorNum: Number;
  offset: Number;
}
export interface InsertedSuccess {
  lastRowId: string;
  rowsAffected: Number;
  Message:String;
}
export interface Read {
  Result: [];
}
