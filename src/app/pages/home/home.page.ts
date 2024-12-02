import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavComponent } from "../../components/nav/nav.component";
import { ProductComponent } from "../../components/product/product.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    imports: [IonContent,  CommonModule, FormsModule, FooterComponent, NavComponent, ]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
