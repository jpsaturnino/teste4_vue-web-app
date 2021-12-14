const { Router } = require('express');
const routes = Router();

const Ctrl = require('./Controllers/PDFControl');

routes.post('/busca-textual', Ctrl.buscarTexto);

module.exports = routes;