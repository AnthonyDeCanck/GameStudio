import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../services/post-data.service';
import { Post } from '../models/Post';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  
  private posts:Post[];
  private owner:string;

  constructor(private _postDataService:PostDataService, private route:ActivatedRoute) {
    this.posts = _postDataService.posts;
    this.owner = ""+ this.route.snapshot.paramMap.get('string');
   }

  ngOnInit() {
  }

  changeActivePost(){
    this._postDataService.setActivePost(this.posts[0]);
  }

  postFromAuthor(post:Post):boolean{
    if (post.author == this.owner ){
      return true;
    } else return false;
  }

}
