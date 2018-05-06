export class Post {
  private _title:string;
  private _author:string;
  private _postDate:Date;
  private _titleImg:String;
  private _imgList:string[];
  private _body:string;
  private _gameURL:string;
  
    constructor(title:string, author:string, postDate:Date, body:string, titleImg?:string, imgList?:string[],gameURL?:string) {
      this._title = title;
      this._author = author;
      this._postDate = postDate;
      this._titleImg = titleImg;
      this._imgList = imgList;
      this._body = body;
      this._gameURL = gameURL;
    }
    
    get title() : string {
      return this._title;
    }	
    
    get author() : string {
      return this._author;
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
  }