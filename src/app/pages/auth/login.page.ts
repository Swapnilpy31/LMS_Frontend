import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  template: `
    <ion-header
      ><ion-toolbar><ion-title>Login</ion-title></ion-toolbar></ion-header
    >
    <ion-content class="ion-padding">
      <ion-item><ion-input placeholder="Email"></ion-input></ion-item>
      <ion-item
        ><ion-input type="password" placeholder="Password"></ion-input
      ></ion-item>
      <ion-button expand="block" (click)="login()">Login</ion-button>
    </ion-content>
  `,
  imports: [CommonModule, IonicModule],
})
export class LoginPage {
  constructor(private router: Router) {}

  login() {
    // auth logic here
    this.router.navigateByUrl('/dashboard');
  }
}
