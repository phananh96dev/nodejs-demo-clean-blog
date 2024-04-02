const Comment = require('../../models/Comment');
const BlogPost = require('../../models/BlogPost');
const updatePostTotalComment = require('../functions/updatePostTotalComment');

module.exports = (req, res) => {
    Comment.create({
        postId: req.body.postId,
        username: req.body.username,
        content: req.body.content,
        level: 1,
        parentId: ''
    }, function (err) {
        updatePostTotalComment.executeUpdate(req.body.postId);
        res.redirect('/post/' + req.body.postId);
    })
}