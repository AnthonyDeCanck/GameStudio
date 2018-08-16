export class Post {
  private _id:string;
  private _title:string;
  private _author:string;
  private _postDate:Date;
  private _titleImg:String;
  private _imgList:string[];
  private _body:string;
  private _gameURL:string;
  
    constructor(title:string, postDate:Date, body:string, titleImg?:string, imgList?:string[],gameURL?:string) {
      this._title = title;
      this._postDate = postDate;
      this._body = body;
      this._titleImg = titleImg;
      this._imgList = imgList;
      this._gameURL = gameURL;
    }

    static fromJSON(json: any): Post {
      console.log(json);
      const rec = new Post(
        json.title,
        json.postDate,
        json.body,
        json.titleImg,
        json.imgList,
        json.gameURL
      );
      rec._id = json._id;
      rec._author = json.author
      return rec;
    }
  
    toJSON() {
      return {
        _id: this._id,
        title: this._title,
        author: this._author,
        postDate: this._postDate,
        body: this._body,
        titleImg: this._titleImg,
        imgList: this._imgList,
        gameURL: this._gameURL
      };
    }
    
    get title() : string {
      return this._title;
    }	
    
    get author() : string {
      return this._author;
    }	
    set author(str:string){
      this._author = str;
    }
    
    get postDate() : Date {
      return this._postDate;
    }

    get titleImg(): String {
      return this._titleImg;
    }
    
    get imgList() : string[] {
      return this._imgList;
    }	

    get body() : string {
      return this._body;
    }	

    get gameURL() : string {
      return this._gameURL;
    }	

    get ID() : string {
      return this._id;
    }
  }