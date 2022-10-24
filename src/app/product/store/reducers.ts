import { Action, createReducer, on } from '@ngrx/store';

import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction,
} from 'src/app/product/store/actions/getProduct.action';
import { ProductStateInterface } from 'src/app/product/types/productState.interface';

const initialState: ProductStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const productReducer = createReducer(
  initialState,
  on(
    getProductAction,
    (state): ProductStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getProductSuccessAction,
    (state, action): ProductStateInterface => ({
      ...state,
      isLoading: false,
      data: action.product,
    })
  ),
  on(
    getProductFailureAction,
    (state, action): ProductStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  )
);

export function reducers(state: ProductStateInterface, action: Action) {
  return productReducer(state, action);
}
