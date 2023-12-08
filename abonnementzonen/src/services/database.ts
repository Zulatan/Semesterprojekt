/*import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class SubscriptionService {
    private apiUrl = 'http://localhost:8080/api/subscription'; // Adjust the URL to your MySQL backend
  
    constructor(private http: HttpClient) {}
  
    getAllSubscriptions(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}`);
    }
  }


/*@Injectable({
    providedIn: 'root',
})*/

/*export class SubscriptionService {
private app = initializeApp(environment.firebaseConfig);

export class SubscriptionService {
    private apiUrl = 'http://localhost:8080/api/subscription';

private apiUrl = 'http://localhost:8080/api';

constructor(private http: HttpClient) {}

getSubscriptionOptions(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
}
}*/

