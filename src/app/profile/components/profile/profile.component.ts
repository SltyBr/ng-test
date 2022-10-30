import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getUserProfileAction } from 'src/app/auth/store/actions/getUserProfile.action';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import { userProfileSelector } from 'src/app/auth/store/selectors';
import { UserProfileInterface } from 'src/app/shared/types/userProfile.interface';

@Component({
  selector: 'ng-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  userProfile$: Observable<UserProfileInterface | null>
  userProfileSubscription: Subscription;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getUserProfileAction());
    this.userProfile$ = this.store.pipe(select(userProfileSelector))
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  logout(): void {
    this.store.dispatch(logoutAction())
  }

}
