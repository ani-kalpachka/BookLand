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
  model: BookViewModel;
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
      this.bookService.detailsBooks(params['id']).subscribe(data => {
        this.model.id = params['id'];
        this.model.title = data.title;
        this.model.cover = data.cover;
        this.model.author = data.author;
        this.model.genre = data.genre;
        this.model.description = data.description;
        this.model.price = data.price;
      })
    });
  }
}