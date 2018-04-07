import {currencies} from './currencies'

export class CurrencyService {
    
    getSupportedCurrencies() {
        return currencies;
    }
}