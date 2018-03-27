# API-CurrencyConverter

Api for getting realtime conversions from google finance api
https://finance.google.com/finance/converter?a=1&from=USD&to=MXN

### Keroku APP
https://currencyconverterapi.herokuapp.com

### Usage

Get all currencys available
```
https://currencyconverterapi.herokuapp.com/api/currencys
```

|Method       |HTTP request             | Description                     |
|-------------|-------------------------|---------------------------------|
|getCurrency  | /api/currencys          | List the available currencys    |
|convert      | /api/convert/