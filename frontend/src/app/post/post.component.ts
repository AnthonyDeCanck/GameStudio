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

  private title:string;
  private author:string;
  private postDate:Date;
  private imgList:string[];
  private body:string;
  private gameURL:string;


  constructor(private _postDataService:PostDataService) {
    this.post = _postDataService.activePost;
    this.title = "New game: Avoiding responsibility!";
    this.author = "GareSoft";
    this.postDate = new Date();
    this.imgList = [
      "../../assets/img/responsibility[1].jpg",
      "../../assets/img/Avoid_responsibility_01.png"
    ];
    this.body = "Bla bla bla";
    this.gameURL = "p_platform_ninja_1.0.swf";
   }

  ngOnInit() {
  }

}
