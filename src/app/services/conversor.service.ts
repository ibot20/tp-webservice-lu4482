import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private _http:HttpClient) { }

  public postConversor(toType:string, fromType:string, fromValue:number):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "fb4bf74381msh49dc5fb88e70b16p104d7ejsne196049ab720",
      	"x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com"
      }),
    }
    let body = {
      "to-type":toType,
      "from-type":fromType,  
      "from-value":fromValue,
    }
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", body, httpOption);
  }
}
