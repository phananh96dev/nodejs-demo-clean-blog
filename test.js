const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://127.0.0.1:27017/blog_demo', {useNewUrlParser: true});

// BlogPost.create({
//     title: 'Đây là sách dạy học lập trình Node.js từ cơ bản 2',
//     body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn. 2'
// }, (err, blogpost) => {
//     console.log(err, blogpost);
// });

// BlogPost.find({
//     title: 'Đây là sách dạy học lập trình Node.js từ cơ bản'
// }, (err, blogpost) => {
//     console.log(err, blogpost);
// })

// var id = "62a802cdd32490236b3eb3e9";
// BlogPost.findByIdAndUpdate(id, {
//     title: "Updated book name"
// }, (err, blogpost) => {
//     console.log(err, blogpost);
// })

// var id = "62a8033af782af2e0e154cb8";
// BlogPost.findByIdAndDelete(id, (err, blogpost) => {
//     console.log(err, blogpost);
// })
