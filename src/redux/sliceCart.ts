import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../services/api";

export interface ICart {
    isOpen: boolean;
    items: IProduct[];
}

const INITIAL_STATE: ICart = {
    isOpen: false,
    items: []
};

const sliceCart = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        toggleCart(state, { payload }: PayloadAction<undefined>) {
            return { ...state, isOpen: !state.isOpen };
        },
        addProduct(state, { payload }: PayloadAction<IProduct>) {
            return { ...state, items: [...state.items, payload] };
        },
        removeProduct(state, { payload }: PayloadAction<{ id: number; quantity?: number; }>) {
            const index = state.items.findIndex(x => x.id === payload.id);
            if (index >= 0) {
                state.items.splice(index, payload.quantity || 1);
            }
            return state;
        }
    }
});

export const { addProduct, toggleCart, removeProduct } = sliceCart.actions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCart = (state: any) => state.cart as ICart;
export default sliceCart.reducer;
