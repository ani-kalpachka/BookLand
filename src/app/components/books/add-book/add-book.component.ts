import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgModule } from '@angular/core';

import { AddBookModel } from '../../../core/models/add-book.model';
import { BookViewModel } from '../../../core/models/book-view.model';

import { BooksService } from '../../../core/services/books/book.service';
import { AdminService } from '../../../core/services/admin/admin.service';

@Component({
  selector: 'add-book-component',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  checker: boolean;
  isAdmin: boolean;
  model: AddBookModel;
  books: [BookViewModel]

  constructor(private bookService: BooksService, private adminService: AdminService, private router: Router) {
    this.model = new AddBookModel();
    this.checker = true;
  }

  ngOnInit() {
    this.isAdmin = this.adminService.isAdmin();
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    },
      err => {

      })
  }

  addBook() {
    let d = new Date();
    let strDate = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
   // this.model.author = localStorage.getItem('username');

    if (this.checker) {
      this.bookService.addBook(this.model).subscribe(data => {
        this.model = new AddBookModel();
        this.bookService.getBooks().subscribe(data => {
          this.books = data;
        });

      },
        err => {
          console.log(err)
        })
    }
    
    setTimeout(()=>{
      this.checker = true;
    }, 3000)
  }
}
