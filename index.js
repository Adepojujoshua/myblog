const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const { title } = require('process');
const fileUpload = require('express-fileupload');

mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.listen(4000, () => {
  console.log('listening on port 4000');
});

// app.get('/', async (req, res) => {
//   // res.sendFile(path.resolve(__dirname,'pages/index.html'));
//   try{
//     const blogposts = BlogPost.find({})
//     .then(blogposts => {
//       console.log(typeof(blogspots));
//     })
//   }catch(err => {
//       console.error(err);
//     });
//   res.render('index', { blogposts });
// });

const homeController = require('./controllers/home');
app.get('/', homeController);

const aboutController = require('./controllers/about');
app.get('/about', aboutController);

const contactController = require('./controllers/contact');
app.get('/contact', contactController);

const getPostController = require('./controllers/getPost');
app.get('/post/:id', getPostController);

const newPostController = require('./controllers/newPost');
app.get('/posts/new', newPostController);

// app.post('/posts/store', (req, res) => {
//   console.log(req.body);
//   res.redirect('/');
// });

const validateMiddleware = require('./middleware/validationMiddleware');

const storePostController = require('./controllers/storePost');
app.post('/posts/store', validateMiddleware, storePostController);

const newUserController = require('./controllers/newUser');
app.get('/auth/register', newUserController);

const storeUserController = require('./controllers/storeUser');
app.post('/users/register', storeUserController);

//---------------custom middleware----------------
const customMiddleWare = (req, res, next) => {
  console.log('custom middleware');
  next();
};
app.use(customMiddleWare);

// app.use('/posts/store', validateMiddleWare);

// sudo service mongodb start --- to start mongodb shell
// mongo
// sudo service mongodb stop --- to stop mongodb shell

// BlogPost.create(req.body)
// .then(res.redirect('/'))
// .catch(err => {
//   console.error(err);
// });
