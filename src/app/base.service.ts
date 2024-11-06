import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://172.16.16.148:6500/api/Aliens/"

  constructor(private http:HttpClient) { }

  getAliens(){
    return this.http.get(this.url)
  }
  postAlien(alien:any){
      return this.http.post(this.url,alien)
  }
  putAlien(alien:any){
      return this.http.put(this.url+alien.id,alien)
  }
  deleteAlien(alien:any){
      return this.http.delete(this.url+alien.id)
  }
}
