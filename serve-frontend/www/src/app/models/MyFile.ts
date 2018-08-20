export class MyFile {
    private _name:string;

    
      constructor(name:string) {
        this._name = name;
      }
  
      static fromJSON(json: any): MyFile {
        console.log(json);
        const rec = new MyFile(
          json.name
        );
        return rec;
      }
    
      toJSON() {
        return {
          name: this._name
        }
      }
      
      get name() : string {
        return this._name;
      }	
      
    }