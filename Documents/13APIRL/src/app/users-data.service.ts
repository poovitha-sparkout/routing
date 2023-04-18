import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }
  ruby()
  {
    return this.http.get(`${enviroment.API_BASE_URL}/posts`);
  }
   datapost (data:any){
    return this.http.post(`${enviroment.API_BASE_URL}/posts`,data);
   }
   deletedata(id:any){
    return this.http.delete(`${enviroment.API_BASE_URL}/posts/${id}`);
   }
}


