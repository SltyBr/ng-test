import { ProductInterface } from 'src/app/shared/types/product.interface';

export interface ProductStateInterface {
  error: string | null;
  data: ProductInterface | null;
}
