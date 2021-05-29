
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Create a post
router.post('/', async (req, res) => {
  req.body.user_id = req.session.user_id;
  try {
    const PostData = await Post.create(req.body);
    res.status(200).json(PostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Obtain all Posts with their owner an comments
router.get('/', async (req, res) => {
  try {
    const PostData = await Post.findAll({
      order: [['timestamp', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['name', 'id', 'image'],
        },
        {
          model: Comment,
          attributes: ['content', 'timestamp'],
          include: {
            model: User,
            attributes: ['name', 'id', 'image'],
          }
        }
      ],
    });
    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render all of the logged in user's posts
router.get('/myposts', async (req, res) => {
  try {
    const userPostData = await Post.findAll({
      order: [['timestamp', 'DESC']],
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['name', 'id', 'image'],
        },
        {
          model: Comment,
          attributes: ['content'],
        }
      ],
    });
    res.status(200).json(userPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const userPostData = await Post.findAll({
      order: [['timestamp', 'DESC']],
      where: {
        user_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name', 'id', 'image'],
        },
        {
          model: Comment,
          attributes: ['content'],
        }
      ],
    });
    res.status(200).json(userPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// view a post by id
router.get('/:id', async (req, res) => {
  try {
    const PostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name', 'id', 'image'],
        },
        {
          model: Comment,
          attributes: ['content'],
        }
      ],
    });
    res.status(200).json(PostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;