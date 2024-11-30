import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = []; // Lista de productos en el carrito

  constructor() {
    this.loadCartFromLocalStorage();
  }

  loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        this.cartItems = JSON.parse(storedCart);
        console.log('Carrito cargado desde localStorage:', this.cartItems);
    }
}
   // Obtener los productos del carrito
   getCartItems(): CartItem[] {
    return this.cartItems; // Retornar los productos en el carrito
  }

   // Guardar carrito en localStorage
   saveCartToLocalStorage() {
    console.log('Guardando carrito en localStorage:', this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
}

  addToCart(product: CartItem) {
    const existingItem = this.cartItems.find(item => item.id_product === product.id_product);

    if (existingItem) {
        // Si el producto ya existe, aumentar la cantidad
        existingItem.quantity += 1;
    } else {
        // Si no existe, agregarlo al carrito
        this.cartItems.push(product);
    }

    this.saveCartToLocalStorage();  // Guardar el carrito actualizado
}

  getCart() {
    return this.cartItems; // Devolver los productos en el carrito
  }

  removeFromCart(id_product: string) {
    const index = this.cartItems.findIndex(item => item.id_product === id_product); // Buscar el índice del producto por id_product
    if (index !== -1) {
      this.cartItems.splice(index, 1); // Eliminar el producto del carrito
      this.saveCartToLocalStorage(); // Guardar los cambios en localStorage
    }
  }

  clearCart() {
    this.cartItems = []; // Vaciar el carrito
    this.saveCartToLocalStorage(); // Guardar el carrito vacío en localStorage
  }
}
