const BlogPost = require('../models/BlogPost');
const removePostComment = require('./functions/removePostComment');
module.exports = (req, res) => {
    BlogPost.findByIdAndDelete(req.body._id, function (err) {
        removePostComment.executeRemove("", req.body._id)
        if(err) {
            console.log(err);
            res.status(400).send({ error: 'Something failed!' });
        }
        res.redirect('/mypost');
    })
}