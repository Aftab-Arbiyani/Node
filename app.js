const express = require('express');
const bodyParser = require('body-parser');

const employeeRoute = require('./routes/employee');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(employeeRoute);

app.listen(8080);