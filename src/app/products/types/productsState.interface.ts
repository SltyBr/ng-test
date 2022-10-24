import { ProductsResponseInterface } from "src/app/products/types/productsResponse.interface";

export interface ProductsStateInterface {
  error: string | null,
  products: ProductsResponseInterface | null
}