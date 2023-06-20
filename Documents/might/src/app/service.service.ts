import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient){ }

  registerData(data: any) {
    return this.http.post('https://layeronex-backend.seaswap.co:3003/api/v1/developer/signup',data);
  }
}
