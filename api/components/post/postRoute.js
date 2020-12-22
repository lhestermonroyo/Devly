const express = require('express');
const { check } = require('express-validator');

const { addPost, getAllPosts, getPostById, deletePost, likePost, unlikePost, addComment, deleteComment } = require('./postController');
const auth = require('../../utils/authUtil');

const router = express.Router();

router.post(
  '/',
  [
    auth,
    check('text', 'Text is required.').not().isEmpty()
  ],
  addPost
);

router.get(
  '/',
  auth,
  getAllPosts
);

router.get(
  '/:id',
  auth,
  getPostById
);

router.delete(
  '/:id',
  auth,
  deletePost
);

router.put(
  '/like/:id',
  auth,
  likePost
);

router.put(
  '/unlike/:id',
  auth,
  unlikePost
);

router.put(
  '/comment/:id',
  [
    auth,
    check('text', 'Text is required.').not().isEmpty()
  ],
  addComment
);

router.delete(
  '/comment/:id/:comment_id',
  auth,
  deleteComment
);

module.exports = router;