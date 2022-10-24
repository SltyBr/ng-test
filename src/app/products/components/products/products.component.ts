import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProductsAction } from 'src/app/products/store/actions/getProducts.action';
import {
  errorSelector,
  isLoadingSelector,
  productsSelector,
} from 'src/app/products/store/selectors';
import { ProductsResponseInterface } from 'src/app/products/types/productsResponse.interface';
import { productsRoute } from 'src/environments/apiRoutesConfig';

@Component({
  selector: 'ng-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  products$: Observable<ProductsResponseInterface | null>;
  limit = 30;
  baseUrl: string;
  currentPage: number;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.products$ = this.store.pipe(select(productsSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1');
      this.fetchProducts();
    })
  }

  fetchProducts() {
    const skip = this.currentPage * this.limit - this.limit;
    const urlWithQuery = `${productsRoute}?skip=${skip}`
    this.store.dispatch(getProductsAction({url: urlWithQuery}));
  }
}
