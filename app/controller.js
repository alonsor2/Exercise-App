const express = require('express');
const{Users} = require('./users');

const app = express.Router();

app.post('/users', (req, res) => {
    const user = new Users(req.body.name);
    users.push(user);
    res.send(user);
})

module.exports = app;