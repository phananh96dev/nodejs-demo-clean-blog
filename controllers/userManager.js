const User = require('../models/User');
module.exports = (req, res) => {
    if(req.session.userId && req.session.userType == "root") {
        User.find({ usertype: { $ne: "root" } }, (error, users) => {
            res.render('usermanager', {
                users
            });
        })
        //return res.render('notfound');
    }
    else {
        res.render('notfound');
    }
    
}