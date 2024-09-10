import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CategoryType, ProductType } from "../types/DB";
import { createSelectors } from "./createSelectors";
import { IProduct } from "@/types/models";

export interface IDataDB {
  products: IProduct[];
  categories: CategoryType[];
}

//export const noFilterCategory = "00000000-0000-0000-0000-000000000000";

interface IState extends IDataDB {
  filterGender: string;
  searchQuery: string;
}

interface IActions {
  addProducts: ({ products, categories }: IDataDB) => void;
  toggleFilterGender: (gender: string) => void;
  resetFilterGender: () => void;
  setSearchQuery: (query: string) => void;
}

const INItIAL_STATE: IState = {
  products: [],
  categories: [],
  filterGender: "",
  searchQuery: "",
};

const productsStoreBase = create<IState & IActions>()(
  devtools((set, get) => ({
    ...INItIAL_STATE,
    addProducts: ({ products, categories }: IDataDB) => set({ products, categories }),
    toggleFilterGender: (gender: string) => set({ filterGender: gender === get().filterGender ? "" : gender }),
    resetFilterGender: () => set({ filterGender: "" }),
    setSearchQuery: (query: string) => set({ searchQuery: query }),
  }))
);

export const useProductsStore = createSelectors(productsStoreBase);
