import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'ngx-webstorage';
import { ConversionHistory } from 'src/app/types';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.scss']
})
export class ConversionHistoryComponent {
  @LocalStorage('conversionHistory', []) conversionHistory!: ConversionHistory;
  displayedColumns = ['time', 'event', 'actions'];

  constructor(private router: Router) {}

  delete(index: number) {
    this.conversionHistory = this.conversionHistory.filter((_, i) => i !== index);
  }

  navigate(item: ArrayElement<ConversionHistory>) {
    this.router.navigate(['/'], { queryParams: item });
  }
}
