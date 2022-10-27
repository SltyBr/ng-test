import { ProductInterface } from "src/app/shared/types/product.interface";

export interface cartMapped {
  [key: number]: ProductInterface[];
}
