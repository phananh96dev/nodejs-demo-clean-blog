const BlogPost = require('../models/BlogPost.js')
const path = require('path');
const session = require('express-session');
module.exports = (req, res) => {   
    BlogPost.create({
        title: req.body.title,
        body: req.body.body,
        userId: req.session.userId,
        username: req.session.userName,
        image: req.body.image
    }, function (err) {
        res.redirect('/')
    })

    /* // This is a way to upload image to upload folder
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '../public/upload', image.name), function (error) {
        BlogPost.create({
            title: req.body.title,
            body: req.body.body,
            userId: req.session.userId,
            username: req.session.userName,
            image: '/upload/' + image.name
        }, function (err) {
            // console.log(path);
            res.redirect('/')
        })
    })*/
}
