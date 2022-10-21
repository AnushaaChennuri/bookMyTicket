import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { MyshowsComponent } from './myshows/myshows.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'movie', component: MoviesComponent },
  { path: 'myshows', component: MyshowsComponent },

  { path: 'movie/:id', component: MoviedetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
