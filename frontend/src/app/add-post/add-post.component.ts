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
import {MyFile} from '../models/MyFile';
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
  extraImg : File[];
  private readonly _appUrl = '/API'
  private url1 = 'http://localhost:8000/api/upload'

  myImage : MyFile;
  myGame : MyFile;

  imageUploadStatus : string;
  gameUploadStatus : string;

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
      if(files==null||files.length==0){
        return null;
      }
       let stringArray : string[];
       for(let i = 0 ; i<files.length; i++){
        stringArray[i] = files[i].name;
      } 
      return stringArray;
    }

    uploadImage() {
      let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (this.image != null) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('image', this.image);
              this._postDataService.uploadImage(formData).subscribe(file =>{ this.myImage = file; console.log(this.myImage)});
          }
    }

    uploadGame() {
      let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (this.game != null) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('game', this.game);
              this._postDataService.uploadGame(formData).subscribe(file =>{ this.myGame = file});
          }
    }

    onSubmit() {
      console.log(this.myImage);
      console.log(this.myGame);
      this.submitPost(this.myImage==null?null:this.myImage.name , this.myGame==null?null:this.myGame.name);
    }

    submitPost(imageName: string, gameName: string){
      var post = new Post(this.post.value.title, new Date(), this.post.value.body, 
                          imageName, this.getStringArrayFromExtraImg(this.extraImg), 
                          gameName);
      post.author = this._authService.user$.getValue();
      
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
              this._postDataService.uploadFiles(formData).subscribe(file => {console.log(file);
                                                                    this.myFile = file});
              console.log("fuckerdefuck");
              /*let promise = new Promise(function(resolve, reject) {
                this._postDataService.uploadFiles(formData).subscribe(file => this.myFile = file);
              });	

              promise.then(() => console.log("upload complete!!"));*/
          }
          
      }

      test(){
        console.log(this.myFile);
      }

}