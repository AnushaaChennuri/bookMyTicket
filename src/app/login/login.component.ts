import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private aser: Router) {}

  ngOnInit(): void {}

  onLogin(ref: any) {
    let userobj = ref.value;
    // console.log(userobj);

    //if username and password are admin login as admin
    if (
      userobj.username != 'admin' &&
      userobj.password != 'admin' &&
      userobj.username != 'user' &&
      userobj.password != 'user'
    )
      alert('Invalid Username And Password');
    else {
      //navigate to admin component

      if (userobj.username == 'admin' && userobj.username == 'admin') {
        this.aser.navigateByUrl('/admin');
      } else {
        this.aser.navigateByUrl('/movie');
      }
    }
  }
}
