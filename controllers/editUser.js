const User = require('../models/User');
module.exports = (req, res) => {
    var active = req.body.active;
    if(active == "true") {
        req.body.active = true;
    } else {
        req.body.active = false;
    }
    console.log(active);
    User.findByIdAndUpdate(req.body._id, {
        username: req.body.username,
        active: req.body.active,
        usertype: req.body.usertype
    }, (err, user) => {
        if(err) {
            console.log(err);
            res.status(400).send({ error: 'Something failed!' });
        }
        res.redirect('/usermanager');
    })
}