import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartStateInterface } from 'src/app/cart/types/cartState.interface';

export const cartFeatureSelector =
  createFeatureSelector<CartStateInterface>('cart');

export const productsCartSelector = createSelector(
  cartFeatureSelector,
  (cartState: CartStateInterface) => cartState.products
);

export const emptyCartSelector = createSelector(
  cartFeatureSelector,
  (cartState: CartStateInterface) => cartState.products.length === 0
);