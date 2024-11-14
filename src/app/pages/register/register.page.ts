import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonSelectOption, IonFooter, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonFooter, IonButton, IonSelectOption, ReactiveFormsModule, FooterComponent]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

