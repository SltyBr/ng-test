import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsStateInterface } from 'src/app/products/types/productsState.interface';

export const productsFeatureSelector =
  createFeatureSelector<ProductsStateInterface>('products');

export const isLoadingSelector = createSelector(
  productsFeatureSelector,
  (authState: ProductsStateInterface) => authState.isLoading
);

export const errorSelector = createSelector(
  productsFeatureSelector,
  (authState: ProductsStateInterface) => authState.error
);

export const productsSelector = createSelector(
  productsFeatureSelector,
  (authState: ProductsStateInterface) => authState.products
);
