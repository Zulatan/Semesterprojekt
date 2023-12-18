import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { PhotoService, UserPhoto } from '../services/photo.service'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private authService: AuthService, private router: Router, public photoService: PhotoService) {}
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

  // Method to get styles dynamically
  getImageStyles() {
    // Replace these with the actual styles you want to set dynamically
    const width = '100%';
    const maxWidth = '300px';
    const borderRadius = '200px';
    const boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    const backgroundColor = 'rgb(0, 97, 154)';

    return {
      width,
      'max-width': maxWidth,
      'border-radius': borderRadius,
      'box-shadow': boxShadow,
      'backgroundcolor': backgroundColor,
    };
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