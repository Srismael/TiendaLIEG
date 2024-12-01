import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductComponent } from "../../components/product/product.component";
import { NavComponent } from 'src/app/components/nav/nav.component';


@Component({
    selector: 'app-store',
    templateUrl: './store.page.html',
    styleUrls: ['./store.page.scss'],
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProductComponent, NavComponent]
})
export class StorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
