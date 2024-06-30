import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  UniqueConstraintError,
  Read,
  Flower
} from './flower';
import { Observable } from 'rxjs';
import { reg } from './reg';
@Injectable({
  providedIn: 'root'
})
export class PesticideserviceService {
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:9000/';

  Insert(
    Details: Flower
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'op/Insert',
      Details,
      { headers: this.headers }
    );
  }

  Delete(id: String): Observable<InsertedSuccess | UniqueConstraintError> {
    console.log(`${this.url}op/Delete${id}`);
    return this.http.delete<InsertedSuccess | UniqueConstraintError>(
      `${this.url}op/Delete${id}`
    );
  }

  // Delete(id: String): Observable<InsertedSuccess | UniqueConstraintError> {
  //   console.log(`${this.url}op/Delete${id}`);
  //   return this.http.delete<InsertedSuccess | UniqueConstraintError>(
  //   `${this.url}op/Delete${id}`   
  //   );
  // }
  //  Read(Employee: String): Observable<Read> {
  //   return this.http.get<Read>(`${this.url}op/Read${Employee}`);
  //  }
  Read(id: String): Observable<any> {
    console.log(`${this.url}op/Read${id}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}op/Read${id}`
    );
  }
  Update(id: String, Details: Flower): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.put<InsertedSuccess | UniqueConstraintError>(`${this.url}op/Update${id}`, Details, {
      headers: this.headers,
    });
  }

  Insert1(
    Details: reg
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'register/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read1(id: String): Observable<any> {
    console.log(`${this.url}register/Read${id}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}register/Read${id}`
    );
  }
}



