import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userProfileSelector } from 'src/app/auth/store/selectors';
import { NavigateBackService } from 'src/app/shared/services/navigate-back.service';
import { UserProfileInterface } from 'src/app/shared/types/userProfile.interface';

@Component({
  selector: 'ng-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile$: Observable<UserProfileInterface | null>

  constructor(private store: Store, private navigateBackService: NavigateBackService) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.userProfile$ = this.store.pipe(select(userProfileSelector))
  }

  navigateBack(): void {
    this.navigateBackService.goBack();
  }

}
