import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonInput, IonText, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { loginService } from 'src/app/services/login/login.service';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    imports: [RouterLink, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonItem, IonButton, IonInput, FooterComponent, IonFooter]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private LoginService: loginService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.LoginService.login(this.email, this.password).subscribe(
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
