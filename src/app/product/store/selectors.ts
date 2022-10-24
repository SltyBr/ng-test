import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductStateInterface } from 'src/app/product/types/productState.interface';

export const productFeatureSelector =
  createFeatureSelector<ProductStateInterface>('product');

export const isLoadingSelector = createSelector(
  productFeatureSelector,
  (productState: ProductStateInterface) => productState.isLoading
);

export const errorSelector = createSelector(
  productFeatureSelector,
  (productState: ProductStateInterface) => productState.error
);

export const productSelector = createSelector(
  productFeatureSelector,
  (productState: ProductStateInterface) => productState.data
);
