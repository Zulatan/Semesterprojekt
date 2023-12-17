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
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  subscriptions: any[] = [];
  user: any;
  selectedSubscription: any ={}; // Add this property

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
        // Optionally, update the subscriptions list or perform any other action
      },
      error => {
        console.error('Error deleting subscription:', error);
        // Handle error, if needed
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

  onOpsigButtonClick(): void {
    // Handle subscription cancellation here
    // Call your service method to delete the subscription
    this.subscriptionService.deleteSubscription(this.selectedSubscription.subscription_id).subscribe(
      response => {
        console.log(response.message);
        this.isModalOpen = false; // Close the modal after cancellation
        // Optionally, update the subscriptions list or perform any other action
      },
      error => {
        console.error('Error deleting subscription:', error);
        // Handle error, if needed
      }
    );
  }
  
/* old
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
*/
  isModalOpen = false;


  setOpen(isOpen: boolean, subscription?: any): void {
    this.isModalOpen = isOpen;
    if (subscription) {
      this.selectedSubscription = subscription;
    }
  }
}

