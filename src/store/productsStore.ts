import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CategoryType, ProductType } from "../types/DB";
import { createSelectors } from "./createSelectors";
import { IProduct } from "@/src/types/models";

export interface IDataDB {
  products: IProduct[];
  categories: CategoryType[];
}

export const noFilterCategory = "00000000-0000-0000-0000-000000000000";

interface IState extends IDataDB {
  filterCategory: string;
  filterGender: string;
}

interface IActions {
  addProducts: ({ products, categories }: IDataDB) => void;
  setFilterCategory: (category: string) => void;
  toggleFilterGender: (gender: string) => void;
}

const INItIAL_STATE: IState = {
  products: [],
  categories: [],
  filterCategory: noFilterCategory,
  filterGender: "",
};

const productsStoreBase = create<IState & IActions>()(
  devtools((set, get) => ({
    ...INItIAL_STATE,
    addProducts: ({ products, categories }: IDataDB) => set({ products, categories }),
    setFilterCategory: (category: string) => set({ filterCategory: category }),
    toggleFilterGender: (gender: string) => set({ filterGender: gender === get().filterGender ? "" : gender }),
  }))
);

export const useProductsStore = createSelectors(productsStoreBase);
