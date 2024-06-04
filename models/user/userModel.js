const mongoose = require("mongoose");
const joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  surname: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

const userJoiSchema = joi.object({
  name: joi.string().lowercase().trim().required().empty().messages({
    "string.base": "User's name must be a string.",
    "any.required": "Path 'name' is required.",
    "string.empty": "User's name cannot be an empty string.",
  }),
  surname: joi.string().lowercase().trim().required().empty().messages({
    "string.base": "User's surname must be a string.",
    "any.required": "Path 'surname' is required.",
    "string.empty": "User's surname cannot be an empty string.",
  }),
  email: joi.string().lowercase().trim().required().empty().messages({
    "string.base": "User's email must be a string.",
    "any.required": "Path 'email' is required.",
    "string.empty": "User's email cannot be an empty string.",
  }),
});

module.exports = { User, userJoiSchema };
