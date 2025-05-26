import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSpinner,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonSpinner, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('/auth/login'); // or /dashboard
    }, 2000); // 2 seconds
  }
}
 