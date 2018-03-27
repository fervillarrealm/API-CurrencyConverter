# API-CurrencyConverter

Api for getting realtime conversions.

### Keroku APP
https://currencyconverterapi.herokuapp.com

### Usage

Get all currencys available
```
https://currencyconverterapi.herokuapp.com/api/currencys
```

Method | HTTP request | Description |Paremeters
--- | --- | --- | ---
 Span <td colspan=3>triple  <td colspan=2>double
[getAll](https://currencyconverterapi.herokuapp.com/api/currencys) | **GET / api/currencys** | List all currencys availables. | `N/A` 
|[convertFromTo](https://currencyconverterapi.herokuapp.com/api/currencys/1&USD&MXN) | **GET / api/currencys/ amount& from& to** | Gets the specified currency conversion. | `amount:` *[Decimal] Cuantity to convert* `from:` *[String] See currency's* `to:` *[String] See currency's*
