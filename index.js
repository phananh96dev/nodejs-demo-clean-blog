const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blog_demo', {useNewUrlParser: true});
const expressSession = require('express-session');

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(fileUpload());

app.use(express.static('public'));

app.use(expressSession({
    secret: 'keyboard cat'
}));

const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
const validateMiddleWare = require('./middleware/validationMiddleware')
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');
const userManagerController = require('./controllers/userManager');
const addUserController = require('./controllers/addUser');
const editUserController = require('./controllers/editUser');
const deleteUserController = require('./controllers/deleteUser');
const myPostController = require('./controllers/myPost');
const editPostController = require('./controllers/editPost');
const confirmEditPostController = require('./controllers/confirmEditPost');
const removePostController = require('./controllers/removePost');
// Post comment
const addRootCommentController = require('./controllers/comment/addRootComment');
const addReplyCommentController = require('./controllers/comment/addReplyComment');

global.loggedIn = null;
global.userName = null;
global.userType = null;
app.use('*', (req, res, next) => {
    loggedIn = req.session.userId;
    userName = req.session.userName;
    userType = req.session.userType;
    next()
});

app.get('/', homeController);
app.get('/posts/new', authMiddleware, newPostController);
app.get('/post/:id', getPostController);
app.use('/posts/store', validateMiddleWare);
app.post('/posts/store', authMiddleware, storePostController);
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);
app.get('/auth/logout', logoutController);
app.get('/usermanager', userManagerController);
app.post('/user/add', addUserController);
app.post('/user/edit', editUserController);
app.post('/user/delete', deleteUserController);
app.get('/mypost', myPostController);
app.get('/post/edit/:id', editPostController);
app.post('/posts/edit', confirmEditPostController);
app.post('/post/remove', removePostController);
app.post('/comment/addroot', addRootCommentController);
app.post('/comment/addreply', addReplyCommentController);

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/post', (req, res) => {
    res.render('post');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.use((req, res) => res.render('notfound'));



app.listen(4000, () => {
    console.log('App listening on port 4000');
})
