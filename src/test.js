const stock = require('./services/stock');

let products;

stock.getProductsPromise().then(data => products = data).then(() => {
    tmpHandleResults(products);
    products.map(guy => {
        console.log(`product name: ${guy.product.name}`)
    })
})














/********************************************************************************
 * Helper functions
 ********************************************************************************/

function tmpHandleResults(items) {
    if (typeof(items) === 'undefined')
        console.log('items is undefined');
    else {
        if (isNaN(items.length)) {
            console.log(items);
        }
        else {
            console.log(`Found ${items.length} items`);
        }
    }
}

function getProducts() {
    stock.getProductsPromise().then((data) => { return data });
}