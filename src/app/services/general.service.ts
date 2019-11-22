import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http: HttpClient, private router: Router) { }
  public apiUrl = `${environment.baseUrl}`;
  
  get(url: string): Observable<any> {
    var urlStr = this.apiUrl + url;
    return this.http.get(urlStr);
  }

  post(url: string, body): Observable<any> {
    // const HttpUploadOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'mimeType' })
    // }
   
    var urlStr = this.apiUrl + url;
    return this.http.post(urlStr, body);
  }

  put(url: string, body): Observable<any> {
     var urlStr = this.apiUrl + url;
     return this.http.put(urlStr, body);
  }

  delete(url: string): Observable<any> {
    var urlStr = this.apiUrl + url;
    return this.http.delete(urlStr);
  }

}
