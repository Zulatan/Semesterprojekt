import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { AlertController } from '@ionic/angular';
import { NotificationSettingsModalComponent } from '../notification-settings-modal/notification-settings-modal.component';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];


  constructor(private modalController: ModalController, private alertController: AlertController, private authService: AuthService, private router: Router, public photoService: PhotoService) {}

  logout() {
    this.authService.logout().then(() => {
      // Redirect or perform other actions after logout
      this.router.navigateByUrl('login')
    }).catch((error) => {
      console.error(error);
    });
  }
  async ngOnInit() {
    await this.photoService.loadSaved();
   } 

  //method to add a photo 
  addPhotoToGallery() {
   this.photoService.addNewToGallery();
  } 


  // Method to delete a photo
  async deletePhoto(photo: UserPhoto) {
    await this.photoService.deletePhoto(photo);
  }


  //alert log af
  async LogAfAlert() {
    const alert = await this.alertController.create({
      header: 'Log af',
      message: 'Du er i gang med at logge ud',
      buttons: [
        {
          text: 'Annuller',
          role: 'cancel'
        },
        {
          text: 'Bekræft',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }


  //alert log af
  async SletKontoAlert() {
    const alert = await this.alertController.create({
      header: 'Slet konto',
      message: 'Du er igang med at slette din konto',
      buttons: [
        {
          text:'Annuller',
          role: 'cancel'
        },
        {
          text: 'Bekræft'
        }
      ]
    });

    await alert.present();
  }


 //feedback alert
 async presentFeedbackAlert() {
  const alert = await this.alertController.create({
    header: 'Hjælp & feedback',
    message: 'Har du brug for hjælp eller har du lyst til at give feedback, så giv os venligst besked',
    inputs: [
      {
        placeholder: 'Navn',
      },

      {
        name: 'feedback',
        type: 'text',
        placeholder: 'Skriv din besked'
      }
    ],
    buttons: [
      {
        text: 'Annuller',
        role: 'cancel',
      },
      {
        text: 'Send',
      }
    ]
  });

  await alert.present();
}

  
  //modal til notifikationer
  async openNotificationSettingsModal() {
    const modal = await this.modalController.create({
      component: NotificationSettingsModalComponent,
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        console.log('Notification Enabled:', data.data.notificationEnabled);
      }
    });

    return await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

}
  

/*
  changeColorAndText() {
    const button = document.getElementById('minprofil-user-icon');

    // Array med forskellige farver
    const colors = ['#2d2d2d'];

    // Generer tilfældig farve
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Skift farve og tekst
    button.style.backgroundColor = randomColor;
    button.innerHTML = 'Ændre profilbillede';
  }
*/