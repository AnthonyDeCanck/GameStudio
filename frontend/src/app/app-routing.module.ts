import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { StudioComponent } from './studio/studio.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { PostResolver } from './post-resolver';
import { LogoutComponent } from './logout/logout.component';
import { AddPostComponent } from './add-post/add-post.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'studio/:string', component: StudioComponent },
  { path: 'post/:string', component: PostComponent , resolve: { post: PostResolver }},
  { path: 'game/:string', component: GameComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [ AuthGuardService ]},
  { path: 'addPost', component: AddPostComponent, canActivate: [ AuthGuardService ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 
}
