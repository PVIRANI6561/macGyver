const express = require('express')
const hbs = require('hbs');
const { request } = require('http');
const app = express();
const path = require('path')
const requests = require('requests')

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/templates/views'))
hbs.registerPartials(path.join(__dirname, '/templates/partials'))

app.get("/", (req, res) => {
    res.render("index", {
        name: 'skyline'
    })
})

app.get("/just", (req, res) => {
    res.render("just", {
        name: 'skyline'
    })
})


app.get("/just/*", (req, res) => {
    res.render("error", {
        name: 'skyline'
    })
})

app.get("*", (req, res) => {
    res.render("error", {
        name: 'skyline'
    })
})


app.listen(3000, () => {
    console.log('done');
})