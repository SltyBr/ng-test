import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/auth/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { GetUserProfileEffect } from 'src/app/auth/store/effects/getUserProfile.effect';
import { LogoutEffect } from 'src/app/auth/store/effects/logout.effect';

const routes: Routes = [
  {path: 'login', component: LoginComponent}
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect, GetUserProfileEffect, LogoutEffect]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ErrorMessageModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
