import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/Post';
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

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: FormGroup;
  errorMsg:string;

  constructor(
    private fb: FormBuilder,
    private _postDataService: PostDataService,
    private _authService: AuthenticationService
  ) {}


  ngOnInit() {
    this.post = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      body: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    var post = new Post(this.post.value.title,new Date(),this.post.value.body);
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

  
}
