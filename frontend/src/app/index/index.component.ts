import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostDataService } from '../services/post-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private posts:Post[];

  constructor(private _postDataService:PostDataService) {
    this.posts = _postDataService.posts;
  }

  ngOnInit() {
  }

}
