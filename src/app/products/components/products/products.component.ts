import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProductsAction } from 'src/app/products/store/actions/getProducts.action';
import { errorSelector, isLoadingSelector, productsSelector } from 'src/app/products/store/selectors';
import { ProductsResponseInterface } from 'src/app/products/types/productsResponse.interface';

@Component({
  selector: 'ng-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  products$: Observable<ProductsResponseInterface | null>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getProductsAction());
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.products$ = this.store.pipe(select(productsSelector))
  }

}
