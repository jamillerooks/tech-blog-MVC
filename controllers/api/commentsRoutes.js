const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

//Get all comments
router.get('/', (req,res) => {
  Comments.findAll({})
  .then(commentsData => res.json(commentsData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});


//Get all comments by one user
router.get('/:id', (req, res) => {
  Comments.findAll({
          where: {
              id: req.params.id
          }
      })
      .then(commentsData => res.json(commentsData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

//Add a new comment
router.post('/', withAuth, (req, res) => {
  Comments.create({ 
    ...req.body, user_id: req.session.user_id })
    .then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


//Delete comment
router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(commentsData => {
      if (!commentsData) {
        res.status(404).json({ message: 'Delete Failed' });
        return;
      }
      res.json(commentsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;