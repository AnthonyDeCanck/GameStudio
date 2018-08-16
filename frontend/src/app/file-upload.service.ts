import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
/*import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';*/

@Injectable()
export class FileUploadService {


  constructor(private httpClient : HttpClient) {
    
   }

  /*postFile(formData: FormData) {
    this.httpClient
        //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
                .post(URL, formData).map((res:Response) => res.json()).subscribe(
                //map the success function and alert the response
                 (success) => {
                         alert(success._body);
                },
                (error) => alert(error))
  }*/
}