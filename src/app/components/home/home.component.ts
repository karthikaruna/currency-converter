import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConvertQuery, ConvertResponse as Conversion, CurrencyDataService } from 'src/app/services/currency.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private currencyDataService: CurrencyDataService) {}

  symbols!: Array<string>;
  conversion!: Conversion;

  ngOnInit() {
    this.currencyDataService.getSymbols().subscribe((symbols) => this.symbols = symbols);
  }

  convert() {
    this.currencyDataService.convert(
      this.conversionForm.value as unknown as ConvertQuery
    ).subscribe((conversion) => this.conversion = conversion);
  }

  switchSymbols(event: Event) {
    event.preventDefault();

    const {
      from: { value: newToValue },
      to: { value: newFromValue }
    } = this.conversionForm.controls;

    this.conversionForm.controls.from.setValue(newFromValue);
    this.conversionForm.controls.to.setValue(newToValue);
  }

  conversionForm = new FormGroup({
    amount: new FormControl(null, Validators.required),
    from: new FormControl(null, Validators.required),
    to: new FormControl(null, Validators.required),
  });
}
