const User = require('../models/User');
module.exports = (req, res) => {
    var active = req.body.active;
    if(active == "true") {
        req.body.active = true;
    } else {
        req.body.active = false;
    }
    User.create({
        ...req.body
    }, (err, user) => {
        if(err) {
            console.log(err);
            res.status(400).send('Something broke!');
        }
        res.redirect('/usermanager');
    })
}