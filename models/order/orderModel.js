const mongoose = require("mongoose");
const joi = require("joi");

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        lowercase: true,
        ref: "Product",
      },
    ],
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        lowercase: true,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

const orderJoiSchema = joi.object({
  products: joi
    .array()
    .required()
    .min(1)
    .items(
      joi.string().empty().required().lowercase().messages({
        "string.base": "User's name must be a string.",
        "any.required": "Path 'users' is required.",
        "string.empty": "User's name cannot be an empty string.",
      })
    )
    .messages({
      "array.base": "Users must be an array of strings.",
      "any.required": "Path 'users' is required.",
    }),
  users: joi
    .array()
    .required()
    .min(1)
    .items(
      joi.string().empty().required().lowercase().messages({
        "string.base": "User's name must be a string.",
        "any.required": "Path 'users' is required.",
        "string.empty": "User's name cannot be an empty string.",
      })
    )
    .messages({
      "array.base": "Users must be an array of strings.",
      "any.required": "Path 'users' is required.",
    }),
});

module.exports = { Order, orderJoiSchema };
