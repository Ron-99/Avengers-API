'use strict';
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://ron99:Avenger1234@ds018308.mlab.com:18308/avengers-api', {
    useNewUrlParser: true,
    useFindAndModify: false
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);