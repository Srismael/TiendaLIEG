// Definir una interfaz para los productos en el carrito
export interface CartItem {
    id_product: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    images: string[];
  }
  