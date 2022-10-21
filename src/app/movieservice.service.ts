import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movieadd, post } from './models/movies';
import { userData } from './models/users.model';

@Injectable({
  providedIn: 'root',
})
export class MovieserviceService {
  constructor(private hobj: HttpClient) {}

  //getting movie details from api to movie component
  getmoviedata(): Observable<post[]> {
    return this.hobj.get<post[]>(
      'https://631ec9d658a1c0fe9f57fc8c.mockapi.io/movie/api/user'
    );
  }
  //getting indivduial movie details of single id in moviesdetails component
  getmoviedetails(id: any): Observable<post[]> {
    return this.hobj.get<post[]>(
      'https://631ec9d658a1c0fe9f57fc8c.mockapi.io/movie/api/user/' + id
    );
  }

  //modifiing tickets after user books from homecomponent form
  modifieddetails(id: any, details: any): Observable<post[]> {
    return this.hobj.put<post[]>(
      'https://631ec9d658a1c0fe9f57fc8c.mockapi.io/movie/api/user/' + id,
      details
    );
  }
  //getting details to admin viewcomponent dataa
  displayuserdata(): Observable<userData[]> {
    return this.hobj.get<userData[]>(
      'https://631ec9d658a1c0fe9f57fc8c.mockapi.io/movie/api/movieuser'
    );
  }
  //posting new user after ticket booked by user
  userdataget(cobj: userData): Observable<userData> {
    return this.hobj.post<any>(
      'https://631ec9d658a1c0fe9f57fc8c.mockapi.io/movie/api/movieuser',
      cobj
    );
  }
  //if admin adds new movie to app
  savenewmoviedata(cobj: movieadd): Observable<movieadd> {
    return this.hobj.post<post>(
      'https://631ec9d658a1c0fe9f57fc8c.mockapi.io/movie/api/user',
      cobj
    );
  }

  //if user or admin modifies the content of the userapi
  modifieduserdata(uobj: any): Observable<any> {
    return this.hobj.put<userData>(
      'https://631ec9d658a1c0fe9f57fc8c.mockapi.io/movie/api/movieuser/' +
        uobj.id,
      uobj
    );
  }
}
