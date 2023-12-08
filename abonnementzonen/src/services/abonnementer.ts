import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api';


@Injectable({
    providedIn: 'root',
  })
  export class SubscriptionService {
    // private apiUrl = 'http://localhost:8080/api/'; // Adjust the URL to your MySQL backend
  
    constructor(private http: HttpClient) {}
  
    getAllSubscriptions(): Observable<any[]> {
      return this.http.get<any[]>(`${baseUrl}`);
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

    //Update a sub
    updateSubscription(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/subscription/${id}`, data);
    }
  }
