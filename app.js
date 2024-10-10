// write a function that takes in a string
//and converts the first letter of everyword to uppercase

//hello world ===> Hello World
const firstLetterToCaps = (str) => {
  const result = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join(" ");
};
console.log(firstLetterToCaps("testing is fun and stressful"));

// write a function that checks if the parameter is a number or not
// retrun true or false

const checkNumber = (arg) => typeof arg === "number";
console.log(checkNumber("hllo"));
//usd ngn
const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];
//YEN NGN AUS NGN
// ('USD', 'NGN', 200) = 200USD is equal to to 200 * rate
// iterate over the currencydata and log a message
//e.g The Exchange rate for USD to NGN is 1700

currencyData.map((currencyRate) => {
  console.log(
    `The Exchange Rate for ${currencyRate.from} to ${currencyRate.to} is ${currencyRate.rate}`
  );
});

// write a func that returns the exchange rate for that currency pair
//or an appropriate message if the pair is not found
const findCurrencyPair = (baseCurrency, toCurrency) => {
  //search through the currencyData to find a match
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    console.log(
      `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
    );
  } else {
    console.log("The currency pair cannot be found");
  }
};

console.log(findCurrencyPair("USD", "NGN"));

// write a conversion function
// 2usd =
//200 AUS
const convertCurrency = (baseCurrency, toCurrency, amount) => {
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    //conversion
    console.log(
      `${amount} ${pair.from} is equaivalent to ${amount * pair.rate} ${
        pair.to
      }`
    );
  } else {
    console.log("Currency pair not found");
  }
};

convertCurrency("GBP", "NGN", 500);

// write a funct to add to the currency data list
//AUS NGN 300
const addNewCurrency = (from, to, rate) => {
  //push
  currencyData.push({ from, to, rate });
  console.log(currencyData);
};
addNewCurrency("AUS", "NGN", 1040);
