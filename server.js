'use strict';

const express = require('express');

const app = express();
const errorMiddlewear = require('./error.js');
const notFound = require('./404.js');
const requestTime = require('./requestTime.js');
const randomNumber = require('./randomNum.js');
const PORT = process.env.PORT || 8080;

app.use(requestTime);

app.get('/a', (req,res) => {
    res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
    res.status(200).send('Route B');
});

app.get('/c', randomNumber, (req,res) => {
    res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
    res.status(200).send('Route D');
});

app.get('/*', notFound, (req, res)=> {
    res.status(404).send('not found');


});

app.use(errorMiddlewear)



app.listen(PORT, () => console.log(`Listening on ${PORT}`));