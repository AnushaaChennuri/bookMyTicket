import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewmovieComponent } from './addnewmovie/addnewmovie.component';
import { AdminComponent } from './admin.component';
import { ViewuserdataComponent } from './viewuserdata/viewuserdata.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[
  {path:'',redirectTo:"viewuserdata",pathMatch:"full"},
  {path:'viewuserdata',component:ViewuserdataComponent},
  {path:'addnewmovie',component:AddnewmovieComponent},

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
