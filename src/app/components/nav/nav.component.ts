import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone : true,
  imports: [IonicModule]
})
export class NavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
