import { Component } from '@angular/core';
import { PostDataService } from './services/post-data.service';
import { AuthenticationService } from './services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  providers: [PostDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private authService: AuthenticationService) {}

  get currentUser() : Observable<string> {
    return this.authService.user$;
  }

  isLoggedIn() : boolean {
    return localStorage.getItem("currentUser") != undefined;
  } 

}
