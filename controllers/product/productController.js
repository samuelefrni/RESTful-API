const {
  Product,
  productJoiSchema,
} = require("../../models/product/productModel");
const { validateRequestFunction } = require("../../utils");

const postProduct = async (req, res) => {
  try {
    const error = validateRequestFunction(productJoiSchema, req, res);
    if (error) return;
    const product = await Product.create(req.body);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const putProduct = async (req, res) => {
  try {
    const error = validateRequestFunction(productJoiSchema, req, res);
    if (error) return;
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ errorMessage: `Product with ${id} id wasn't found` });
    }
    const upgratedProduct = await Product.findById(id);
    res.status(200).json({ upgratedProduct });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ errorMessage: `Product with ${id} id wasn't found` });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { postProduct, putProduct, deleteProduct };
