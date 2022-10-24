import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProductAction } from 'src/app/product/store/actions/getProduct.action';
import { productSelector } from 'src/app/product/store/selectors';
import { NavigateBackService } from 'src/app/shared/services/navigate-back.service';
import { ProductInterface } from 'src/app/shared/types/product.interface';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'ng-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  product$: Observable<ProductInterface | null>;

  constructor(private store: Store, private route: ActivatedRoute, private navigateBackService: NavigateBackService) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.route.params.subscribe((data: Params) => {
      const id = data['id'];
      this.store.dispatch(getProductAction({id: id}))
    })
  }

  initializeValues(): void {
    this.product$ = this.store.pipe(select(productSelector));
  }

  navigateBack() {
    this.navigateBackService.goBack();
  }
}
