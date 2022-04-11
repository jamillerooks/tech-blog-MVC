const router = require('express').Router();

const postRoutes = require('./postRoutes');
const commentsRoutes = require('./commentsRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes);


module.exports = router;
