import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonInput, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar,  IonItem, IonLabel, IonButton, IonThumbnail,  ToastController, IonicModule, IonSelect } from '@ionic/angular'; // Simplificado
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CartService } from 'src/app/services/cart.service'; // Asegúrate de que el CartService esté correctamente importado
import { CartItem } from 'src/app/models/CartItem/cart-item';
import { HttpErrorResponse } from '@angular/common/http';
import { SalesControlService } from 'src/app/services/sales_control/sales-control.service';
import { SalesControl } from 'src/app/models/sales_control/sales_control';
import { loginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [ CommonModule,FormsModule, IonicModule]
})
export class ShoppingCartPage implements OnInit {

  cartItems: CartItem[] = []; // Lista de productos en el carrito
  totalCart: number = 0;  // Total del carrito
  address: string = '';  // Dirección del usuario
  paymentMethod: string = 'PayPal';  // Método de pago seleccionado
  userId: string | null = '';  // Almacenamos el ID del usuario autenticado

  constructor(
    private cartService: CartService, 
    private salesControlService: SalesControlService,
    private toastController: ToastController,
    private loginService: loginService // Inyectamos el servicio de login
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();  // Cargar productos desde el servicio
    this.calculateTotal();  // Calcular el total del carrito
    console.log('Carrito cargado:', this.cartItems);
  }

  calculateTotal() {
    this.totalCart = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);  // Eliminar producto por ID
    this.loadCart();  // Recargar el carrito después de eliminar
  }

  async checkout() {
    // Obtener el ID del usuario autenticado usando loginService
    const userId = this.loginService.getUserId(); // Usamos getUserId() del loginService

    if (!userId) {
      const toast = await this.toastController.create({
        message: 'El usuario no está autenticado',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
      return;
    }

    // Construir el objeto para la API
    const saleData = {
      id_user: userId,  // Usamos el ID del usuario obtenido
      products_sales: this.cartItems.map(item => ({
        id_product: item.id_product,
        quantity: item.quantity,
        price_per_unit: item.price,
      })),
      total_sale: this.totalCart,
      payment: this.paymentMethod,  // Método de pago, puedes obtenerlo desde un campo del formulario
      address: this.address,  // Dirección, puedes obtenerla desde un campo del formulario
    };

    // Enviar los datos a la API
    this.salesControlService.createSale(saleData).subscribe(
      async (response: any) => {
        const toast = await this.toastController.create({
          message: 'Compra realizada con éxito',
          duration: 2000,
          color: 'success',
        });
        toast.present();

        // Limpiar el carrito
        this.cartService.clearCart();
        this.loadCart();
      },
      async (error: HttpErrorResponse) => {
        const toast = await this.toastController.create({
          message: 'Error al realizar la compra',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
        console.error('Error en el checkout:', error.message);
      }
    );
  }
}