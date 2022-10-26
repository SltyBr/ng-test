import { Action, createReducer, on } from '@ngrx/store';

import {
  getProductFailureAction,
  getProductSuccessAction,
} from 'src/app/product/store/actions/getProduct.action';
import { ProductStateInterface } from 'src/app/product/types/productState.interface';

const initialState: ProductStateInterface = {
  error: null,
  data: null,
};

const productReducer = createReducer(
  initialState,
  on(
    getProductSuccessAction,
    (state, action): ProductStateInterface => ({
      ...state,
      data: action.product,
    })
  ),
  on(
    getProductFailureAction,
    (state, action): ProductStateInterface => ({
      ...state,
      error: action.error
    })
  )
);

export function reducers(state: ProductStateInterface, action: Action) {
  return productReducer(state, action);
}
