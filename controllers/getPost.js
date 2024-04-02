const BlogPost = require('../models/BlogPost');
const Comment = require('../models/Comment');
module.exports = (req, res) => {
    var dataPost = {};
    BlogPost.findById(req.params.id, (error, detailPost) => {
        dataPost.detailPost = detailPost;
        Comment.find({
            postId: detailPost._id
        }, (err, listComment) => {
            dataPost.listComment = listComment;
            res.render('post', {
                dataPost
            });
        });
    });
}
   