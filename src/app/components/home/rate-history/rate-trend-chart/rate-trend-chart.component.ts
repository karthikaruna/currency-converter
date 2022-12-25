import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Timeseries } from 'src/app/services/currency.data.service';

@Component({
  selector: 'app-rate-trend-chart',
  templateUrl: './rate-trend-chart.component.html',
  styleUrls: ['./rate-trend-chart.component.scss']
})
export class RateTrendChartComponent implements OnChanges {
  @Input() timeseries!: Timeseries;
  @Input() base!: string;
  @Input() symbols!: string;

  data!: ChartData<'line', Array<{ x: string; y: number }>>;
  options!: ChartOptions<'line'>;

  ngOnChanges() {
    this.data = {
      datasets: [
        {
          data: this.timeseries.map((d) => ({ x: d.date, y: d.rate })),
          borderColor: '#94c720',
          pointBackgroundColor: '#009688'
        }
      ]
    };

    this.options = {
      plugins: {
        tooltip: {
          displayColors: false,
          callbacks: {
            label: (context) => context.parsed.y.toString()
          }
        },
        title: {
          display: true,
          text: `Price of 1 ${this.base} in ${this.symbols}`
        }
      },
    };
  }
}
