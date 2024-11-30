import { Injectable } from '@angular/core';
import { SalesControl } from 'src/app/models/sales_control/sales_control';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalesControlService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getSalesControl(): Observable<SalesControl[]> {
    return this.http.get<SalesControl[]>(`${this.apiUrl}/sales`);
  }
  createSale(sale: SalesControl): Observable<SalesControl> {
    return this.http.post<SalesControl>(`${this.apiUrl}/sales`, sale); // Ajuste aquí
  }
}
