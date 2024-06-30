export interface Flower {
    id:String;
    name:String;
    price:Number;
    qantity:Number;

}
 export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
   }
   export interface InsertedSuccess {
     lastRowid: String;
     rowsAffected: Number;
   }
  export interface Read {
    Result: [];
  }
