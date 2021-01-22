import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routing} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserEditComponent} from './user-edit/user-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookComponent} from './book/book.component';
import {LogComponent} from './login/log';
import {HomeComponent} from './login/home';
import {ErrorInterceptor} from './login/helpers/error.interceptor';
import {BasicAuthInterceptor} from './login/helpers/basic-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent,
    BookComponent,
    LogComponent,
    HomeComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
