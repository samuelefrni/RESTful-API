const errorMiddleware404 = (req, res, next) => {
  const { uri } = req.params;
  const error = new Error(`Nothing's found for /${uri}`);
  res.status(404).json({
    message: error.message,
  });
  next();
};

module.exports = { errorMiddleware404 };
