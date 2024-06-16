import { Observable } from 'rxjs';
import { API_URL } from './api-url.token';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private readonly apiUrl = inject(API_URL);
  private readonly httpClient = inject(HttpClient);

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${url}`, { params, headers: this.headers });
  }

  post<T, D>(url: string, data: D): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}${url}`, data, { headers: this.headers });
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}${url}`, data, { headers: this.headers });
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}${url}`);
  }
}
