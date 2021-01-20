import { Component } from '@angular/core';
import {LibraryUser} from './model/libraryUser';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: LibraryUser;
  title = '..::Library Management::..';

  constructor(private router: Router, private authenticationService: AuthenticationService){
    this.authenticationService.currentUser.subscribe(
      us => this.currentUser = us);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
