// Require
require('dotenv').config();

// Import express library
const express = require('express');
const app = express()

// Port def
const port = process.env.PORT || 3002

app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App!`)
})

app.listen(port, () => {
    console.log("Express is listening on port ", port)
});