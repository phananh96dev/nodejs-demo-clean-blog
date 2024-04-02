const BlogPost = require('../models/BlogPost');
const session = require('express-session')
module.exports = (req, res) => {
    BlogPost.find({ userId: req.session.userId }, (err, posts) => {
        res.render('mypost', {
            blogpost: posts
        });
    })
}