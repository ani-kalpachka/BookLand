//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './authentication/logout-component/logout.component';
import { AddBookComponent } from '../app/components/books/add-book/add-book.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';

// Guards
import { AuthGuard } from './guards/auth.guard.service';

const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [ AuthGuard ], component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'books', canActivate: [ AuthGuard ], loadChildren: "app/components/books/books.module#BooksModule" },
  { path: 'addbook', canActivate: [ AuthGuard ], component: AddBookComponent },  
  { path: 'books/details/:id', canActivate: [AuthGuard], component: BookDetailsComponent },
  { path: 'books/edit/:id', canActivate: [AuthGuard], component: EditBookComponent }  
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {  }
