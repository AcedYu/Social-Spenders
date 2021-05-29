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

// get all comments
router.get('/', async (req, res) => {
  try {
    const commentData =  await Comment.findAll({
      order: [['timestamp', 'ASC']],
      include: {
        model: User,
        attributes: ['name', 'id', 'image'],
      },
    })
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get comments by post id
router.get('/:post_id', async (req, res) => {
  try {
    const commentData =  await Comment.findAll({
      order: [['timestamp', 'ASC']],
      where: {
        post_id: req.params.post_id,
      },
      include: {
        model: User,
        attributes: ['name', 'id', 'image'],
      },
    })
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;