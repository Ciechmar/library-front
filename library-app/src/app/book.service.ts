import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'http://localhost:8080/books';
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

  getBooksByAuthor(author: string): Observable<Book[]> {
    const url = `${this.booksUrl}?author=${author}`;
    return this.http.get<Book[]>(url);
  }

  getBooksByTitle(title: string): Observable<Book[]> {
    const url = `${this.booksUrl}?title=${title}`;
    return this.http.get<Book[]>(url);
  }

}
