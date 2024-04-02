const BlogPost = require('../models/BlogPost');
const path = require('path');
const session = require('express-session');
module.exports = (req, res) => {
    BlogPost.findByIdAndUpdate(req.body._id, {
        title: req.body.title,
        body: req.body.body,
        image: req.body.image
    }, function (err) {
        if(err) {
            console.log(err);
            res.status(400).send({ error: 'Something failed!' });
        }
        res.redirect('/mypost');
    });
}