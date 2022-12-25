export interface Symbol {
  code: string;
  description: string;
}

export interface SymbolsResponse {
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

export type ConversionHistory = Array<ConversionQuery & { time: number }>;

export type Timeseries = Array<{ date: string; rate: number }>;

export interface TimeseriesQuery {
  startDate: string;
  endDate: string;
  base: string;
  symbols: string;
}

export interface TimeseriesResponse {
  base: string;
  end_date: string;
  start_date: string;
  rates: {
    [date: string]: {
      [symbol: string]: number;
    }
  }
}
