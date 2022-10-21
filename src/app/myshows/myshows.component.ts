import { Component, OnInit } from '@angular/core';
import { movieuser, userData } from '../models/users.model';
import { MovieserviceService } from '../movieservice.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-myshows',
  templateUrl: './myshows.component.html',
  styleUrls: ['./myshows.component.css']
})
export class MyshowsComponent implements OnInit {

  dataSource = new MatTableDataSource<movieuser>;

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

@ViewChild(MatSort) sort!: MatSort;

edituserobj=new userData('','','','','',0);
usermodid:number=0;
modifiedtickets:number=0;
intialtickets:any=0;
  displaydata:movieuser[]=[];
  constructor(private obj1:MovieserviceService) { }
  displayedColumns: string[] = ['id','Username', 'Phone Number', 'Date Booked', 'Show Timings','Tickets Booked','Movie Booked','Action'];
 

  ngOnInit(): void {
    this.obj1.displayuserdata().subscribe(data=>{
      this.displaydata=data;

      this.dataSource = new MatTableDataSource<movieuser>(data);
      this.dataSource.paginator=this.paginator;
    

      console.log(this.dataSource)
    },
    err=>{
      console.log(err)
    });

    
  }

 
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }


      
}

edit(user:movieuser,id:number){
  this.edituserobj=user;
  console.log(user);
this.intialtickets=this.edituserobj.ticketsBooked;
        
}
onsave(){
  console.log(this.edituserobj);

  this.obj1.modifieduserdata(this.edituserobj).subscribe(
    data=>{console.log(data);
      alert(this.edituserobj.username+" data has been updated");
      this.usermodid=data.id;


    },
    err=>console.log(err)
  )

  
}



}

