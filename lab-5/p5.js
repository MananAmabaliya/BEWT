const myurl= new URL ("https://www.example.com")

myurl.pathname="/products/items"

myurl.searchParams.append("catagory","books")
myurl.searchParams.append("price","200")

console.log('final url',myurl.toString())


