const express = require('express');
const {Application, User} = require('./users');
//const {Exercises} = require('./exercises');

var application = new Application();
//var exercise = new Exercises();
const app = express.Router();


app.get("/", function(req, res){
    res.send(application);
})

app.post("/users/addUser", (req, res) => {
    const NewUser = new User(req.body.name, application.users.length);
    application.users.push(NewUser);
    res.send(NewUser);
})

app.get("/users/view", (req,res) => {
    res.send({UserList: application.users});
})

app.get("/users/view/:id", (req, res) => {
    res.send(application.users[req.params.id]);

})

app.post("/users/view/activity", (req, res) => {
    var identity = req.header("usersID");
    application.addExercise(req.body.exercise, identity);

})




module.exports = app;