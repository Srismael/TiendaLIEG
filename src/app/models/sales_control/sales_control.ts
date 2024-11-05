export interface ProductSale {
    id_product: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface SalesControl {
    _id?: string;
    id_sale: string;
    id_user: string;
    products_sales: ProductSale[];
    total_sale: number;
    payment: string;
    shipping_status: string;
    address: string;
    date_sale: string;
  }
  