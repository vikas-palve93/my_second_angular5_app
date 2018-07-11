import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
 
  // Uses http.get() to load data from a single API endpoint
  getUser() {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
