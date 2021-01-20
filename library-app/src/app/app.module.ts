import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserEditComponent} from './user-edit/user-edit.component';
import {FormsModule} from '@angular/forms';
import {BookComponent} from './book/book.component';
import {LogComponent} from './login/log/log.component';
import {HomeComponent} from './login/home/home.component';

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
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
