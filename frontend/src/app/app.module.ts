import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudioComponent } from './studio/studio.component';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PostComponent } from './post/post.component';
import { PostResolver } from './post-resolver';
import { PostDataService } from './services/post-data.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { AddPostComponent } from './add-post/add-post.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    StudioComponent,
    IndexComponent,
    SidebarComponent,
    ListPostComponent,
    LogoutComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [PostDataService,PostResolver,AuthenticationService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
