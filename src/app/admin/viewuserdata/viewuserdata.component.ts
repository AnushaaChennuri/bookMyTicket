import { Component, OnInit } from '@angular/core';
import { movieuser, userData } from 'src/app/models/users.model';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-viewuserdata',
  templateUrl: './viewuserdata.component.html',
  styleUrls: ['./viewuserdata.component.css']
})
export class ViewuserdataComponent implements OnInit {

  displaydata:movieuser[]=[];
  editstatus:boolean=false;
  edituserIndex=0;
  edituserobj=new userData('','','','','',0);
  constructor(private obj1:MovieserviceService) { }

  ngOnInit(): void {
    this.obj1.displayuserdata().subscribe(data=>{
      this.displaydata=data;
      console.log(data)
    },
    err=>{
      console.log(err)
    });
  }
  onedit(user:movieuser,ind:number){
    this.edituserobj=user;
    this.edituserIndex=ind;
    this.editstatus=true;
    console.log(this.editstatus)
  }
  onsave(modifieduserdata:any){
    modifieduserdata.id=(this.edituserIndex+1)
    this.editstatus=false;
    this.obj1.modifieduserdata(modifieduserdata).subscribe(
      data=>{console.log(data);
        alert(modifieduserdata.username+" data has been updated");
      },
      err=>console.log(err)
    )


  }

}
