import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ShoppingCartService } from 'src/app/services/shopping_cart/shopping-cart.service';
import { CartProduct, ShoppingCart } from 'src/app/models/shopping_cart/shopping_cart'; // Asegúrate de importar el modelo correcto
import { SalesControlService } from 'src/app/services/sales_control/sales-control.service';
import { SalesControl } from 'src/app/models/sales_control/sales_control';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonList, FooterComponent, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavComponent]
})
export class ShoppingCartPage implements OnInit {
  cartItems: ShoppingCart[] = [];  // Aquí almacenamos los carritos
  totalCart: number = 0; // Total del carrito

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.loadCart();  // Cargamos el carrito al iniciar
  }

  loadCart() {
    const userId = 'user_id_here';  // Obtén el ID del usuario autenticado
    this.cartService.getCartByUser(userId).subscribe(
      (cartArray: ShoppingCart[]) => {  // Asegúrate de que el tipo de 'cartArray' sea ShoppingCart[]
        this.cartItems = cartArray;
        this.calculateTotal();  // Calculamos el total del carrito
      },
      (error) => console.error('Error loading cart:', error)
    );
  }

  // Función para eliminar un producto de un carrito
  removeFromCart(cartId: string, productId: string) {
    const cart = this.cartItems.find(c => c.id_cart === cartId);  // Encontramos el carrito con el id correspondiente
    if (cart) {
      cart.products = cart.products.filter(product => product.id_product !== productId);  // Eliminamos el producto del carrito
      this.calculateTotal();  // Recalculamos el total después de eliminar un producto
    }
  }

  // Función para calcular el total del carrito
  calculateTotal() {
    this.totalCart = this.cartItems.reduce((total, cart) => {
      // Calculamos el total de todos los carritos
      return total + cart.products.reduce((cartTotal, product) => {
        return cartTotal + (product.price_per_unit * product.quantity);  // Calculamos el total de los productos en el carrito
      }, 0);
    }, 0);
  }

  // Lógica para proceder a la compra
  checkout() {
    console.log('Compra realizada');
  }
}
