const express = require("express")

const app = express()

const data = {name: 'folorunsho', age: 23, hobby: 'coding'}

app.get('/', (req, res) => {
    res.send(data)
})

app.listen(5000, () => {
    console.log(`server connected to port 5000...`)
})