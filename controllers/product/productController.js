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
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
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
    return res.status(200).json({ upgratedProduct });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
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
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const productById = await Product.findById(id);

      if (!productById) {
        return res
          .status(404)
          .json({ errorMessage: `Product with ${id} id wasn't found` });
      }

      return res.status(200).json({ productById });
    }

    const limitValue = req.query.lm || 2;
    const skipValue = req.query.sk || 0;
    const product = await Product.find().limit(limitValue).skip(skipValue);

    if (!product) {
      return res.status(200).json({ product });
    }

    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { postProduct, putProduct, deleteProduct, getProduct };
