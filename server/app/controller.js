const express = require('express');
const {Application, User} = require('./users');
const {SuggestedExercises} = require('./exercises');

var application = new Application();
var exercises = new SuggestedExercises();

const app = express.Router();


app.get("/", function(req, res){
    res.send(application);
})

app.get("/getExercises", (req, res) => {
    res.send({ExerciseList: exercises.suggestedExercises});
})

app.post("/users/addUser", (req, res) => {
    const user = application.login(req.body.name, req.body.fbid, req.body.access_token)
    res.send(user);
})

app.get("/users/view", (req,res) => {
    res.send({UserList: application.users});
})

app.get("/users/view/:userid", (req, res) => {
    var identity = req.header("usersIDNum");
    if(application.users[req.params.userid].sharedWith.includes(String(identity)))
        res.send(application.users[req.params.userid]);
    else
        res.send("Access Denied: Get permission to View");

})

app.post("/users/activity", (req, res) => {
    var identity = req.header("usersIDNum");
    application.addExercise(req.body.exercise, identity);
    res.send(application.users[identity]);

})

app.post("/users/food", (req, res) => {
    var identity = req.header("usersIDNum");
    application.addExercise(req.body.food, identity);
    res.send(application.users[identity]);

})

app.post("/users/info", (req, res) => {
    var identity = req.header("usersIDNum");
    application.addExercise(req.body.exercise, identity);
    res.send(application.users[identity]);

})

app.post("/users/sport", (req, res) => {
    var identity = req.header("usersIDNum");
    application.addSport(req.body.sport, identity);
    res.send(application.users[identity]);

})

app.post("/users/giveaccess", (req, res) => {
    var identity = req.header("usersIDNum");
    application.access(req.body.viewer, identity);
    res.send("Access granted");

})

app.post('/users', (req, res) => {
    const player = application.login(req.body.name)
    res.send(player);
})

module.exports = app;