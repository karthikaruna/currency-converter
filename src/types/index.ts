import { ConversionQuery } from 'src/app/services/currency.remote.service';

export type ConversionHistory = Array<ConversionQuery & { time: number }>;
