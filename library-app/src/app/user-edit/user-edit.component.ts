import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {Location} from '@angular/common';
import {LibraryUser} from '../model/libraryUser';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  user: LibraryUser;
  signUpForm: FormGroup;
  findForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserService, private location: Location) {
  }

  ngOnInit(): void {

    this.findForm = new FormGroup(
      {'id': new FormControl('', Validators.required)});
    this.signUpForm = new FormGroup(
      {
        'firstName': new FormControl('', Validators.required),
        'lastName': new FormControl('', Validators.required),
        'year': new FormControl('', [Validators.min(1910), Validators.max(2021)]),
        'password': new FormControl('', Validators.required),
        'email': new FormControl('', Validators.email),
        'tel': new FormControl('500000000', Validators.required)
      }
    );
  }

  addUser(firstName: string, lastName: string, year: number, password: string, email: string, tel: number): void {
    this.userService.addUser({firstName, lastName, year, password, email, tel} as LibraryUser)
      .subscribe(() => this.goBack());
  }


  getUser(id: number): void {
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }

  saveUser(): void {
    this.userService.addUser(this.user).subscribe(() => this.goBack());
  }

}
