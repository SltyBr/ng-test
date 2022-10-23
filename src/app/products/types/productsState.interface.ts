import { ProductsResponseInterface } from "src/app/products/types/productsResponse.interface";

export interface ProductsStateInterface {
  isLoading: boolean,
  error: string | null,
  products: ProductsResponseInterface | null
}