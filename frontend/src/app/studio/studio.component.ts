import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../services/post-data.service';
import { Post } from '../models/Post';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  
  private _posts:Post[];
  private _owner:string;
  public errorMsg:string;

  constructor(private _postDataService:PostDataService, private route:ActivatedRoute) {
    this._owner = ""+ this.route.snapshot.paramMap.get('string');
    
   }

   ngOnInit(): void {
    this._postDataService.getPostsByUser(this._owner).subscribe(
      posts => (this._posts = posts),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve posts: ${error.error}`;
      }
    );
  }

}
