import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-notification-settings-modal',
  templateUrl: './notification-settings-modal.component.html',
  styleUrls: ['./notification-settings-modal.component.scss']
})
export class NotificationSettingsModalComponent {
  // Use FormControl instead of a boolean
  public notificationEnabled = new FormControl(false);

  constructor(private modalController: ModalController) { }

  // Add this method to dismiss the modal
  dismiss() {
    this.modalController.dismiss({
      notificationEnabled: this.notificationEnabled.value,
    });
  }

  save() {
    this.modalController.dismiss({
      notificationEnabled: this.notificationEnabled.value,
    });
  }
}
