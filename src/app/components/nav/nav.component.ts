import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoIonic, home, cart, gameController, person, storefront } from 'ionicons/icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone : true,
  imports: [IonicModule, RouterLink ]
})
export class NavComponent  implements OnInit {

  constructor() {
    addIcons({ logoIonic, home, cart, gameController, person, storefront });
   }

  ngOnInit() {}

}
