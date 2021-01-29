import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {Location} from '@angular/common';
import {LibraryUser} from '../model/libraryUser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  private userUrl = 'http://localhost:8080/users';
  httpOptions2 = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  user: LibraryUser;

  findForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserService, private location: Location, private http: HttpClient) {
  }

  ngOnInit(): void {

    this.findForm = new FormGroup(
      {'id': new FormControl('', Validators.required)});
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

  delete(user: LibraryUser): void {
    this.userService.deleteUser(user).subscribe();
  }
}
