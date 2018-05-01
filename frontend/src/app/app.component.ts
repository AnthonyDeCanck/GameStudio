import { Component } from '@angular/core';
import { PostDataService } from './services/post-data.service';

@Component({
  selector: 'app-root',
  providers: [PostDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
