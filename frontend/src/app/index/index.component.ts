import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostDataService } from '../services/post-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private _posts:Post[];
  public errorMsg:string;

  constructor(private _postDataService:PostDataService) {
  }

  ngOnInit() {
    this._postDataService.posts.subscribe(
      posts => (this._posts = posts),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve posts: ${error.error}`;
      }
    );
  }

}
