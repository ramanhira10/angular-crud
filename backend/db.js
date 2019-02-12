const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://test:test@ds133558.mlab.com:33558/node-todo', 
    { useNewUrlParser: true },
    err => {
        if (!err) {
            console.log('MongoDB connection succeeded...');
        } else {
            console.log(`Error in DB connection: ${JSON.stringify(err, undefined, 2)}`);
        }
    }
);

module.exports = mongoose;