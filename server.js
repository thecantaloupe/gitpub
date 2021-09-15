// Require
require('dotenv').config();

// Import express library
const express = require('express');
const app = express()

// Port def
const port = process.env.PORT || 3002

// Import Drinks Data
const drinks = require("./models/drinks.js")


// Routes
app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App!`)
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs',{allDrinks: drinks})
})

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', { //second param must be an object
        drink: drinks[req.params.id] //there will be a variable available inside the ejs file called drinks, its value is drink[req.params.id]
    })
});

app.listen(port, () => {
    console.log("Express is listening on port ", port)
});