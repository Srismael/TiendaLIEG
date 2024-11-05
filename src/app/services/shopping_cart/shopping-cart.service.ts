import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping_cart/shopping_cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<ShoppingCart[]>{
    return this.http.get<ShoppingCart[]>(`${this.apiUrl}/ShoppingCart`);
  }
}
