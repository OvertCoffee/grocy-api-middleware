const express = require('express')
const router = express.Router()

router.get('/add', (req, res, next) => {
    console.log('Hit inventory/add route');
    let foo = 0;
    for (i=0; i<10; i++)
        foo += 1;

    res.send(`foo = ${foo}`);
})

router.post('/add', (req, res, next) => {

    let query = req.query

    // params are encoded in the url
    let params = req.params

    let json = req.json

    let body = req.body

    printTheThing('req.query', query)
    printTheThing('req.params', params)
    printTheThing('req.json', json)
    printTheThing('req.body', body)

    res.sendStatus(200)
})

function printTheThing(name, value) {
    console.log(`${name}: ${JSON.stringify(value, null, 4)}`)
}

module.exports = router
