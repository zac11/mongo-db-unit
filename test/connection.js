'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done)=>{
    //connects to mongoose database
    mongoose.connect('mongodb://localhost/testdb');

    mongoose.connection.once('open',()=>{
        console.log('Congrats! Connected to Mongo DB');
        done();
    }).on('error',()=>{
        console.log('Connection error ',error);
    });
});


beforeEach((done)=>{
    mongoose.connection.collections.users.drop(()=>{
        done();
    });
});