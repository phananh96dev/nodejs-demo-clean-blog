const BlogPost = require('../models/BlogPost');
module.exports = (req, res) => {
    BlogPost.find({}, (err, posts) => {
        //console.log(req.session);
        res.render('index', {
            blogpost: posts
        });
    })
}