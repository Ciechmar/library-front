import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {BookComponent} from './book/book.component';
import {HomeComponent} from './login/home';
import {LogComponent} from './login/log';
import {AuthGuard} from './login/guard';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserComponent},
  {path: 'books', component: BookComponent},
  {path: 'edit/:id', component: UserEditComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LogComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
export const routing = RouterModule.forRoot((routes));
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
