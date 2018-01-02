import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../../core/services/books/book.service';
import { BookViewModel } from '../../../core/models/book-view.model';

@Component({
    templateUrl: '/books-list.component.html',
    styleUrls: [ '/books-list.component.css' ]
})
export class BooksListComponent implements OnInit {
    public books : BookViewModel[]

    constructor(
        private booksService : BooksService
    ) { }

    ngOnInit() {
        this.books = this.booksService.getAllBooks();
    }
}