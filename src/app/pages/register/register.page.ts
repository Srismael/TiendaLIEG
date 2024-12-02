import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonFooter, IonButton, IonItem, IonLabel, IonSelectOption, IonicModule, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink, Router } from '@angular/router';
import { loginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    
    FooterComponent
  ]
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: loginService,
    private router: Router
  ) {
    // Configuración del formulario con validadores
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
      rol: ['Usuario'], // Valor predeterminado
      address: ['', Validators.required],
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Valores del formulario:', this.registerForm.value);

    if (this.registerForm.valid) {
      const user: User = this.registerForm.value; // Mapeo del formulario a la interfaz User

      this.loginService.register(user).subscribe({
        next: (response) => {
          console.log('Usuario registrado:', response);
          alert('Usuario registrado exitosamente');
          this.router.navigate(['/login']); // Redirige al login después del registro
        },
        error: (err) => {
          console.error('Error al registrar usuario:', err);
          if (err.status === 409) {
            alert('El email ya está registrado.');
          } else {
            alert('Hubo un problema al registrar el usuario.');
          }
        },
      });
    } else {
      console.error('Formulario inválido:', this.registerForm.errors);
    }
  }
}
