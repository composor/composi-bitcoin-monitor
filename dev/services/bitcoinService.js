import fetch from 'unfetch';

const mapToPrice = (bpiPrice) => {
  return {
    code: bpiPrice.code,
    description: bpiPrice.description,
    currentRate: bpiPrice.rate_float
  };
};

const BASE_URL = 'https://api.coindesk.com/v1/bpi';

export class BitcoinService {  
  
  getPrice(currency) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/currentprice/${currency}.json`)
        .then(response => response.json())
        .then(response => {
          if (response && response.bpi) {
            resolve({
              [currency]: mapToPrice(response.bpi[currency])
            });
          }
        })
        .catch(error => reject(error.message));
    });
  }  

  getPrices() {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/currentprice.json`)
        .then(response => response.json())
        .then(response => {
          if (response && response.bpi) {
            resolve({   
              EUR: mapToPrice(response.bpi.EUR),
              GBP: mapToPrice(response.bpi.GBP),
              USD: mapToPrice(response.bpi.USD)
            });
          } else {
            reject('No Bitcoin prices available');
          }
        });
    });
  }
}