export interface ShoppingCart {
  _id: string; // ID único del carrito
  id_cart: string; // Identificador del carrito (ej. CART002)
  id_user: string; // ID del usuario propietario del carrito
  products: CartProduct[]; // Array de productos en el carrito
  total_cart: number; // Total del carrito
}

// Modelo auxiliar para los productos del carrito
export interface CartProduct {
  id_product: string; // ID del producto
  quantity: number; // Cantidad añadida al carrito
  price_per_unit: number; // Precio por unidad del producto
}
