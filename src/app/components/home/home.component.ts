import { Component }  from "@angular/core";

import { AuthenticationService } from '../../authentication/auth.service';

@Component({
  templateUrl: './home.components.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent { 
  public username : string;
  private authService : AuthenticationService;

  constructor() {
    this.username = localStorage.getItem('username');
  }
}