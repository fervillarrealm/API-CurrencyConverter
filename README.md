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
--- | --- | ---
<td colspan="4">[getAll](https://currencyconverterapi.herokuapp.com/api/currencys) | **GET / api/currencys** | List all currencys availables. | `N/A` 
|[convertFromTo](https://currencyconverterapi.herokuapp.com/api/currencys/1&USD&MXN) | **GET / api/currencys/ amount& from& to** | Gets the specified currency conversion. | `amount:` *[Decimal] Cuantity to convert* `from:` *[String] See currency's* `to:` *[String] See currency's*
