import { Component, Input } from '@angular/core';
import { Timeseries } from 'src/app/services/currency.data.service';

@Component({
  selector: 'app-rate-trend-chart',
  templateUrl: './rate-trend-chart.component.html',
  styleUrls: ['./rate-trend-chart.component.scss']
})
export class RateTrendChartComponent {
  @Input() timeseries!: Timeseries;
}
