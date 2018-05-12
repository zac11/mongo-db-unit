'use strict';
const chai = require('chai');
const expect = chai.expect;
var User = require('../user/user.js');


describe('Saves a single record',()=>{
    it('saves a single record to db',(done)=>{
        var user = new User({
            firstname : "Akanksha",
            lastname : "Verma",
            id : 123,
            plan : "GF"
        });
        user.save().then(()=>{
           expect(user.isNew).to.be.false;
            done();
        });
    });
});