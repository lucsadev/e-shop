import { Tables } from "../database.types";

let products: Tables<'products'>;
export type ProductType = typeof products;

let categories: Tables<'categories'>;
export type CategoryType = typeof categories;

let inventory: Tables<'inventory'>;
export type InventoryType = typeof inventory;


export interface IProductsResponse {
    color: string | null;
    created_at: string;
    discount: number | null;
    id: string;
    images: string[] | null;
    product_id: string;
    size: string | null;
    stock: number;
    products: ProductType;
}
r