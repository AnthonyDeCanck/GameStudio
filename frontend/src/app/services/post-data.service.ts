import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable()
export class PostDataService {
  private _posts = new Array<Post>();
  private _activePost:Post;
  
  constructor() {

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

  get posts() : Post[] {
    return this._posts;
  }

  get activePost() : Post{
    return this._activePost;
  }

  setActivePost(post:Post) : void{
    this._activePost = post;
  }


}
