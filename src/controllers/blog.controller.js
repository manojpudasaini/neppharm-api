const { Blog } = require("../models");
const { cloudinary } = require("../utils/cloudinary");
exports.postBlogDetails = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }
  try {
    const Img = req.body.image;
    var uploadedResponse = await cloudinary.uploader.upload(Img, {
      upload_preset: "neppharm_blogs",
    });
    console.log(uploadedResponse);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error while uploading to cloudinary",
    });
  }
  const blog = {
    title: req.body.title,
   // tag: req.body.tag,
    content: req.body.content,
    image: uploadedResponse.url,
  };
  Blog.create(blog)
    .then((result) => res.send(result))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred while creating blog",
      });
    });
};

exports.getAllBlogs = (req, res) => {
  Blog.findAll()
    .then((blogs) => res.send(blogs))
    .catch((error) =>
      res.status(500).send({
        message: error.message || "failed to fetch requested information",
      })
    );
};

exports.getBlogbyId = (req, res) => {
  const id = req.params.id;
  Blog.findByPk(id)
    .then((blog) => {
      res.send(blog);
    })
    .catch((err) => {
      res.status(404).send({
        message: "error retrieving product with id =" + id,
      });
    });
};
