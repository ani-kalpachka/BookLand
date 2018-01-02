import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from '../../../core/services/books/book.service';
import { BookViewModel } from '../../../core/models/book-view.model';

@Component({
    templateUrl: '/book-details.component.html',
    styleUrls: [ '/book-details.component.css' ]
})
export class BookDetailsComponent implements OnInit {
public book : BookViewModel; 

    constructor( 
        private booksService : BooksService,
        private activatedRoute : ActivatedRoute
    ) { }

    ngOnInit() {
        let id : number = Number(this.activatedRoute.snapshot.params["id"])

        this.book = this.booksService.getBookById(id);
    }
}