import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ICep from '../../interfaces/cep.interface';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  private readonly url_base = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  buscarCep(cep: string): Observable<ICep> {
    return this.http.get<ICep>(`${this.url_base}/${cep}/json/`);
  }
}
