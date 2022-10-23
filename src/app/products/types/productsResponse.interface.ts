import { ProductInterface } from "src/app/shared/types/product.interface";

export interface ProductsResponseInterface {
  products: ProductInterface[],
  total: number,
  skip: number,
  limit: number
}