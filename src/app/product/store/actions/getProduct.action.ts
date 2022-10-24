import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/product/store/actionTypes';
import { ProductInterface } from 'src/app/shared/types/product.interface';

export const getProductAction = createAction(ActionTypes.GET_PRODUCT, props<{id: number}>());

export const getProductSuccessAction = createAction(
  ActionTypes.GET_PRODUCT_SUCCESS,
  props<{ product: ProductInterface }>()
);

export const getProductFailureAction = createAction(
  ActionTypes.GET_PRODUCT_FAILURE,
  props<{ error: string }>()
);
