import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salePrice'
})
export class SalePricePipe implements PipeTransform {

  transform(price: number, discountPercentage: number): number {
    return price * (100 - discountPercentage)/100;
  }

}
