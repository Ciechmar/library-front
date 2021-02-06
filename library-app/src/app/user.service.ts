import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LibraryUser} from './model/libraryUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/users';
  httpOptions2 = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  };


  constructor(private http: HttpClient) {
  }

  // ToDo:Dodać pageNum i PageSize by się zmieniało dynamicznie a nie na sztywno przypisane
  // getUsers(pageNum: number, pageSize: number): Observable<LibraryUser[]> {
  //   const url = `${this.userUrl}?pageNum=${pageNum}&pageSize=${pageSize}`;
  //   return this.http.get<LibraryUser[]>(url)
  // }

  getUsers(): Observable<LibraryUser[]> {
    return this.http.get<LibraryUser[]>(this.userUrl);
  }

  getUser(id: number): Observable<LibraryUser> {
    const url = `http://localhost:8080/users/${id}`;
    return this.http.get<LibraryUser>(url);
  }
  getUserByEmail(email: string): Observable<LibraryUser> {
    const url = `http://localhost:8080/users/email/${email}`;
    return this.http.get<LibraryUser>(url);
  }

  getUserByTel(tel: number): Observable<LibraryUser> {
    const url = `http://localhost:8080/users/tel/${tel}`;
    return this.http.get<LibraryUser>(url);
  }

  updateUser(user: LibraryUser): Observable<LibraryUser> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.put<LibraryUser>(url, user, this.httpOptions2);
  }

  deleteUser(user: LibraryUser): Observable<LibraryUser> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.delete<LibraryUser>(url, this.httpOptions2);
  }

  addUser(user: LibraryUser): Observable<LibraryUser> {
    return this.http.post<LibraryUser>(this.userUrl, user, this.httpOptions2);
  }


}
