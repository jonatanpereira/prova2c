import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../models/Medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  baseURL = 'http://localhost:1234';

  constructor(private http: HttpClient) { }

  listar(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.baseURL);
  }

  create(cadastrar: Medico): Observable<Medico>{
    return this.http.post<Medico>(this.baseURL, cadastrar);

  }
}
