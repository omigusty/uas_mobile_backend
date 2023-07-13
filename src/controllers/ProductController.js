const Product = require("../models/Product");

module.exports = {
  index: async (req, res) => {
    const product = await Product.find({});
    res.json(product);
  },

  addProduct: async (req, res) => {
    const product = new Product(req.body);
    res.json(await product.save());
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      },
      {
        new: true,
      }
    );
    res.json(product);
  },

  deleteProduct: (req, res, next) => {
    const { id } = req.params;

    Product.findById(id)
      .then((product) => {
        if (!product) {
          const error = new Error("Produk tidak ditemukan");
          error.errorStatus = 404;
          throw error;
        }
        return Product.findByIdAndRemove(id);
      })
      .then((result) => {
        res.status(200).json({
          message: "Data produk berhasi dihapus",
          data: result,
        });
      })
      .catch((err) => {
        next(err);
      });
  },
};
