import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getName() {
    return this.http.get<any>('http://localhost/api/listName')
  }

  postName(data) {
    return this.http.post<any>('http://localhost/api/listName', data)
  }

  updateName(data) {
    return this.http.put<any>('http://localhost/api/listName/' + data.id, data)
  }

  deleteName(data) {
    console.log(data)
    return this.http.delete<any>('http://localhost/api/listName/' + data.id)
  }

}
