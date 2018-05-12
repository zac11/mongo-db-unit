'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname : String,
    lastname : String,
    id : Number,
    plan : String
});

var User = mongoose.model('user',UserSchema);

module.exports = User;