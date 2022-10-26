import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ToolbarModule } from 'src/app/shared/modules/toolbar/toolbar.module';
import { AppComponent } from 'src/app/app.component';
import { AuthInterceptor } from 'src/app/shared/services/authinterceptor.interceptor';
import { ProductsModule } from 'src/app/products/products.module';
import { AlertEffects } from 'src/app/shared/store/effects/alert-center.effects';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerEffects } from 'src/app/shared/store/effects/spinner.effects';
import { ProductModule } from 'src/app/product/product.module';
import { ProfileModule } from 'src/app/profile/profile.module';
import { NotFoundModule } from 'src/app/not-found/not-found.module';
import { CartModule } from 'src/app/cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AlertEffects, SpinnerEffects]),
    ToolbarModule,
    ProductsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    ProductModule,
    ProfileModule,
    CartModule,
    NotFoundModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
