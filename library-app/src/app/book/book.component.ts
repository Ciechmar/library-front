import {Component, OnInit} from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../book.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: Book[];
  findForm: FormGroup;

  constructor(private bookService: BookService) {
    this.getBooksByAuthor(),
      this.getBooksByTitle()
  }

  ngOnInit(): void {
    this.findForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'author': new FormControl('', Validators.required)
    })

  }

  getBooksByAuthor(): void {
    const inputValue = this.findForm.get('author').value;
    this.bookService.getBooksByAuthor(inputValue).subscribe(book => this.books = book);
  }

  getBooksByTitle(): void {
    const inputValue = this.findForm.get('title').value;
    this.bookService.getBooksByTitle(inputValue).subscribe(book => this.books = book);
  }

}