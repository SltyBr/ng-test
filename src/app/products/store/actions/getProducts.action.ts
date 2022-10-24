import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/products/store/actionTypes';
import { ProductsResponseInterface } from 'src/app/products/types/productsResponse.interface';

export const getProductsAction = createAction(ActionTypes.GET_PRODUCTS, props<{url: string}>());

export const getProductsSuccessAction = createAction(
  ActionTypes.GET_PRODUCTS_SUCCESS,
  props<{ products: ProductsResponseInterface }>()
);

export const getProductsFailureAction = createAction(
  ActionTypes.GET_PRODUCTS_FAILURE
);