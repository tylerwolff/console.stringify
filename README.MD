Automatically pretty-prints a stringified version of any arguments passed in.

### How to use

```js
console.stringify({
  btc: { name: "Bitcoin", price: 10687.22 },
  eth: { name: "Ethereum", price: 194.54 },
  ltc: { name: "Litecoin", price: 75.1 }
});

// will print out
{
  "btc": {
    "name": "Bitcoin",
    "price": 10687.22
  },
  "eth": {
    "name": "Ethereum",
    "price": 194.54
  },
  "ltc": {
    "name": "Litecoin",
    "price": 75.1
  }
}
```
