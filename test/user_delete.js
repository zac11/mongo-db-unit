'use strict';
const chai = require('chai');
const expect = chai.expect;
var User = require('../user/user');

describe('It deletes a user',()=>{
    let user;
    beforeEach((done)=>{
        user = new User({
            firstname : "Mike",
            lastname : "Davids",
            id: 1245,
            plan : "Pricing"
        });

        user.save().then(()=>{
            expect(user.isNew).to.be.false;
            done();
        });
    });

    it('now deletes a record from the db',(done)=>{
        User.findOneAndRemove({firstname : "Mike"}).then(()=>{
            User.findOne({firstname : "Mike"}).then((result)=>{
                expect(result).to.be.null;
                done();
            });
        });
    });
});