const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ 
    path : './config.env' 
});
require('./db/conn');

// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files 
app.use(require('./router/auth'));

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});