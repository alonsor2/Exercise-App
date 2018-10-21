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
    const NewUser = new User(req.body.name, application.users.length);
    application.users.push(NewUser);
    res.send(NewUser);
})

app.get("/users/view", (req,res) => {
    res.send({UserList: application.users});
})

app.get("/users/view/:userid", (req, res) => {
    var identity = req.header("usersIDNum");
    if(application.users[req.params.userid].accessType.includes(String(identity)))
        res.send(application.users[req.params.userid]);
    else
        res.send("Access Denied");

})

app.post("/users/activity", (req, res) => {
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




module.exports = app;