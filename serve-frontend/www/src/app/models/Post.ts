export class Post {
  private _id:string;
  private _title:string;
  private _author:string;
  private _postDate:Date;
  private _body:string;
  
  
    constructor(title:string, postDate:Date, body:string) {
      this._title = title;
      this._postDate = postDate;
      this._body = body;
      
    }

    static fromJSON(json: any): Post {
      const rec = new Post(
        json.title,
        json.postDate,
        json.body
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

    get body() : string {
      return this._body;
    }	


    get ID() : string {
      return this._id;
    }
  }