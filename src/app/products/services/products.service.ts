import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponseInterface } from 'src/app/products/types/productsResponse.interface';
import { productsRoute } from 'src/environments/apiRoutesConfig';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(url: string): Observable<ProductsResponseInterface> {
    return this.httpClient.get<ProductsResponseInterface>(url)
  }
}
