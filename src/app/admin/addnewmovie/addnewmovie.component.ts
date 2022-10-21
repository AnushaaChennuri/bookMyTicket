import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieadd } from 'src/app/models/movies';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-addnewmovie',
  templateUrl: './addnewmovie.component.html',
  styleUrls: ['./addnewmovie.component.css']
})
export class AddnewmovieComponent implements OnInit {

  constructor(private dsobj:MovieserviceService, private robj:Router) { }

  ngOnInit(): void {
    
  }
  childModel=new movieadd('','',0,'','')
  oncreate(){
   this.dsobj.savenewmoviedata(this.childModel).subscribe(data=>
    {console.log(data)
    },
   err=>console.log(err))
  }
  
}
