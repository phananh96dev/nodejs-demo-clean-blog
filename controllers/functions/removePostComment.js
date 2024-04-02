const Comment = require('../../models/Comment');
module.exports = {
    executeRemove: (id, postId) => {
        if(id != "") {
            Comment.findByIdAndDelete(id, (err) => {
                if(err) {
                    console.log(err);
                }
            })
        }
        else {
            Comment.deleteMany({ postId: postId }, (err) => {
                if(err) {
                    console.log(err);
                }
            })
        }
    }
}