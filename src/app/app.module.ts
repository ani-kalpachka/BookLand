// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthenticationModule } from './authentication/auth.module';
import { AppRoutesModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';
import { BooksModule } from './components/books/books.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';

// Services
import { AuthGuard } from './guards/auth.guard.service';
import { BooksService } from './core/services/books/book.service';
import { AdminService } from './core/services/admin/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutesModule,
    SharedModule,
    FormsModule,
    BooksModule
  ],
  providers: [
    AuthGuard,
    BooksService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
