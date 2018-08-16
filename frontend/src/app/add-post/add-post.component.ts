//import component, ElementRef, input and the oninit method from angular core
import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
//import the native angular http and respone libraries
import { Http, Response } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PostDataService } from '../services/post-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/Post';
import { AuthenticationService } from '../services/authentication.service';

//import { FileUploadService } from '../file-upload.service';

const URL = 'http://localhost:8000/api/upload';

//create the component properties
@Component({
    /*providers: [FileUploadService],*/
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: FormGroup;
  errorMsg:string;

  image : File = null;
  game : File = null;
  extraImg : File[] = new Array;
  private readonly _appUrl = '/API'
  private url1 = 'http://localhost:8000/api/upload'


  constructor(
    private fb: FormBuilder,
    private _postDataService: PostDataService,
    private _authService: AuthenticationService,
    /*private _fileUploadService : FileUploadService,*/
    private el: ElementRef,
    private http : Http
  ) {}

    ngOnInit() {
      this.post = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(2)]],
        body: ['', [Validators.required, Validators.minLength(2)]]
      });
    }

    handleGameInput(files: FileList) {
      this.game = files.item(0);
      console.log(this.game);
    }
  
    handleImageInput(files: FileList) {
      this.image = files.item(0);
      console.log(this.image);
    }
  
    handleExtraImgInput(files: FileList) {
      for(let i = 0 ; i<files.length; i++){
        this.extraImg[i] = files.item(i);
      }  
      console.log(this.extraImg);
    }
  
    getStringArrayFromExtraImg(files : File[]) :string[] {
       let stringArray : string[];
       for(let i = 0 ; i<files.length; i++){
        stringArray[i] = files[i].name;
      } 
      return stringArray;
    }

    onSubmit() {
      var post = new Post(this.post.value.title, new Date(), this.post.value, this.image.name, this.getStringArrayFromExtraImg(this.extraImg), this.game.name);
      post.author = this._authService.user$.getValue();
      let filesArray : File[];
      filesArray.push(this.game);
      filesArray.push(this.image);
      //NOG BELANGRIJK EXTRA ARRAY OPVULLEN MET EXTRA IMAGES !!!!!!!!!!!!!!!!
      
      this.upload();
      this._postDataService.addNewPost(post).subscribe(
        () => {
          this.post.reset();
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = `Error ${error.status} while adding post for ${
            post.title
          }: ${error.error}`;
        }
      );
    }

    //the function which handles the file upload without using a plugin.
    upload() {
    //locate the file element meant for the file upload.
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
        console.log(inputEl.files.item(0));
    //create a new fromdata instance
        let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('photo', inputEl.files.item(0));
            this._postDataService.uploadFiles(formData).map((res:Response) => res.json()).subscribe(
              //map the success function and alert the response
               (success) => {
                       alert("upload sucessfull");
              },
              (error) => alert(error));
          }
       }
}