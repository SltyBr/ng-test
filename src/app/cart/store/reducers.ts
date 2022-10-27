import { Action, createReducer, on } from '@ngrx/store';
import {
  addToCartAction,
  deleteFromCartAction,
} from 'src/app/cart/store/actions/cart.action';
import { CartStateInterface } from 'src/app/cart/types/cartState.interface';
import { ProductInterface } from 'src/app/shared/types/product.interface';

const initialState: CartStateInterface = {
  products: [] as ProductInterface[],
};

const cartReducer = createReducer(
  initialState,
  on(
    addToCartAction,
    (state, action): CartStateInterface => ({
      products: [...state.products, action.product],
    })
  ),
  on(deleteFromCartAction, (state, action): CartStateInterface => {
    const productIndex = state.products.findIndex(
      (prod) => prod.id === action.productId
    );
    const filteredProducts = state.products.filter(
      (prod, index) => index !== productIndex
    );
    return {
      products: filteredProducts,
    };
  })
);

export function reducers(state: CartStateInterface, action: Action) {
  return cartReducer(state, action);
}
