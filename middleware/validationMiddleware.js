module.exports = (req, res, next) => {
    if(req.body.title == "" || req.body.body == "") {
        return res.redirect('/posts/new');
    }
    next();
};