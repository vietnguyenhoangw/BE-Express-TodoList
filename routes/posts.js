const express = require("express"),
  router = express.Router(),
  postController = require("../controllers/posts");

// get post add new post
router.route("/").get(postController.getPost).post(postController.addPost);

module.exports = router;
