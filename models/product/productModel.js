const mongoose = require("mongoose");
const joi = require("joi");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

const Product = mongoose.model("Product", productSchema);

const productJoiSchema = joi.object({
  name: joi.string().required().empty().lowercase().trim().messages({
    "string.base": "Product's name must be a string.",
    "any.required": "Path 'name' is required.",
    "string.empty": "Product's name cannot be an empty string.",
  }),
});

module.exports = { Product, productJoiSchema };
