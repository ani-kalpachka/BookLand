import { Component, OnInit } from '@angular/core';
import { BookViewModel } from '../../../core/models/book-view.model';
import { BooksService } from '../../../core/services/books/book.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AdminService } from '../../../core/services/admin/admin.service';

@Component({
  selector: 'books-list-component',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: [BookViewModel];
  fail: boolean;
  isAdmin: boolean;
  constructor(private booksService: BooksService, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.loadBooks();
    this.isAdmin = this.adminService.isAdmin();
  }

  loadBooks() {
    this.booksService.getBooks().subscribe(data => {
      this.books = data.sort((a, b) => a._kmd.lmt <= b._kmd.lmt);
    },
      err => {
        console.log(err)
      });
  }

  deleteBook(_id) {
    let authToken = localStorage.getItem('authtoken')
    this.booksService.deleteBook(_id, authToken).subscribe(data => {
      this.loadBooks();
    },
      err => {
        this.fail = true;
     })
  }

  editBooks(_id) {
    this.router.navigate(['books/edit/' + _id]);
  }

  detailsBooks(_id) {
    this.router.navigate(['books/details/' + _id]);
  }
}
