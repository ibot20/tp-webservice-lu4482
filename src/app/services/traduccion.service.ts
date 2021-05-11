import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraduccionService {

  constructor(private _http: HttpClient) { }

  public getTraduccion(source:string, target:string ,input:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders ({
        'x-rapidapi-key': 'fb4bf74381msh49dc5fb88e70b16p104d7ejsne196049ab720',
        "X-RapidApi-Host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com"
      }),
      params:{
        "source":source,
        "target":target,
        "input":input
      }
    }
    return this._http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate", httpOptions);
  }
}
