import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../common/book';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { BookCategory } from '../components/book-category';
@Injectable({
  providedIn: 'root'
})
export class BookService {
 baseUrl = 'http://localhost:8080/api/v1/books';
 categoryUrl = 'http://localhost:8080/api/v1/book-category';

  constructor(private http: HttpClient) { }

  getBooks(theCategoryId: number): Observable<Book[]> {
    const searchUrl = `${this.baseUrl}/search/categoryid?id= ${theCategoryId}`;
    return this.http.get<GetResponseBooks>(searchUrl).pipe(
    map(resp => resp._embedded.books)
  );
  }

getBookCategories(): Observable<BookCategory[]> {

  return this.http.get<GetResponseBookCategory>(this.categoryUrl).pipe(
  map(resp => resp._embedded.bookCategory));
}

}


interface GetResponseBooks {
  _embedded: {
    books: Book[]
  };
}

interface GetResponseBookCategory {
  _embedded: {
    bookCategory: BookCategory[]
  };
}
