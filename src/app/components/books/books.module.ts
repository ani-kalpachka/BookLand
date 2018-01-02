import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BooksService } from '../../core/services/books/book.service';
import { bookComponents } from './index';
import { BooksListComponent } from './books-list/books-list.component';
import { bookPaths } from './books.routing';
import {} from '';

@NgModule({
    imports: [ 
        CommonModule, 
        RouterModule.forChild(bookPaths) 
    ],
    declarations: [
        ...bookComponents
    ],
    providers: [ BooksService ]
})
export class BooksModule { }