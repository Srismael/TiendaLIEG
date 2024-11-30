import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user/user';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // Método para enviar credenciales de login
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      tap((response: any) => {
        if (response.access_token) {
          sessionStorage.setItem('token', response.access_token); // Guarda el token en sessionStorage
        }
      })
    );
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token'); // Borra el token al cerrar sesión
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  getUserId(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      console.log('Decoded Token:', decodedToken); // Para verificar su contenido
      return decodedToken ? decodedToken.sub : null;
    }
    return null;
  }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);  // Decodifica el token y devuelve el contenido
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
