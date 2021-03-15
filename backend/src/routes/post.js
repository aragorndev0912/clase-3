const { Router } = require('express');
const { post } = require('../controller');

const router = Router();

// CRUD.
router.post('/post', post.create);

router.get('/post', post.get);

router.get('/post/:id', post.search);

router.put('/post/:id', post.update);

router.delete('/post/:id', post.remove);

module.exports = router;