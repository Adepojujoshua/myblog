module.exports = (req,res,next) => {
  const title = req.body.title;
  const body = req.body.body;
  const dfiles = req.files;
  if (!title || !body || !dfiles) {
    return res.redirect('/posts/new');
  }
  next();
}