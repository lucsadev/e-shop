
export interface IProduct {
    id: string;
    name: string;
    description: string | null;
    price: number;
    images: string[] | null;
    category: string | null;
    gender: string;
    inventory_id: string | null;
    color: string | null;
    size: string | null;
    discount: number | null;
    stock: number;
}