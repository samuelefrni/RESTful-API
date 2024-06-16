const { Order, orderJoiSchema } = require("../../models/order/orderModel");
const { validateRequestFunction } = require("../../utils");

const postOrder = async (req, res) => {
  try {
    const error = validateRequestFunction(orderJoiSchema, req, res);
    if (error) return;
    const order = await Order.create(req.body);
    const populateOrder = await Order.findById(order.id).populate(
      "products users"
    );
    res.status(200).json({ populateOrder });
  } catch (error) {
    return res.status(200).json({ errorMessage: error.message });
  }
};

const putOrder = async (req, res) => {
  try {
    const error = validateRequestFunction(orderJoiSchema, req, res);
    if (error) return;
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate(id, req.body);
    if (!order) {
      return res
        .status(404)
        .json({ errorMessage: `Order with ${id} id wasn't found` });
    }
    const upgradedOrder = await Order.findById(id);
    res.status(200).json({ upgradedOrder });
  } catch (error) {
    return res.status(200).json({ errorMessage: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res
        .status(404)
        .json({ errorMessage: `Order with ${id} id wasn't found` });
    }
    res.status(200).json({ order });
  } catch (error) {
    return res.status(200).json({ errorMessage: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const { date } = req.query;

    const limitValue = req.query.lm || 2;
    const skipValue = req.query.sk || 0;
    const orders = await Order.find()
      .populate("products users")
      .limit(limitValue)
      .skip(skipValue);

    if (!orders || orders.length === 0) {
      return res.status(200).json({ orders });
    }

    if (date) {
      const filteredOrder = orders.filter((order) => {
        const fullYear = order.updatedAt.getFullYear();
        const month = (order.updatedAt.getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const day = order.updatedAt.getDate().toString().padStart(2, "0");
        const orderDate = `${fullYear}-${month}-${day}`;

        return orderDate === date;
      });

      if (filteredOrder.length === 0) {
        return res
          .status(404)
          .json({ errorMessage: `No Orders with ${date} were found` });
      }

      return res.status(200).json({ filteredOrder });
    }

    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const orderById = await Order.findById(id).populate("products users");

      if (!orderById) {
        return res
          .status(404)
          .json({ errorMessage: `Order with ${id} wasn't found` });
      }

      return res.status(200).json({ orderById });
    }

    const orders = await Order.find().populate("products users");

    if (!orders || orders.length === 0) {
      return res.status(404).json({ errorMessage: "There aren't any orders" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = {
  postOrder,
  putOrder,
  deleteOrder,
  getOrder,
  getOrderById,
};
