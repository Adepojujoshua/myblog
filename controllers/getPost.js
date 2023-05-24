const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
  try {
    const blogpost = await BlogPost.findById(req.params.id);
    if (!blogpost) {
      return res.status(404).json({ error: '404 Not Found' });
    }
    res.render('post', { blogpost });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
