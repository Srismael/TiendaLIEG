import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonFooter, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [FooterComponent, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavComponent]
})
export class CartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
