import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userProfileSelector } from 'src/app/auth/store/selectors';
import { UserProfileInterface } from 'src/app/shared/types/userProfile.interface';

@Component({
  selector: 'ng-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile$: Observable<UserProfileInterface | null>

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.userProfile$ = this.store.pipe(select(userProfileSelector))
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

}
