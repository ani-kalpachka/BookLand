import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books/book.service';
import { BookViewModel } from '../../../core/models/book-view.model';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AdminService } from '../../../core/services/admin/admin.service';
import { AuthenticationService } from '../../../authentication/auth.service';

@Component({
  selector: 'book-details-component',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  model: BookViewModel;
  books: [BookViewModel];
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
    this.model = new BookViewModel();
    this.isLogged = this.adminService.isUserLogged();
  }

  ngOnInit() {
    this.loggedUser = this.adminService.getLoggedUser();
    this.isAdmin = this.adminService.isAdmin();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.bookService.bookDetails(params['id']).subscribe(data => {
        this.model._id = params['id'];
        this.model.title = data.title;
        this.model.bookAuthor = data.bookAuthor;
        this.model.description = data.description;
        this.model.price = data.price;
        this.model.cover = data.cover;
        this.model.genre = data.genre;
      })
    });
  }

  editBook(_id) {
    this.router.navigate(['books/edit/' + _id]);
  }
}