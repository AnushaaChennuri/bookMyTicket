import { Component, OnInit } from '@angular/core';
import { movieuser, userData } from '../models/users.model';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  constructor(private obj1:MovieserviceService) { }

  ngOnInit(): void {
   
  }

  

}
