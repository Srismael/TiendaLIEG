import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { loginService } from 'src/app/services/login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavComponent]
})
export class ProfilePage implements OnInit {

  userData: any = null;

  constructor(private http: HttpClient, 
    private loginService: loginService,
    private router: Router) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const token = this.loginService.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.get('http://localhost:5000/user/profile', { headers }).subscribe(
        data => {
          this.userData = data;
        },
        error => {
          console.error('Error loading user data', error);
        }
      );
    }
  }
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);  // Navega a la página de login
  }

}
