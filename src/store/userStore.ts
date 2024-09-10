import { create } from "zustand";
import { createSelectors } from "./createSelectors";


interface IState {
    isAuthenticated: boolean
    user: any
}

interface IActions {    
    setUser: (user: any) => void
}

const INItIAL_STATE: IState = {
    isAuthenticated: false,
    user: null
}

const userStoreBase = create<IState & IActions>()((set) => ({
    ...INItIAL_STATE,
    setUser: (user) => set({ user, isAuthenticated: true }),    
}))

export const useUserStore = createSelectors(userStoreBase)