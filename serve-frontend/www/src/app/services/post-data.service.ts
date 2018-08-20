import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { MyFile } from '../models/MyFile';

@Injectable()
export class PostDataService {
  private readonly _appUrl = '/API'
  
  constructor(private http: HttpClient) {
   }

   get posts(): Observable<Post[]> {
    
    let result=  this.http
      .get(`${this._appUrl}/posts/`)
      .pipe(
        map((list: any[]): Post[] =>
          list.map(Post.fromJSON)
        )
      );
      console.log(result);
      return result;
  }

  getPostsByUser(user:String): Observable<Post[]> {
    return this.http
      .get(`${this._appUrl}/posts/byAuthor/${user}`)
      .pipe(
        map((list: any[]): Post[] =>
          list.map(Post.fromJSON)
        )
      );
  }

  getPost(id: string): Observable<Post> {
    console.log("GetPost Called");
    return this.http
      .get(`${this._appUrl}/posts/${id}`)
      .pipe(map(Post.fromJSON));
  }

  addNewPost(post: Post): Observable<Post> {
    return this.http
      .post(`${this._appUrl}/posts/`, post)
      .pipe(map(Post.fromJSON));
  }

  uploadImage(formData : FormData) :Observable<MyFile> {
    console.log ("in upload function data service");
    let result =  this.http
        .post(`${this._appUrl}/upload/image`, formData).pipe(map(MyFile.fromJSON));
      console.log(result);
        return result;
  }

  uploadGame(formData : FormData) :Observable<MyFile> {
    console.log ("in upload function data service");
    let result =  this.http
        .post(`${this._appUrl}/upload/game`, formData).pipe(map(MyFile.fromJSON));
      console.log(result);
        return result;
  }
}
