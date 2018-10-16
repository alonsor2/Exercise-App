const express = require('express');
const {Application, User} = require('./users');

var application = new Application();

const app = express.Router();


app.get("/", function(req, res){
    res.send(application);
})

app.post('/users', (req, res) => {
    const user = new User(req.body.name, req.body.exercise);
    application.users.push(user);
    res.send(user);
})




module.exports = app;