const purchaseProduct = document.getElementById(purchaseProduct) //Getting Button: purchaseProduct ID

const sizeSelector = document.getElementById('size-Selector') //Getting Size-Selector ID
const priceElement = document.getElementById('product-price')//Getting Product P-rice ID

sizeSelector.addEventListener('change', (event) => {
    const selectedPrice = event.target.value
    priceElement.textContent= `$${selectedPrice}`
})  