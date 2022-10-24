import { ProductInterface } from 'src/app/shared/types/product.interface';

export interface ProductStateInterface {
  isLoading: boolean;
  error: string | null;
  data: ProductInterface | null;
}
