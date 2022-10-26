import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteFromCartAction } from 'src/app/cart/store/actions/cart.action';
import { productsCartSelector } from 'src/app/cart/store/selectors';
import { ProductInterface } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'ng-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products$: Observable<ProductInterface[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(productsCartSelector))
  }

  deleteFromCart(productId: number) {
    this.store.dispatch(deleteFromCartAction({productId: productId}))
  }

}
