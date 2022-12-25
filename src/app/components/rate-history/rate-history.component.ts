import { Component, Input, OnChanges } from '@angular/core';
import { CurrencyDataService } from 'src/app/services/currency.remote.service';
import { Timeseries } from 'src/app/types';

@Component({
  selector: 'app-rate-history',
  templateUrl: './rate-history.component.html',
  styleUrls: ['./rate-history.component.scss']
})
export class RateHistoryComponent implements OnChanges {
  @Input() from!: string;
  @Input() to!: string;

  range: 7 | 14 | 30 = 7;
  view: 'TABLE' | 'CHART' = 'TABLE';
  timeseries: Timeseries = [];

  ranges = [{
    label: '7 days',
    value: 7
  }, {
    label: '14 days',
    value: 14
  }, {
    label: '30 days',
    value: 30
  }];

  constructor(private currencyDataService: CurrencyDataService) {}

  ngOnChanges() {
    this.updateTimeseries();
  }

  updateTimeseries() {
    return this.currencyDataService.getTimeseries({
      startDate: new Date(Date.now() - this.range * 24 * 60 * 60 * 1000).toISOString(),
      endDate: new Date().toISOString(),
      base: this.from,
      symbols: this.to
    }).subscribe((timeseries) => this.timeseries = timeseries);
  }
}
