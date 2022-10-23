import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector, userProfileSelector } from 'src/app/auth/store/selectors';
import { UserProfileInterface } from 'src/app/shared/types/userProfile.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ng-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  projectName = environment.projectName
  isLoggedIn$: Observable<boolean | null>;
  userProfile$: Observable<UserProfileInterface | null>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.userProfile$ = this.store.pipe(select(userProfileSelector));
  }

}
