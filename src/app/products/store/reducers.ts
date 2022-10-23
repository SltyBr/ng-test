import { Action, createReducer, on } from '@ngrx/store';
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from 'src/app/products/store/actions/getProducts.action';
import { ProductsStateInterface } from 'src/app/products/types/productsState.interface';

const initialState: ProductsStateInterface = {
  isLoading: false,
  error: null,
  products: null
};

const productsReducer = createReducer(
  initialState,
  on(
    getProductsAction,
    (state): ProductsStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    getProductsSuccessAction,
    (state, action): ProductsStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
      products: action.products
    })
  ),
  on(
    getProductsFailureAction,
    (state): ProductsStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
    })
  )
);

export function reducers(state: ProductsStateInterface, action: Action) {
  return productsReducer(state, action)
}