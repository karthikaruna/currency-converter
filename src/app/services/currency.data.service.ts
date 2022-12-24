import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const API_BASE = 'https://api.exchangerate.host';

interface Symbol {
  code: string;
  description: string;
}

interface SymbolsResponse {
  symbols: {
    [code: string]: Symbol
  };
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {
  constructor(private http: HttpClient) {}

  getSymbols() {
    return this.http.get<SymbolsResponse>(`${API_BASE}/symbols`).pipe(map((r) => Object.keys(r.symbols)));
  }
}
