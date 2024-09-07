import { useEffect, useState } from "react";
import { noFilterCategory, useProductsStore } from "../store";
import type { IProduct } from '@/src/types/models';

type filterType = {
  product: IProduct;
  filterCategory: string;
  filterGender: string;
};

const filter = ({ product, filterCategory, filterGender }: filterType): boolean => {
  let result = false;
  
  result = filterCategory !== noFilterCategory ? product.category === filterCategory : true;
  
  result = filterGender !== "" ? (product.gender === filterGender || product.gender === "Unisex") && result : result;
  
  return result;
};

export function useFilteredProducts(products: IProduct[]) {
  const filterCategory = useProductsStore.use.filterCategory();
  const filterGender = useProductsStore.use.filterGender();
  const toggleFilterGender = useProductsStore.use.toggleFilterGender();
  const [filtered, setFiltered] = useState<IProduct[] | null>(!!products.length ? products : null);

  useEffect(() => {
    filtered === null && setFiltered(products);
  },[filtered])

  useEffect(() => {
    setFiltered(products.filter((product) => filter({ product, filterCategory, filterGender })));
  }, [filterGender, filterCategory]);

  return {filtered}
}
