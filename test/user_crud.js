const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const chai = require('chai');
const expect = chai.expect;
const User = require('../user/user');

describe('Update Records',()=>{
    let user;
    beforeEach((done)=>{
        user = new User({
            firstname : "Allan",
            lastname : "Downer",
            id : 125,
            plan : "Paid"
        });

        user.save().then(()=>{
            expect(user.isNew).to.be.false;
            done();
        });
    });

    it('updates one record in database',(done)=>{
        User.findOneAndUpdate({firstname : "Allan"},{firstname : "Allen"}).then(()=>{
                User.findOne({firstname : "Allan"}).then((result)=>{
                    expect(result).to.be.null;
                    done();
                });
        });
    });
});