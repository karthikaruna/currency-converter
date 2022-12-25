import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LocalStorage } from 'ngx-webstorage';
import { ConversionQuery, ConversionResponse as Conversion, CurrencyDataService } from 'src/app/services/currency.remote.service';
import { ConversionHistory } from 'src/types';

function positiveNumber(control: FormControl): ValidationErrors | null {
  return Number(control.value) <= 0 ? { positiveNumber: true } : null;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private currencyDataService: CurrencyDataService) {}

  @LocalStorage('conversionHistory', []) conversionHistory!: ConversionHistory;
  symbols!: Array<string>;
  conversion!: Conversion;

  ngOnInit() {
    this.currencyDataService.getSymbols().subscribe((symbols) => this.symbols = symbols);
  }

  convert() {
    this.currencyDataService.getConversion(this.conversionForm.value as unknown as ConversionQuery)
      .subscribe((conversion) => {
        this.conversion = conversion;
        this.conversionHistory = [
          ...this.conversionHistory,
          {
            ...conversion.query,
            time: Date.now()
          }
        ];
      });
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
    amount: new FormControl(null, [Validators.required, positiveNumber]),
    from: new FormControl(null, Validators.required),
    to: new FormControl(null, Validators.required),
  });
}
