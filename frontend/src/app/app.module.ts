import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

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
import { GameComponent } from './game/game.component';
import {PostResolver} from './post-resolver';
import { PostDataService } from './services/post-data.service';




@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    StudioComponent,
    IndexComponent,
    SidebarComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule

  ],
  providers: [PostDataService,PostResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
