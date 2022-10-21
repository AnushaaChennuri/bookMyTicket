import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { post } from '../models/movies';

import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
mdata:post[]=[]

  constructor(private mobj:MovieserviceService,private roj:Router) { }

  ngOnInit(): void {
    this.mobj.getmoviedata().subscribe((data)=>{
      console.log(data);
      this.mdata=data;
    },
    (err)=>{
      console.log(err)
    })

  }

  onSelectedId(id:any){
    this.roj.navigateByUrl('movie/'+id)

  }

}
