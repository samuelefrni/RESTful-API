const error404 = (req, res) => {
  return res.status(404).json({
    reachableAPI: {
      API: ["/api/product", "/api/user", "/api/order"],
    },
  });
};

module.exports = { error404 };
