export interface SalesControl {
  _id?: string; // ID único generado automáticamente por MongoDB (opcional al crear una venta)
  id_user: string; // ID del usuario que realiza la compra
  products_sales: ProductSale[]; // Array de productos vendidos
  total_sale: number; // Total de la venta
  payment: string; // Método de pago (ej. PayPal)
  shipping_status?: string; // Estado del envío (Pendiente, Enviado, etc.)
  address: string; // Dirección de envío
  date_sale?: Date; // Fecha de la venta en formato Date (opcional al crear)
}

export interface ProductSale {
  id_product: string; // ID del producto
  quantity: number; // Cantidad comprada
  price_per_unit: number; // Precio por unidad
}
