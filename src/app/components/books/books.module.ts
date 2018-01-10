import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { bookComponents } from './index';
import { BooksListComponent } from './books-list/books-list.component';

import { BooksService } from '../../core/services/books/book.service';

import { bookPaths } from './books.routing';

@NgModule({
    imports: [ 
        CommonModule, 
        RouterModule.forChild(bookPaths) 
    ],
    declarations: [
        ...bookComponents,
    ],
    providers: [ BooksService ]
})
export class BooksModule { }