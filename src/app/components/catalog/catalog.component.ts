import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone : true,
  imports: [IonicModule]
})
export class CatalogComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
