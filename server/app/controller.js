const express = require('express');
const {Application, User} = require('./users');


var application = new Application();

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
    var identity = req.header("userID");
    if(application.users[req.params.id].accessType.includes(String(userID)))
        res.send(application.users[req.params.id]);
    else
        res.send("Access Denied");

})

app.post("/users/view/activity", (req, res) => {
    var identity = req.header("usersID");
    application.addExercise(req.body.exercise, identity);

})

app.post("users/accesscontrol", (req, res) => {
    var identity = req.header("usersID");
    application.access(req.body.viewer, identity);
    res.send("Access granted");

})




module.exports = app;