const express = require('express')
const application = require('./app/controller');
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use("/", express.static(__dirname + "/../server/"));
app.use('/application', application);

app.listen(port);