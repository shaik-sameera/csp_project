const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const op = require('./routes/op');
const register=require('./routes/register');
//const Teachers = require('./Routes/Teachers')
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/op', op);
app.use('/register',register)
//app.use('/Teachers', Teachers);





module.exports = app;