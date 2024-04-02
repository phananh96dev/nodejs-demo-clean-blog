const BlogPost = require('../models/BlogPost');
module.exports = (req, res) => {
    BlogPost.findById(req.params.id, (error, detailPost) => {
        res.render('editpost', {
            detailPost
        });
    });
}