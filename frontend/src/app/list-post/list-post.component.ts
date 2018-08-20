import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post';
import { PostDataService } from '../services/post-data.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  @Input() public post:Post;

  public hasImg:boolean = false;

  constructor(private _postDataService:PostDataService) { }

  ngOnInit() {
    this.hasImg = this.postHasImg();
  }

  postHasImg() {
    return this.post.titleImg != undefined;
  }

}
