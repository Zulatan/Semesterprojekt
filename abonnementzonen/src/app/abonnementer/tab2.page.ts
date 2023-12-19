import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
import { SubscriptionService } from 'src/services/subscription.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  private apiURL = '';

  user: any;

  constructor(
    private modalController: ModalController, 
    private http: HttpClient, 
    private authService: AuthService, 
    private subscriptionService: SubscriptionService
    ) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((user) => {
      this.user = user;
    });

    this.fetchSubscriptions();
  }

  subscription: any = {
    subscription_id: null,
    title: '',
    startdate: new Date().toISOString(),
    category: '',
    image: '',
    cycle: '',
    subscriptionplan: '',
    nextpayment: '',
    user_id: null,
    payment: {
      price: '',
      nextpayment: '',
      cycle: '',
    },
  };

  subscriptions: any[] = [];


  isModalOpen = false;

  
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveSelectedOption() {
    // our subscription create service
    this.subscriptionService.createSubscription(this.subscription)
      .subscribe(response => {
        console.log('Subscription saved successfully', response);

        this.closeModal();

        // resets the subscription object after successfully saving
        this.subscription = {
          subscription_id: null,
          title: '',
          startdate: new Date().toISOString(),
          category: '',
          image: '',
          cycle: '',
          subscriptionplan: '',
          nextpayment: '',
          user_id: null,
          payment: {
            price: '',
            nextpayment: null,
            cycle: '',
          },
        };

        // Fetch all subscriptions again to update the displayed list
        this.fetchSubscriptions();
      }, error => {
        console.error('Failed to save subscription', error);
      });
  }


  // Fetch all subscriptions and display them
  fetchSubscriptions() {
    this.subscriptionService.getAllSubscriptions()
      .subscribe(subscriptions => {
        console.log('All subscriptions', subscriptions);
        this.subscriptions = subscriptions; // Update the property
      }, error => {
        console.error('Failed to fetch subscriptions', error);
        // Handle the error, show a message to the user, etc.
      });
  }

}
