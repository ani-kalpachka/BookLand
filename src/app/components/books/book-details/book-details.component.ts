import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookViewModel } from '../../../core/models/book-view.model';

import { AuthenticationService } from '../../../authentication/auth.service';
import { BooksService } from '../../../core/services/books/book.service';
import { AdminService } from '../../../core/services/admin/admin.service';

@Component({
    templateUrl: '/book-details.component.html',
    styleUrls: [ '/book-details.component.css' ]
})
export class BookDetailsComponent implements OnInit {
public book : BookViewModel; 
isAdmin: boolean;

    constructor( 
        private booksService : BooksService,
        private activatedRoute : ActivatedRoute,
        private authService : AuthenticationService,
        private adminService: AdminService                
    ) { }

    ngOnInit() {
        let id : number = Number(this.activatedRoute.snapshot.params["id"])

        this.isAdmin = this.adminService.isAdmin();        
        this.book = this.booksService.getBookById(id);
    }
}