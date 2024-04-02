const User = require('../models/User');
module.exports = (req, res) => {
    User.create({
        ...req.body,
        active: true,
        usertype: 'user'
    }, (err, user) => {
        //console.log(err);
        res.redirect('/');
    })
}