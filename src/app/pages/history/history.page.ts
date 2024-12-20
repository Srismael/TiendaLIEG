import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton } from '@ionic/angular/standalone';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [IonButton, IonImg, IonContent,  CommonModule, FormsModule, NavComponent, FooterComponent]
})
export class HistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
