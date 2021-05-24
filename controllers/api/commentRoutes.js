const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Create a comment
router.post('/', async (req, res) => {
  req.body.user_id = req.session.user_id;
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;