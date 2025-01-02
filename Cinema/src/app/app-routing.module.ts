import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { PaidMovieComponent } from './paid_movie/paid_movie.component';  
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { FreeMovieComponent } from './free_movie/free_movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'freemovies',
    component: FreeMovieComponent
  },
  {
    path: 'plusmember',
    canActivate: [AuthGuard],
    component: PaidMovieComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
