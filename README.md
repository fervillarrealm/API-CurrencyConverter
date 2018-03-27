# API-CurrencyConverter

Api for getting realtime conversions.

### Keroku APP
https://currencyconverterapi.herokuapp.com

### Usage

```
URI's relative to https://currencyconverterapi.herokuapp.com/
```

Method | HTTP request | Description |Paremeters
--- | --- | --- | ---
[getAll](https://currencyconverterapi.herokuapp.com/api/currencys) | **GET /api/currencys** | List all currencys availables. | `N/A` 
|[convertFromTo](https://currencyconverterapi.herokuapp.com/api/currencys/1&USD&MXN) | **GET / api/currencys/ amount& from& to** | Gets the specified currency conversion. | `amount:` *[Decimal] Cuantity to convert* `from:` *[String] See currency's* `to:` *[String] See currency's*

---

##### The content of this project is licensed under the MIT License.