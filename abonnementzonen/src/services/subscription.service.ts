import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionCreationService {
  private apiURL = environment.production ? 'https://eksamen2023.onrender.com/api' : 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  createSubscription(subscriptionData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/subscription`, subscriptionData);
  }

  getAllSubscriptions(): Observable<any[]> {
    console.log('hej');
    return this.http.get<any[]>(`${this.apiURL}/subscription`);
  }
}
