require('dotenv').config({path:__dirname+'/../../.env'});
const https = require('https');

const grocyKey = process.env.grocy_key;
const host = process.env.grocy_url;
const port = process.env.grocy_port;
const stockApiPath = '/api/stock';

const options = {
    host: host,
    port: port,
    path: stockApiPath,
    method: 'GET',
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
    headers: {
        'grocy-api-key': grocyKey
    }
}


function getProductsPromise() {
    return new Promise((resolve, reject) => {
        https.get(options, (res) => {
            let data = '';

            res.on('data', (chunk) => { data += chunk });
            res.on('end', () => { resolve(JSON.parse(data)) });
            res.on('error', reject);
        });
    });
}

function getProducts(callback) { https.get(options, handleProductResponse); }

function handleProductResponse(res) {
    let rawData = ''
    res.on('data', (chunk) => { rawData += chunk });
    res.on('end', () => {
            let productArray = JSON.parse(rawData);
            if (typeof(callback) === 'function') {
                callback(productArray);
            }
            else {
                return productArray;
            }
        });
    res.on('error', (err) => { console.log(`Error getting products:\n\n${err}`) })
}


module.exports = {
    getProducts: getProducts,
    getProductsPromise: getProductsPromise
}
