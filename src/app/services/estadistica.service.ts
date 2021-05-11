import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  constructor(private _http:HttpClient) { }

  public getPais(pais:string):Observable<any>{
    const httpOption = {
      headers:new HttpHeaders({
        "x-rapidapi-key": "fb4bf74381msh49dc5fb88e70b16p104d7ejsne196049ab720", 
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
      }),
    }
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+pais, httpOption);
  }
}
