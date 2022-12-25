import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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

export interface ConversionQuery {
  from: string;
  to: string;
  amount: number;
}

export interface ConversionResponse {
  info: {
    rate: number;
  };
  query: ConversionQuery;
  result: number;
}

export type Timeseries = Array<{ date: string; rate: number }>;

interface TimeseriesQuery {
  startDate: string;
  endDate: string;
  base: string;
  symbols: string;
}

interface TimeseriesResponse {
  base: string;
  end_date: string;
  start_date: string;
  rates: {
    [date: string]: {
      [symbol: string]: number;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {
  constructor(private http: HttpClient) {}

  getSymbols() {
    return this.http.get<SymbolsResponse>(`${API_BASE}/symbols`).pipe(map((r) => Object.keys(r.symbols)));
  }

  getConversion({ from, to, amount }: ConversionQuery) {
    const params = new HttpParams()
      .set('from', from)
      .set('to', to)
      .set('amount', amount);

    return this.http.get<ConversionResponse>(`${API_BASE}/convert`, { params });
  }

  getTimeseries({ startDate: start_date, endDate: end_date, base, symbols }: TimeseriesQuery): Observable<Timeseries> {
    const params = new HttpParams()
      .set('start_date', start_date)
      .set('end_date', end_date)
      .set('base', base)
      .set('symbols', symbols);

    return this.http.get<TimeseriesResponse>(`${API_BASE}/timeseries`, { params }).pipe(map((r) =>
      Object.keys(r.rates).map((date) => ({ date, rate: r.rates[date][symbols] }))
    ));
  }
}
