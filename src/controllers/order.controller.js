const { Order } = require("../models");

exports.postOrderDetails = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "cannot be empty",
    });
    return;
  }
  console.log(req);
  const order = {
    UserId: req.body.UserId,
    deliveryLocation: req.body.location || "kathmandu",
    phoneNumber: req.body.phone || "9849788407",
    total: req.body.total,
    orderItems: req.body.orderItems,
  };
  Order.create(order)
    .then((result) => res.send(result))
    .catch((error) => {
      res.status(400).send({
        message: error.message || "some error occurred receiving order",
      });
    });
};
