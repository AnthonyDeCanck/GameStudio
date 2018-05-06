import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post';
import { PostDataService } from '../services/post-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private post:Post;

  constructor(private _postDataService:PostDataService) {
    this.post = _postDataService.activePost;
   }

  ngOnInit() {
  }

  hasImg() {
    return this.post.imgList.length != null;
  }

  hasExtraImg(){
    return this.post.imgList.length >=1;

  }

}
