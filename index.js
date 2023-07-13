const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;
const productRoutes = require("./src/router/prodcut");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/uas_mobile", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.error("Mongodb failde to connect", error);
  });

app.use(productRoutes);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
