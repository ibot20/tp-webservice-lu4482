import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { error } from 'selenium-webdriver';
import {Observable} from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private _http: HttpClient) { }

  public getPelicula(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'fb4bf74381msh49dc5fb88e70b16p104d7ejsne196049ab720',
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
      })
    };
      return this._http.get("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+id, httpOptions);
  }
}
