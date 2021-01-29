import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {Location} from '@angular/common';
import {LibraryUser} from '../model/libraryUser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserService, private location: Location, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup(
      {
        'firstName': new FormControl('', Validators.required),
        'lastName': new FormControl('', Validators.required),
        'year': new FormControl('', [Validators.min(1910), Validators.max(2021)]),
        'password': new FormControl('', Validators.required),
        'email': new FormControl('', Validators.email),
        'tel': new FormControl('', Validators.required)
      }
    );
  }

  addUser(firstName: string, lastName: string, year: number, password: string, email: string, tel: number): void {
    this.userService.addUser({firstName, lastName, year, password, email, tel} as LibraryUser)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
