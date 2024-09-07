import { IProductsResponse } from "../types/DB";
import { IProduct } from "../types/models";

export const ProductModel = (inventory: IProductsResponse): IProduct => ({
  id: inventory.products.id,
  name: inventory.products.name,
  description: inventory.products.description || null,
  price: inventory.products.price,
  images: inventory.images || null,
  category: inventory.products.category_id || null,
  gender: inventory.products.gender,
  inventory_id: inventory.id,
  color: inventory.color,
  size: inventory.size,
  discount: inventory.discount,
  stock: inventory.stock
});
