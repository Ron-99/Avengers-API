'use strict';
const express = require('express');
const routes = express.Router();

const AvengerController = require('./controllers/AvengerController');

routes.get('/avengers', AvengerController.index);
routes.get('/avenger/:id', AvengerController.show);
routes.post('/avenger', AvengerController.store);
routes.put('/avenger/:id', AvengerController.update);
routes.delete('/avenger', AvengerController.destroy);

module.exports = routes;