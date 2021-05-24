const sequelize = require('../config/connection');
const { User, Post, Comment, Followers } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');
const followData = require('./followData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Post.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: Math.floor((Math.random() * 4) + 1),
    });
  }

  const follows = await Followers.bulkCreate(followData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();