const Comment = require('../../models/Comment');
const updatePostTotalComment = require('../functions/updatePostTotalComment');
module.exports = (req, res) => {
    Comment.create({
        postId: req.body.postId,
        username: req.body.username,
        content: req.body.content,
        level: 2,
        parentId: req.body.parentId
    }, function (err) {
        updatePostTotalComment.executeUpdate(req.body.postId);
        res.redirect('/post/' + req.body.postId);
    })
}