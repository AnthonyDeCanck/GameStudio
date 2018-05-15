import { Component, OnInit} from '@angular/core';
import { Post } from '../models/Post';
import { PostDataService } from '../services/post-data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private _post:Post
  public errorMsg:string;

  constructor( private _postDataService:PostDataService, private route: ActivatedRoute) {
   
   }

   ngOnInit() {
    //this._post = new Post("Hey there Error time","BlaSoft", new Date(),"blezrhzrhztj","hello.png",["hello.png"],"swf_game_1.swf"); 
    this.route.data.subscribe(
      item => (this._post = item['post']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve post: ${error.error}`;
      }
    );

  }

  get post() : Post {
    return this._post;
  }


}
