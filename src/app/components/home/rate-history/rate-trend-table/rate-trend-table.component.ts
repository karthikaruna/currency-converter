import { Component, Input, OnChanges } from '@angular/core';
import { Timeseries } from 'src/app/services/currency.data.service';

@Component({
  selector: 'app-rate-trend-table',
  templateUrl: './rate-trend-table.component.html',
  styleUrls: ['./rate-trend-table.component.scss']
})
export class RateTrendTableComponent implements OnChanges {
  @Input() timeseries!: Timeseries;
  displayedTimeseriesColumns = ['date', 'rate'];

  statistics!: Array<{ label: string; value: number }>;
  displayedStatisticsColumns = ['label', 'value'];

  ngOnChanges() {
    this.statistics = [{
        label: 'Lowest',
        value: Math.min(...this.timeseries.map((x) => x.rate))
      }, {
        label: 'Highest',
        value: Math.max(...this.timeseries.map((x) => x.rate))
      }, {
        label: 'Average',
        value: this.timeseries.reduce((acc, x) => acc + x.rate, 0) / this.timeseries.length
      }];
  }
}
