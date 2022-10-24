import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProductAction } from 'src/app/product/store/actions/getProduct.action';

@Component({
  selector: 'ng-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeListeners()
  }

  initializeListeners(): void {
    this.route.params.subscribe((data: Params) => {
      const id = data['id'];
      this.store.dispatch(getProductAction({id: id}))
    })
  }

}
