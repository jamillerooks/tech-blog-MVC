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

  for (const posts of postData) {
    await Post.create({
      ...posts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comment = await Comments.bulkCreate(commentsData, {
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
