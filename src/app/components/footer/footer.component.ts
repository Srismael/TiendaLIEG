import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone : true,
  imports: [IonicModule,RouterLink]
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}