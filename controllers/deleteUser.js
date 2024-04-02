const User = require('../models/User');
module.exports = (req, res) => {
    User.findByIdAndDelete(req.body._id, (err, user) => {
        if(err) {
            console.log(err);
            res.status(400).send({ error: 'Something failed!' });
        }
        res.redirect('/usermanager');
    })
}