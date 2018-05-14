import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class PostDataService {
  private readonly _appUrl = '/API'
  
  constructor(private http: HttpClient) {
   }

   get posts(): Observable<Post[]> {
    return this.http
      .get(`${this._appUrl}/posts/`)
      .pipe(
        map((list: any[]): Post[] =>
          list.map(Post.fromJSON)
        )
      );
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
    return this.http
      .get(`${this._appUrl}/posts/${id}`)
      .pipe(map(Post.fromJSON));
  }

  addNewPost(post: Post): Observable<Post> {
    return this.http
      .post(`${this._appUrl}/posts/`, post)
      .pipe(map(Post.fromJSON));
  }



}
