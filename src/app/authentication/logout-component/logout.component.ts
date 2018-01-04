import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth.service';

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