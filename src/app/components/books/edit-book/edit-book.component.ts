import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books/book.service';
import { BookViewModel } from '../../../core/models/book-view.model';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AdminService } from '../../../core/services/admin/admin.service';

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  model: BookViewModel;
  books: [BookViewModel];
  isAdmin: boolean;
  success: boolean;
  fail: boolean;

  constructor(private bookService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
  ) {
    this.model = new BookViewModel();
  }

  ngOnInit() {
    this.isAdmin = this.adminService.isAdmin();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.bookService.bookDetails(params['id']).subscribe(data => {
        this.model._id = params['id'];
        this.model.title = data.title;
        this.model.cover = data.cover;
        this.model.description = data.description;
        this.model.price = data.price;
        this.model.genre = data.genre;
        this.model.bookAuthor = data.bookAuthor;
      })
    });
  }
}