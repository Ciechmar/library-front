import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {BookComponent} from './book/book.component';
import {NavComponent} from './nav/nav.component';
import {LogComponent} from './log/log.component';

const routes: Routes = [
  // {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'book', component: BookComponent},
  {path: 'nav', component: NavComponent},
  {path: 'log', component: LogComponent},
  {path: 'edit/:id', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
