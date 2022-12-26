# CurrencyConverter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2 and developed using Node.js v16.17.0

I'm attaching a tiny [walkthrough](./walkthrough.mov), but if anything about the code is unclear, please save it for me to explain over a demo.

## Run

```
cd currency-converter
nvm use 16
npm install
npm run start
```

Navigate to `http://localhost:4200/` then

## Assumptions

1. I used the [MUI](https://material.angular.io/) component library since the provided designs depict the same, plus, to save time by not recreating
2. I used the package [ngx-webstorage](https://www.npmjs.com/package/ngx-webstorage) to simplify management of localStorage. I alternatively could've created a service extending localStorage, but using the package felt neat. Particularly I like the `LocalStorage` decorator.
3. Didn't want to do premature optimizations. Eg., you'll see props being threaded one extra level in a place or two, but that's it. At this point, it felt okay to leave it be and not use a sharing service.
