import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://reqres.in/api'
  constructor(private http: HttpClient) { }

  
  login(body: any): Observable<any> {
    return this.http.post(this.apiUrl + '/login', body, this.getOptions())
  }

  getOptions(): any {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		};
		return httpOptions;
	}
}
