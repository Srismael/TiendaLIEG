import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonInput, IonText } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { loginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonItem, IonButton, IonInput]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private loginService: loginService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.loginService.login(this.email, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.access_token); // Guarda el token JWT
        this.router.navigate(['/home']); // Navega a la página principal tras el login
      },
      (error) => {
        console.error('Login fallido:', error);
        alert('Credenciales incorrectas. Intenta de nuevo.');
      }
    );
  }
}
