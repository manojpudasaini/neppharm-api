const { Product } = require("../models");
const { cloudinary } = require("../utils/cloudinary");
exports.postProductDetails = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }
  try {
    const Img = req.body.image;
    //console.log(Img);
    var uploadedResponse = await cloudinary.uploader.upload(Img, {
      upload_preset: "neppharm_products",
    });
    console.log(uploadedResponse);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message || "Error while uploading to cloudinary",
    });
  }
  const product = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: uploadedResponse.url,
    requirePrescription: req.body.requirePrescription,
  };
  Product.create(product)
    .then((result) => res.send(result))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred while creating products",
      });
    });
};

exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then((products) => res.send(products))
    .catch((error) =>
      res.status(500).send({
        message: error.message || "failed to fetch requested information",
      })
    );
};

exports.getProductbyId = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.status(404).send({
        message: "error retrieving product with id =" + id,
      });
    });
};
