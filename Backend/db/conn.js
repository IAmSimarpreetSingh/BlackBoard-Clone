const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {

    console.log('Conection Success!');

}).catch((err) => {
    console.log('Error occured! ERROR : ' + err);
});
