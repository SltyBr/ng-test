import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  isAnonymousSelector,
  isLoggedInSelector,
  userProfileSelector,
} from 'src/app/auth/store/selectors';
import { productsCartSelector } from 'src/app/cart/store/selectors';
import { AuthHelperService } from 'src/app/shared/services/authHelper.service';
import { ProductInterface } from 'src/app/shared/types/product.interface';
import { UserProfileInterface } from 'src/app/shared/types/userProfile.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ng-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthHelperService]
})
export class ToolbarComponent implements OnInit {
  projectName = environment.projectName;
  isLoggedIn$: Observable<boolean | null>;
  isAnonymous$: Observable<boolean | null>;
  userProfile$: Observable<UserProfileInterface | null>;
  productsCart$: Observable<ProductInterface[] | null>

  constructor(private store: Store, public authHelper: AuthHelperService) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.userProfile$ = this.store.pipe(select(userProfileSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.productsCart$ = this.store.pipe(select(productsCartSelector));
  }
}
