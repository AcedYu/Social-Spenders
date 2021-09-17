const router = require('express').Router();
const { User, Post, Comment, Followers } = require('../../models');

// Post a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Confirm login of an existing user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.is_admin = userData.is_admin;

      res.json({
        user: userData,
        message: 'You are now logged in!'
      });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Authorization API call, will return req.session.logged_in
router.get('/auth', (req, res) => {
  if (req.session.logged_in) {
    res.status(200).json(req.session.logged_in);
  } else {
    res.status(200).json(false);
  }
});

// Authorization API call, will return req.session.is_admin
router.get('/admincheck', (req, res) => {
  if (req.session.is_admin) {
    res.status(200).json(req.session.is_admin);
  } else {
    res.status(200).json(false);
  }
});

// Destroy the existing session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Post,
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['name'],
          },
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/follow', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
          as: "following",
          through: {
            model: Followers,
          },
        },
        {
          model: User,
          attributes: ['name'],
          as: "followed_by",
          through: {
            model: Followers,
          },
        },
      ]
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/unfollow/:id', async (req, res) => {
  try {
    const followData = Followers.destroy({
      where: {
        user_id: req.session.user_id,
        follow_id: req.params.id
      }
    })
    res.status(200).json(followData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/me', async (req, res) => {
  console.log(req.session.user_id);
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: Post,
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['name'],
          },
        },
        {
          model: User,
          attributes: ['name'],
          as: "following",
          through: {
            model: Followers,
          },
        },
        {
          model: User,
          attributes: ['name'],
          as: "followed_by",
          through: {
            model: Followers,
          },
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/myfollowing', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
          as: "following",
          through: {
            model: Followers,
          },
        },
      ],
    });
    res.status(200).json(userData.following);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/myfollowers', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
          as: "followed_by",
          through: {
            model: Followers,
          },
        },
      ],
    });
    res.status(200).json(userData.followed_by);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/follow', async (req, res) => {
  try {
    const followData = await Followers.create(req.body)
    res.status(200).json(followData);
  } catch {
    res.status(500).json(err);
  }
});

router.get('/followers/:user_id', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.params.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
          as: "followed_by",
          through: {
            model: Followers,
          },
        },
      ],
    });
    res.status(200).json(userData.followed_by);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/following/:user_id', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.params.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
          as: "following",
          through: {
            model: Followers,
          },
        },
      ],
    });
    res.status(200).json(userData.following);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Post,
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['name'],
          },
        },
        {
          model: User,
          attributes: ['name'],
          as: "following",
          through: {
            model: Followers,
          },
        },
        {
          model: User,
          attributes: ['name'],
          as: "followed_by",
          through: {
            model: Followers,
          },
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/username', async (req, res) => {
  try {
    const userData = await User.update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    )
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.put('/image', async (req, res) => {
  try {
    const userData = await User.update(
      {
        image: req.body.image
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    )
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;