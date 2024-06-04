const validateRequestFunction = (joiSchema, req, res) => {
  const { error } = joiSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ errorMessage: error.message });
  }
  return;
};

module.exports = { validateRequestFunction };
