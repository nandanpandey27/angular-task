import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";

@Injectable()
export class ApiService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
  }

  get(url: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}`, {
      headers: this.headers,
    });
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, data, {
      headers: this.headers,
    });
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${url}`, {
      headers: this.headers,
    });
  }
}
