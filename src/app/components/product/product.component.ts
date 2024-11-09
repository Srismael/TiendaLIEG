import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product/product.service';
import { provideHttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product/product';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, NavComponent],
  providers: [] // Esto es correcto
})
export class ProductComponent implements OnInit {
  products: Product[] = []; // Arreglo para almacenar los productos

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: (data: Product[]) => this.products = data,
      error: (error) => console.error('Error fetching products:', error)
    });
  }
}
