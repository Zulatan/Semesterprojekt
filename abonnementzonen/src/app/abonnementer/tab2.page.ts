import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private apiURL = '';

  constructor(private modalController: ModalController, private http: HttpClient) {}

  subscription: any = {
    subscription_id: null,
    title: '',
    price: '',
    startdate: '',
    category: '',
    image: '',
    cycle: '',
    subscriptionplan: '',
    nextpayment: '',
    user_id: null
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveSelectedOption() {
    // Close the modal
    this.closeModal();
  }


  // onSubscriptionSubmit() {
  //     // Make HTTP POST request to your Node.js server
  //     this.http.post('http://localhost:8080/api/subscription')
  //       .subscribe(response => {
  //         console.log('Registration successful', response);
  //         // You can handle success, navigate to another page, etc.
  //       }, error => {
  //         console.error('Registration failed', error);
  //         // Handle the error, show a message to the user, etc.
  //       });
  //   }
}
