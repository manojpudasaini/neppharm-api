const express = require("express");
const { sequelize } = require("./src/models");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ limit: "15mb" }));
const db = require("./src/models");

const productRoutes = require("./src/routes/product.route");
app.use("/product", productRoutes);

const userRoutes = require("./src/routes/user.route");
app.use("/users", userRoutes);

const blogRoutes = require("./src/routes/blog.route");
const { urlencoded } = require("body-parser");
app.use("/blog", blogRoutes);

const port = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(port, async () => {
    console.log("server running");
    try {
      await sequelize.authenticate();
      console.log("connection established successfully");
    } catch (error) {
      console.log("unable to connect to database", error);
    }
  });
});
