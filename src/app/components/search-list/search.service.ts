import { ISearch } from '../../models/ISearch';
import { ApiUrlConstants } from '../../common/constants/apiUrl.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {
  }
  getAllcategories1(): Observable<ISearch[]> {
    return this.http.get<ISearch[]>(ApiUrlConstants.Categories_All)
  }

  

  getAllcategories(searchText: string): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Cache-Control': 'no-cache' }
    const body = JSON.stringify(searchText);
    console.log(body)
    return this.http.post(ApiUrlConstants.Categories_All, body, { 'headers': headers })

    
  }
  
}
