const { User } = require("../models");
const { cloudinary } = require("../utils/cloudinary");

exports.postUserDetails = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }
  try {
    const Img = req.body.photoUrl;
    var uploadedResponse = await cloudinary.uploader.upload(Img, {
      upload_preset: "neppharm_users",
    });
    console.log(uploadedResponse);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error while uploading to cloudinary",
    });
  }

  const user = {
    id: req.body.id,
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    photoUrl: uploadedResponse.url,
  };
  User.create(user)
    .then((result) => res.send(result))
    .catch((error) => {
      res.status(404).send({
        message: error.message || "Some error occurred creating user",
      });
    });
};

exports.getAllUsers = (req, res) => {
  User.findAll()
    .then((users) => res.send(users))
    .catch((error) =>
      res.status(500).send({
        message: error.message || "failed to fetch requested information",
      })
    );
};

exports.getUserbyId = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => res.send(user))
    .catch((error) => {
      res.status(404).send({
        message: error?.message || "failed to fetch user with id= " + id,
      });
    });
};
