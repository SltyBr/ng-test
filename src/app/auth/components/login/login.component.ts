import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loginAction } from 'src/app/auth/store/actions/login.action';
import { errorSelector, isSubmittingSelector } from 'src/app/auth/store/selectors';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public hide = true;
  public form: FormGroup;
  public isSubmitting$: Observable<boolean>;
  public error$: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) { }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: 'kminchelle',
      password: '0lelplR'
    })
  }

  onSubmit(): void {
    this.store.dispatch(loginAction({request: this.form.value}))
  }

}
