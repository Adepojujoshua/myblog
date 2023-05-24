const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');


// i added 27017 as seen in localhost for it toshow on mongodb compass.
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
});

// this just creates a new data
// BlogPost.create({
//   title: 'The test',
//   body:
//     'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.',
// });
//------------------------------------------------------
// this creates as well as prints the data in the console
// BlogPost.create({
//   title: 'Another test here',
//   body: 'testing db once more here',
// })
//   .then(blogpost => {
//     console.log(blogpost);
//   })
//   .catch(err => {
//     console.error(err);
//   });
//----------------------------------------------------
// async function getBlogPosts() {
//   const posts = await BlogPost.find({});
//   return posts;
// }
// console.log(getBlogPosts());

// BlogPost.find({})
//------------------------------------------------------
// BlogPost.find({ title: 'Another test' })
//   .then(blogposts => {
//     console.log(blogposts);
//   })
//   .catch(err => {
//     console.log(err);
//   });
//------------------------------------------------------
var id = '645d0ae2fa4114f7411c7aca';

// BlogPost.findByIdAndUpdate(id, { title: 'Updated stuff' }, { new: true })
//   .then(updatedPost => console.log(updatedPost))
//   .catch(err => console.error(err));
//------------------------------------------------------
BlogPost.findByIdAndDelete(id)
  .then(deletedPost => console.log(deletedPost))
  .catch(err => console.error(err));
