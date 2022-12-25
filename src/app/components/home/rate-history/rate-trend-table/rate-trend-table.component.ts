import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate-trend-table',
  templateUrl: './rate-trend-table.component.html',
  styleUrls: ['./rate-trend-table.component.scss']
})
export class RateTrendTableComponent {
  @Input() dataSource!: Array<{ date: string; rate: number }>;
  displayedColumns = ['date', 'rate'];
}
