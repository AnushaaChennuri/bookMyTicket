import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewuserdataComponent } from './viewuserdata/viewuserdata.component';
import { AddnewmovieComponent } from './addnewmovie/addnewmovie.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewuserdataComponent,
    AddnewmovieComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
