import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping_cart/shopping_cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl = 'http://localhost:5000/shopping_carts';

  constructor(private http: HttpClient) {}

  /**
   * Añadir un producto al carrito.
   */
  addToCart(cartItem: ShoppingCart): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}`, cartItem);
  }

  /**
   * Obtener el carrito de un usuario por ID.
   */
  getCartByUser(id_user: string): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(`${this.apiUrl}/${id_user}`);
  }

  /**
   * Eliminar un producto del carrito por ID del carrito.
   */
  removeFromCart(cart_id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${cart_id}`);
  }

  clearCart(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clear/${userId}`);
  }
}
