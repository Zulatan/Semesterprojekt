import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createSubscription(subscriptionData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/subscription`, subscriptionData);
  }

  getAllSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/subscription`);
  }
}
