const { Post } = require('../models');
const { unlink } = require('fs-extra');


// CRUD.
const create = async (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.description = req.body.description;
  post.originalname = req.file.originalname;
  post.mimetype = req.file.mimetype;
  post.destination = req.file.destination;
  post.filename = req.file.filename;
  post.path = req.file.path;
  await post.save();

  const data = {
    status: 'success',
    data: {
      posts: [post]
    }
  };

  res.json(data);
};

const get = async (req, res) => {
  const posts = await Post.find();

  const data = {
    status: 'success',
    data: { posts }
  };

  res.json(data);
};

const search = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  const data = {
    status: 'success',
    data: { posts: [post] }
  };

  res.json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  post.title = req.body.title;
  post.description = req.body.description;
  await post.save();
  
  const data = {
    status: 'success',
    data: { posts: [post] }
  };

  res.json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);

  await unlink(post.path);

  const data = {
    status: 'success',
    data: { posts: [post] }
  };

  res.json(data);
};

module.exports = {
  create,
  get,
  search,
  update,
  remove
}
