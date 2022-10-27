import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { deleteFromCartAction } from 'src/app/cart/store/actions/cart.action';
import { productsCartSelector } from 'src/app/cart/store/selectors';
import { cartMapped } from 'src/app/cart/types/cart.interface';

@Component({
  selector: 'ng-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice$: Observable<number>;
  cartMapped$: Observable<cartMapped>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.mappingCartObjectListener();
    this.calculateTotalPriceListener();
  }

  deleteFromCart(productId: number) {
    this.store.dispatch(deleteFromCartAction({productId: productId}))
  }

  mappingCartObjectListener(): void {
    this.cartMapped$ = this.store.pipe(
      select(productsCartSelector),
      map((prods) => prods.reduce((acc: cartMapped, prod) => {
        if (!acc[prod.id]) {
          acc[prod.id] = [prod];
        }
        acc[prod.id].push(prod);
        return acc
      }, {}))
    )
  }

  calculateTotalPriceListener(): void {
    this.totalPrice$ = this.store.pipe(
      select(productsCartSelector),
      map((prods) => prods.reduce((acc: number, product) => {
        const priceWithDiscount = product.price * (100 - product.discountPercentage)/100;
        acc += Math.ceil(priceWithDiscount);
        return acc
      }, 0))
    )
  }

}
