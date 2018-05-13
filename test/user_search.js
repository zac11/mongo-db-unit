'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const chai = require('chai');
const expect = chai.expect;
const User = require('../user/user');

describe('Finding records from a user',()=>{
    var user;
    beforeEach((done)=>{
        user = new User({
            firstname : "Junior",
            lastname : 'Dala',
            id : 909,
            plan : 'paid'
        })
        user.save().then(()=>{
            expect(user.isNew).to.be.false;
            done();
        });
    });

    it('find a user from model',(done)=>{
        User.findOne({firstname : 'Junior'}).then((result)=>{
            expect(result.firstname).to.equal('Junior');
            done();
        });
    });
});