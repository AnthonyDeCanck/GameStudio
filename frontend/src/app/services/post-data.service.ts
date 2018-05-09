import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class PostDataService {
  private readonly _appUrl = '/API/'
  private _posts = new Array<Post>();
  private _activePost:Post;
  
  constructor(private http: HttpClient) {

    let post1 = new Post("New game:Warlord heroes!","GareSoft",new Date(2018,1,20,16,5,30), "Bla bla bla", "../../assets/img/responsibility[1].jpg",[
      "../../assets/img/responsibility[1].jpg",
      "../../assets/img/Avoid_responsibility_01.png"
    ], "Warlord_heroes.swf");
    let post2 = new Post("Winged Bullet? Hell yeah!","GareSoft",new Date(2018,1,19,14,7,30),"Bla bla bla", "../../assets/img/responsibility[1].jpg", [
      "../../assets/img/responsibility[1].jpg",
      "../../assets/img/Avoid_responsibility_01.png"
    ], "Winged_Bullet.swf");
    let post3 = new Post("Adventure ho's?","LGRGames",new Date(2018,1,10,17,55,17), "Bla bla bla", "../../assets/img/responsibility[1].jpg",[
      "../../assets/img/responsibility[1].jpg",
      "../../assets/img/Avoid_responsibility_01.png"
    ], "Adventure_Ho.swf");
    let post4 = new Post("Stellar SQUAAAD!!","LGRGames",new Date(2018,1,10,17,55,17), "Bla bla bla","../../assets/img/responsibility[1].jpg",[
      "../../assets/img/responsibility[1].jpg",
      "../../assets/img/Avoid_responsibility_01.png"
    ], "Stellar_Squad.swf");

    this._posts.push(post1,post2,post3,post4);

    this._activePost = post4;
   }

   get posts(): Observable<Post[]> {
    return this.http
      .get(`${this._appUrl}/posts/`)
      .pipe(
        map((list: any[]): Post[] =>
          list.map(item => 
            new Post(item.title, item.author, item.postDate,item.titleImg, item.imgList,item.body,item.gameURL)
          )
        )
      );
  }

  getPostsByUser(user:String): Observable<Post[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]): Post[] =>
          list.map(item => 
            new Post(item.title, item.author, item.postDate,item.titleImg, item.imgList,item.body,item.gameURL)
          )
        )
      );
  }

  addNewPost(post: Post): Observable<Post> {
    return this.http
      .post(`${this._appUrl}/recipes/`, post)
      .pipe(map(Post.fromJSON));
  }

  get activePost() : Post{
    return this._activePost;
  }

  setActivePost(post:Post) : void{
    this._activePost = post;
  }


}
