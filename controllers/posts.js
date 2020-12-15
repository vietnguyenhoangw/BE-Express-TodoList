const mongoose = require("mongoose");

const getPost = (_req, res, next) => {
  mongoose.model("Posts").find({}, (err, post) => {
    if (err) {
      return res.send(`errors: ${error}`);
    }
    res.send(post);
  });
};

const addPost = (req, res) => {
  const { title, createAt, content, comments, authorId } = req.body;
  mongoose.model("Posts").create(
    {
      _id: new mongoose.Types.ObjectId(),
      title: title,
      createAt: createAt,
      content: content,
      comments: comments,
      authorId: authorId
    },
    (error, posts) => {
      if (error) {
        return res.send(
          `There was a problem adding the information to the database: ${error}`
        );
      }
      res.send(posts);
    }
  );
};

module.exports = { getPost, addPost };
