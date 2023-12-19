import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.production ? 'https://eksamen2023.onrender.com/api' : 'http://localhost:8080/api'

@Injectable({
    providedIn: 'root',
  })
  export class SubscriptionService {
    private apiUrl = environment.production ? 'https://eksamen2023.onrender.com/api/subscription' : 'http://localhost:8080/api/subscription'
  
    constructor(private http: HttpClient) {}
  
    getAllSubscriptions(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}`);
    }

// Update subscription details only
updateSubscription(subscriptionId: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${subscriptionId}`, updatedData);
  }

// Update both subscription and payment details
updateSubscriptionAndPayment(subscriptionId: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${subscriptionId}`, updatedData);
  }
/*
    getAllSubscriptionsWithPayments(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/all-with-payments`); // Adjust the endpoint
    }
*/

    getAllSubscriptionsWithPayments(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/all-with-payments`);
        /*router.get("/subscription/all-with-payments", subscription.findAllWithPayments);*/
    }

    //Create sub
    createSubscription(data: any): Observable<any> {
        return this.http.post<{ message: string }>(baseUrl + '/subscription', data);
    }

    //GetAll subs
    getAllSubscription(): Observable<any[]> {
        return this.http.get<any[]>(baseUrl + '/subscription');
    }

    //Get a single sub
    getSubscription(id: any): Observable<any> {
        return this.http.get(`${baseUrl}/subscription/${id}`);
    }

    //Delete a sub
    deleteSubscription(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}/subscription/${id}`);
    }
}