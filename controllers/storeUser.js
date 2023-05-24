const User = require('../models/User');
const path = require('path');

module.exports = async (req, res) => {
  await User.create(req.body, { runValidators: true })
    .then(res.redirect('/'))
    .catch(err => {
      console.error(err);
    });
};



// try {
//   const username = req.body.username;
//   const password = req.body.password;

//   await User.create({ username, password });
//   res.redirect('/');
//   console.log(User);
// } catch (error) {
//   console.error(error);
// }

// const savedUser = await User.create(
//   {
//     username: username,
//     password: password,
//   },
//   { runValidators: true }
// );
