import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books/book.service';
import { BookViewModel } from '../../../core/models/book-view.model';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AdminService } from '../../../core/services/admin/admin.service';
import { AuthenticationService } from '../../../authentication/auth.service';

@Component({
  selector: 'detail-book',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: BookViewModel;
  isAdmin: boolean;
  success: boolean;
  fail: boolean;
  forEdit: string;
  loggedUser: string;
  currentError: string;
  isLogged: boolean;

  constructor(private bookService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private authService: AuthenticationService
  ) {
    this.book = new BookViewModel();
    this.isLogged = this.adminService.isUserLogged();
  }

  ngOnInit() {
    console.log(this.book);
    this.loggedUser = this.adminService.getLoggedUser();
    this.isAdmin = this.adminService.isAdmin();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.bookService.detailsBooks(params['_id']).subscribe(data => {
        this.book.id = params['_id'];
        this.book.title = data.title;
        this.book.cover = data.cover;
        this.book.author = data.author;
        this.book.genre = data.genre;
        this.book.description = data.description;
        this.book.price = data.price;
      })
    });
  }
}