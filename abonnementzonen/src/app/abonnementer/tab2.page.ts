import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private apiURL = '';

  constructor(private modalController: ModalController) {}

  selectedData: any = {
    selectedOption: null,
  };

  selectKategoriOptions = [
    { value: 'streamingtjeneste', label: 'Streamingtjeneste' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'forsikring', label: 'Forsikring' },
    { value: 'el', label: 'El' },
    { value: 'andet', label: 'Andet' },
  ];

  selectPlatformOptions = [
    { value: 'streamingtjeneste', label: 'Netflix' },
    { value: 'streamingtjeneste', label: 'HBO MAX' },
    { value: 'streamingtjeneste', label: 'Disney +' },
    { value: 'streamingtjeneste', label: 'Viaplay' },
    { value: 'streamingtjeneste', label: 'TV2 Play' }
  ];

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveSelectedOption() {
    // Do something with the selected option
    console.log('Selected Option:', this.selectedData.selectedOption);

    // Close the modal
    this.closeModal();
  }
}
