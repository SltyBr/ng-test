import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'ng-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input('product') productProps: ProductInterface;
  @Output() addProductToCart = new EventEmitter<ProductInterface>();

  ngOnInit(): void {}

  handleAddToCart(product: ProductInterface) {
    this.addProductToCart.emit(product)
  }
}
