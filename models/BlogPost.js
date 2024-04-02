const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    userId: String,
    username: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: String,
    totalComment: {
        type: Number,
        default: 0
    }
});
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;