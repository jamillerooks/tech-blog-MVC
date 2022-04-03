const sequelize = require('../config/connection');
const { User, Post, Comments} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentsData = require('./commentsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comments.bulkCreate(commentsData, {
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
