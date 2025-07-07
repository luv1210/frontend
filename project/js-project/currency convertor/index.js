let exchangeRates = {
  USD: { USD: 1, GBP: 0.76, CNY: 7.25, PKR: 278, INR: 83.5, JPY: 161.5, NZD: 1.65 },
  GBP: { USD: 1.31, GBP: 1, CNY: 9.51, PKR: 366, INR: 110, JPY: 210, NZD: 2.18 },
  CNY: { USD: 0.14, GBP: 0.11, CNY: 1, PKR: 38.5, INR: 11.5, JPY: 22.3, NZD: 0.23 },
  PKR: { USD: 0.0036, GBP: 0.0027, CNY: 0.026, PKR: 1, INR: 0.30, JPY: 0.58, NZD: 0.0059 },
  INR: { USD: 0.012, GBP: 0.0091, CNY: 0.087, PKR: 3.35, INR: 1, JPY: 1.93, NZD: 0.020 },
  JPY: { USD: 0.0062, GBP: 0.0048, CNY: 0.045, PKR: 1.73, INR: 0.52, JPY: 1, NZD: 0.010 },
  NZD: { USD: 0.61, GBP: 0.46, CNY: 4.33, PKR: 169.5, INR: 49.5, JPY: 99.5, NZD: 1 }

};

function convert() {
  let amount = parseFloat(document.getElementById("amount").value);
  let from = document.getElementById("from").value; 
  let to = document.getElementById("to").value;
  let resultDiv = document.getElementById("result");

  if (rwd(amount)) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  let rate = exchangeRates[from][to];
  let converted = (amount * rate).toFixed(2);

  resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
}
