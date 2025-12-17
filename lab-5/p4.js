const {URL} = require('url')

const urlString = new URL ("https://www.example.com/products/books?category=fiction&sort=asc")

console.log("Protocol:", urlString.protocol);

console.log("Hostname:", urlString.hostname);

console.log("Pathname:", urlString.pathname);


urlString.searchParams.forEach((value, key) => {
    console.log(key + " = " + value);
});


