import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'ng-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('product') productProps: ProductInterface

  ngOnInit(): void {
  }

}
