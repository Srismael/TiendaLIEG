import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavComponent } from 'src/app/components/nav/nav.component';

@Component({
    selector: 'app-history',
    templateUrl: './history.page.html',
    styleUrls: ['./history.page.scss'],
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavComponent]
})
export class HistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
