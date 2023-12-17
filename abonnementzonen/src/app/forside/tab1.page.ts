

import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/database';
import { AuthService } from 'src/services/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  subscriptions: any[] = [];
  user: any;
  selectedSubscription: any ={};

  constructor(private subscriptionService: SubscriptionService, private authService: AuthService, private alertController: AlertController) {}

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
      },
      error => {
        console.error('Error deleting subscription:', error);
      }
    );
  }

  async AlertsetOpen(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Bekræft opsigelse',
      message: 'Du er ved at opsige dit abonnement.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Opsigelse annulleret');
          }
        },
        {
          text: 'Bekræft',
          handler: () => {
            this.onOpsigButtonClick();
          }
        }
      ]
    });

    await alert.present();
  }
  
  isModalOpen = false;


  setOpen(isOpen: boolean, subscription?: any): void {
    this.isModalOpen = isOpen;
    if (subscription) {
      this.selectedSubscription = subscription;
    }
  }

  onOpsigButtonClick(): void {
    const subscriptionToDelete = this.subscriptions.find(sub => sub.subscription_id === this.selectedSubscription.subscription_id);
  
    if (!subscriptionToDelete) {
      console.error('Subscription not found for deletion:', this.selectedSubscription.subscription_id);
      
      this.isModalOpen = false;
      
      return;
    }
  
    this.subscriptionService.deleteSubscription(subscriptionToDelete.subscription_id).subscribe(
      response => {
        console.log(response.message);
  
        this.subscriptions = this.subscriptions.filter(sub => sub.subscription_id !== subscriptionToDelete.subscription_id);
      },
      error => {
        console.error('Error deleting subscription:', error);
  
        console.log('Error response:', error);
      }
    );
  
    this.isModalOpen = false;
    console.log('Modal closed successfully');
  }
}

