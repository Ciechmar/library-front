import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LibraryUser} from '../model/libraryUser';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<LibraryUser>;
  public currentUser: Observable<LibraryUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LibraryUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): LibraryUser {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, {username, password})
      .pipe(map(user => {
          if (user) {
            user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
          return user;
        }
      ));

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}
