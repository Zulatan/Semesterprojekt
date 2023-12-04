import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})

export class SubscriptionService {
private app = initializeApp(environment.firebaseConfig);

private apiUrl = 'http://localhost:8080/api';

constructor(private http: HttpClient) {}

getSubscriptionOptions(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
}
}