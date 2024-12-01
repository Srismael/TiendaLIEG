import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping_cart/shopping-cart.service';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/models/product/product';
import { loginService } from 'src/app/services/login/login.service'; // Suponiendo que tienes un servicio de autenticación
import { CartProduct, ShoppingCart } from 'src/app/models/shopping_cart/shopping_cart';
import { UserService } from 'src/app/services/user/user.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/CartItem/cart-item';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    imports: [IonicModule, CommonModule],
    standalone: true
})
export class ProductComponent implements OnInit {
  products: Product[] = []; // Arreglo para almacenar los productos

  constructor(
    private productService: ProductService,
    private authService: loginService,
    private toastController: ToastController,
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProduct().subscribe(
      (res: any) => {
        this.products = res;  // Asignar los productos a la variable
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: Product) {
    // Crear un objeto CartItem para agregar al carrito
    const cartItem: CartItem = {
      id_product: product._id, // ID del producto desde la API
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1,  // Por defecto, agregar 1 unidad
      images: product.images || ['assets/placeholder.png'], // Usar una imagen por defecto si no existe
    };

    // Llamar al servicio para agregar el producto al carrito
    this.cartService.addToCart(cartItem);
    console.log('Producto agregado al carrito:', cartItem);
  }

  // Método para mostrar un mensaje de éxito con ToastController
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  /*async addToCart(product: Product) {
    console.log('Botón presionado', product);
    const userId = this.authService.getUserId();
    if (!userId) {
      console.error('Usuario no autenticado');
      return;
    }
  
    const cartProduct: CartProduct = {
      id_product: product._id!,
      quantity: 1,
      price_per_unit: product.price,
    };
  
    const cartItem: ShoppingCart = {
      _id: '',  // Asegúrate de que no sea necesario generar un ID aquí
      id_cart: 'CART' + Math.random().toString(36).substring(2, 9),
      id_user: userId,
      products: [cartProduct],
      total_cart: product.price,
    };
  
    console.log('Objeto a enviar al servidor:', cartItem);
  
    // Llamada al servicio para agregar el carrito
    this.cartService.addToCart(cartItem).subscribe(
      async () => {
        const toast = await this.toastController.create({
          message: 'Producto agregado al carrito',
          duration: 2000,
          color: 'success',
        });
        toast.present();
      },
      async (error) => {
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
  */
}
