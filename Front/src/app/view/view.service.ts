import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient) { }

  getName() {
    return this.http.get<any>('http://localhost/api/listName')
  }

}
