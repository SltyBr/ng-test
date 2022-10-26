import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/cart/store/actionTypes';
import { ProductInterface } from 'src/app/shared/types/product.interface';

export const addToCartAction = createAction(ActionTypes.ADD_TO_CART, props<{product: ProductInterface}>());

export const deleteFromCartAction = createAction(ActionTypes.DELETE_FROM_CART, props<{productId: number}>());
