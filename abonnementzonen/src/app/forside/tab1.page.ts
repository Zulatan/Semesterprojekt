/*import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

}*/

import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/database'; // Adjust the path
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  subscriptions: any[] = [];
  user: any;

  constructor(private subscriptionService: SubscriptionService, private authService: AuthService) {}

  ngOnInit() {
    console.log('Before Sequelize Query');
    this.subscriptionService.getAllSubscriptionsWithPayments().subscribe((data) => {
      console.log('Subscription with payments:', data);
      this.subscriptions = data;
    });

    this.authService.getUserData().subscribe((user) => {
      this.user = user;
    });
  }

  onDeleteButtonClick(subscriptionId: number): void {
    this.subscriptionService.deleteSubscription(subscriptionId).subscribe(
      response => {
        console.log(response.message);

        this.subscriptions = this.subscriptions.filter(sub => sub.subscription_id !== subscriptionId);
        // Optionally, update the subscriptions list or perform any other action
      },
      error => {
        console.error('Error deleting subscription:', error);
        // Handle error, if needed
      }
    );
  }



}

