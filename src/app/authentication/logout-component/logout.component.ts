import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout()
      .subscribe(data => {
        localStorage.clear();
        this.authService.isUserLogged.emit(false);
        this.authService.isAdmin.emit(false);
        this.router.navigate(['/login']);
      },
      err => {
        localStorage.clear();
        this.authService.isUserLogged.emit(false);
        this.authService.isAdmin.emit(false);
        this.router.navigate(['/login']);
      })
  }
}