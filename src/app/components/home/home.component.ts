import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyDataService } from 'src/app/services/currency.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private currencyDataService: CurrencyDataService) {}

  symbols: Array<string> = [];

  ngOnInit() {
    this.currencyDataService.getSymbols().subscribe((symbols) => this.symbols = symbols);
  }

  conversionForm = new FormGroup({
    amount: new FormControl(null, Validators.required),
    from: new FormControl(null, Validators.required),
    to: new FormControl(null, Validators.required),
  });
}
