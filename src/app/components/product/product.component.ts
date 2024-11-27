import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping_cart/shopping-cart.service';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/models/product/product';
import { loginService } from 'src/app/services/login/login.service'; // Suponiendo que tienes un servicio de autenticación
import { CartProduct, ShoppingCart } from 'src/app/models/shopping_cart/shopping_cart';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ProductComponent implements OnInit {
  products: Product[] = []; // Arreglo para almacenar los productos

  constructor(
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private authService: loginService,
    private toastController: ToastController // Inyecta el ToastController
  ) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      (res: any) => {
        this.products = res;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  async addToCart(product: Product) {
    const userId = this.authService.getUserId(); // Obtener el ID del usuario autenticado
    if (!userId) {
      console.error('Usuario no autenticado');
      return;
    }
  
    // Crear el objeto CartProduct para este producto
    const cartProduct: CartProduct = {
      id_product: product._id!, // ID del producto
      quantity: 1, // Suponemos que es 1 producto, pero puedes cambiarlo si el usuario selecciona más cantidad
      price_per_unit: product.price, // Precio del producto
    };
  
    // Crear el objeto para agregar al carrito, ajustado al tipo ShoppingCart
    const cartItem: ShoppingCart = {
      _id: '', // Aquí deberías generar o asignar un ID único del carrito si es necesario
      id_cart: 'CART' + Math.random().toString(36).substring(2, 9), // Genera un ID de carrito aleatorio
      id_user: userId,
      products: [cartProduct], // Agrega el CartProduct al arreglo de productos
      total_cart: product.price, // Inicializa el total con el precio del producto
    };
  
    // Llamar al servicio para agregar el carrito
    this.cartService.addToCart(cartItem).subscribe(
      async () => {
        // Muestra el Toast de éxito
        const toast = await this.toastController.create({
          message: 'Producto agregado al carrito',
          duration: 2000,
          color: 'success',
        });
        toast.present();
      },
      async (error) => {
        // Muestra el Toast de error
        const toast = await this.toastController.create({
          message: 'Error al agregar el producto al carrito',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
        console.error('Error adding to cart:', error);
      }
    );
  }
  
}
