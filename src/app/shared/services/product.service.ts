import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/shared/types/product.interface';
import { productRoute } from 'src/environments/apiRoutesConfig';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProduct(id: number): Observable<ProductInterface> {
    const url = productRoute(id);
    return this.httpClient.get<ProductInterface>(url)
  }
}
