const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    postId: String,
    username: String,
    content: String,
    dateComment: {
        type: Date,
        default: new Date()
    },
    level: Number,
    parentId: String,
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    }
});
const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;