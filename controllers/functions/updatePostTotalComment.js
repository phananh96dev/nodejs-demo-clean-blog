const BlogPost = require('../../models/BlogPost');
const Comment = require('../../models/Comment');

module.exports = {
    executeUpdate: (postId) => {
        Comment.count({ postId: postId }, (err, totalOfComment) => {
            BlogPost.findByIdAndUpdate(postId, {
                totalComment: totalOfComment
            }, (err) => {
                if(err) {
                    console.log(err);
                }
            })
        })    
    }
};