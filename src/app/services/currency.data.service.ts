import { HttpClient, HttpParams } from '@angular/common/http';
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

export interface ConvertQuery {
  from: string;
  to: string;
  amount: number;
}

export interface ConvertResponse {
  info: {
    rate: number;
  };
  query: ConvertQuery;
  result: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {
  constructor(private http: HttpClient) {}

  getSymbols() {
    return this.http.get<SymbolsResponse>(`${API_BASE}/symbols`).pipe(map((r) => Object.keys(r.symbols)));
  }

  convert({ from, to, amount }: ConvertQuery) {
    const params = new HttpParams()
      .set('from', from)
      .set('to', to)
      .set('amount', amount);

    return this.http.get<ConvertResponse>(`${API_BASE}/convert`, { params });
  }
}
