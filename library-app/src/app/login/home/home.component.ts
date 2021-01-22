import {Component, OnInit} from '@angular/core';
import {LibraryUser} from '../../model/libraryUser';
import {UserService} from '../../user/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  users: LibraryUser[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

}
