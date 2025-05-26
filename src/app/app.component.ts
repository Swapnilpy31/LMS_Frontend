import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [IonicModule, RouterModule.forRoot(routes)],
//   template: '<ion-app><router-outlet></router-outlet></ion-app>',
// })
// export class AppComponent {}