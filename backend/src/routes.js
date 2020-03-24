const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
    return response.json({
        event: 'Semana OmniStack 11.0',
        aluno: 'Igor Cazé'
    })
});

module.exports = routes;