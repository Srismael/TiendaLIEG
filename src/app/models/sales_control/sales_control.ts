export interface SalesControl {
  _id: string; // ID único de la venta
  id_sale: string; // Identificador de la venta (ej. SALE002)
  id_user: string; // ID del usuario que realiza la compra
  products_sales: ProductSale[]; // Array de productos vendidos
  total_sale: number; // Total de la venta
  payment: string; // Método de pago (ej. PayPal)
  shipping_status: string; // Estado del envío (Pendiente, Enviado, etc.)
  address: string; // Dirección de envío
  date_sale: string; // Fecha de la venta en formato ISO
}

// Modelo auxiliar para los productos vendidos
export interface ProductSale {
  id_product: string; // ID del producto
  quantity: number; // Cantidad comprada
  price_per_unit: number; // Precio por unidad
}

  