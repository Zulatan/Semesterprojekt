import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public photoService: PhotoService) { }

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