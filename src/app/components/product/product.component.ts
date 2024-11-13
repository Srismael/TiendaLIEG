import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product/product.service';
import { provideHttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [] // Esto es correcto
})
export class ProductComponent implements OnInit {
  products: Product[] = []; // Arreglo para almacenar los productos

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res:any)=>{
      this.products = res;
    },(error)=>{
      console.error('Error featching products:' , error)

    })
  }
}
