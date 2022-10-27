import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserProfileAction } from 'src/app/auth/store/actions/getUserProfile.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.store.dispatch(getUserProfileAction())
  }

  constructor(private store: Store) {}
}
