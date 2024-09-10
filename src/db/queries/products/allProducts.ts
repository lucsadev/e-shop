import { supabase } from "@/db/supabase";
import { ProductModel } from "@/models";
import { IDataDB } from "@/store";
import { IProductsResponse } from "@/types/DB";

export async function queryAllProducts(): Promise<IDataDB | null> {
  try {
    const { data: productsResponse, error: errorProduct } = await supabase
    .from("inventory")
    .select(`*, products(*)`);

    if (errorProduct) throw errorProduct;

    const products = productsResponse?.map((product) => ProductModel(product as IProductsResponse));

    const { data: categories, error: errorCategory } = await supabase.from("categories").select(`*`).order("id", { ascending: true });

    if (errorCategory) throw errorCategory;
   
    return {
      products,
      categories
    }

  } catch (error) {
    return null;
  }
}
