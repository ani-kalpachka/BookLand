import { Component, OnInit } from '@angular/core';

import { BookViewModel } from '../../../core/models/book-view.model';

import { AuthenticationService } from '../../../authentication/auth.service';
import { BooksService } from '../../../core/services/books/book.service';
import { AdminService } from '../../../core/services/admin/admin.service';

@Component({
    templateUrl: '/books-list.component.html',
    styleUrls: [ '/books-list.component.css' ]
})
export class BooksListComponent implements OnInit {
    public books : BookViewModel[]
    isAdmin: boolean;
    
    constructor(
        private booksService : BooksService,
        private authService : AuthenticationService,
        private adminService: AdminService        
    ) {  }

    ngOnInit() {
        this.books = this.booksService.getAllBooks();
        this.isAdmin = this.adminService.isAdmin();        
    }
}