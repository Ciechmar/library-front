import {Component, OnInit} from '@angular/core';
import {LibraryUser} from "../model/libraryUser";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: LibraryUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void{
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  add(firstName: string, lastName: string, year: number, email: string, password : string, tel: number): void {
    firstName = firstName.trim();
    email = email.trim();
    if (!firstName || !lastName|| !email || password) {
      return
    }
    if (email.indexOf('@') <= 1) {
      return;
    }
    this.userService.addUser({firstName, lastName, year, password, tel, email} as LibraryUser)
      .subscribe( user => {this.users.push(user);
      });
  }

  delete(user: LibraryUser): void {
    this.users = this.users.filter(us => us !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
