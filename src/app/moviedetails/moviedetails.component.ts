import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ChildActivationEnd, Router } from '@angular/router';
import { post } from '../models/movies';
import { userData } from '../models/users.model';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  details:any;
  userModel=new userData('','','','','10:00 AM',0)

 
  
  constructor( private robj:Router,private actobj:ActivatedRoute,private mseobj:MovieserviceService) { }


  ngOnInit(): void {

    
    //get ID from URL
  
    let id=this.actobj.snapshot.params['id'];
    // let name=this.actobj.snapshot.params['name']
    //get the movie details with above id;
    this.mseobj.getmoviedetails(id).subscribe((data)=>{
      //console.log(data)
    this.details=data
    console.log(this.details.id)
  },
    err=>{console.log(err)})

  }
  bookedstatus:any;
  message:any;
  bookedImage:any;
ticbooked:number=0;
  onAdd(data:number){

    if(data>this.details.noOfTickets || this.userModel.username=='' ||this.userModel.PhoneNumber.length!=10 || this.userModel.DateBooked=='' || this.userModel.ticketsBooked==0){
    this.message="Error Message"
    if(data>this.details.noOfTickets){
      this.bookedstatus="Insufficient Tickets"
      this.bookedImage="https://www.bing.com/ck/a?!&&p=ea8048b91b67c2b6JmltdHM9MTY2NjIyNDAwMCZpZ3VpZD0zNWI2ZTE2YS04ZWVmLTZlMDMtMDFkMS1mMzc3OGYzZDZmYzEmaW5zaWQ9NTQwOA&ptn=3&hsh=3&fclid=35b6e16a-8eef-6e03-01d1-f3778f3d6fc1&u=a1L2ltYWdlcy9zZWFyY2g_cT10aWNrK21hcmsraW4rYStyb3VuZCtjaXJjbGUraW1hZ2VzJmlkPURDQUIzMEY4MzFGREMxQUNEQjgxMEIwOTU1MTRGNDY4MDhEQTlBMDUmRk9STT1JUUZSQkE&ntb=1"

    }
    else
     this.bookedstatus="Problem in Booking (Please enter Valid Details)"
     this.bookedImage="https://www.bing.com/th?id=OIP.QgSW0mnzGd0KBsUlmaMIZgHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
    }
    else{
      
      this.message="Successful"
      this.bookedstatus="Booked Succefully"
      this.userModel.movieBooked=this.details.name;
      this.details.noOfTickets-=this.userModel.ticketsBooked;
     this.bookedImage="https://th.bing.com/th/id/OIP.WOIdDUL8NSzwEdTHm_aKoQHaHZ?w=212&h=211&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  console.log(this.details)
  this.mseobj.modifieddetails(this.details.id,this.details).subscribe((data)=>{
  },(err)=>{
    console.log(err)
  })
this.oncreate();
let  bookedusersdata:userData[]=[]


  if (localStorage.getItem('bookedusers') === null) {
    bookedusersdata=[...bookedusersdata,this.userModel]
      localStorage.setItem('bookedusers', JSON.stringify(bookedusersdata));
      console.log('local is empty');
      
    } else {
      let a: any = localStorage.getItem('bookedusers');
      let usersinlocal = JSON.parse(a);
      usersinlocal = [...usersinlocal, this.userModel];
      localStorage.setItem('bookedusers', JSON.stringify(usersinlocal));
     
  }};
}
onone(id:any){
  if(id===1)
  this.userModel.showTimings="10:00AM"
  else if(id===2)
  this.userModel.showTimings="2:00PM"
  else
  this.userModel.showTimings="5:00PM"
}
 
  oncreate(){
    console.log(this.userModel)
   this.mseobj.userdataget(this.userModel).subscribe(data=>
    {console.log(data)
    },
   err=>console.log(err))
  }




}
