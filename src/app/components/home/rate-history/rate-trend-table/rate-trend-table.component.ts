import { Component, Input } from '@angular/core';
import { Timeseries } from 'src/app/services/currency.data.service';

@Component({
  selector: 'app-rate-trend-table',
  templateUrl: './rate-trend-table.component.html',
  styleUrls: ['./rate-trend-table.component.scss']
})
export class RateTrendTableComponent {
  @Input() dataSource!: Timeseries;
  displayedColumns = ['date', 'rate'];
}
