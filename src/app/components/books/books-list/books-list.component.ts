import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../../core/services/books/book.service';
import { BookViewModel } from '../../../core/models/book-view.model';
import { AuthenticationService } from '../../../authentication/auth.service';

@Component({
    templateUrl: '/books-list.component.html',
    styleUrls: [ '/books-list.component.css' ]
})
export class BooksListComponent implements OnInit {
    public books : BookViewModel[]

    constructor(
        private booksService : BooksService,
        private authService : AuthenticationService        
    ) { }

    ngOnInit() {
        this.books = this.booksService.getAllBooks();
    }
}