const { Router } = require("express");
const OrdersModel = require("../DataBaseModels/OrdersModel");

const ordersAPIs = Router();

ordersAPIs.post("/Orders/SubmitOrder", async (req, res) => {
  let orderData = req.body;
  try {
    const newOrder = new OrdersModel(orderData);
    await newOrder.save();
    res.send({
      order: newOrder,
      message: "orderSuccess",
    });
  } catch (err) {
    console.error(`Error in SubmitOrder API ${err}`);
    res.send({ message: "ErrorInOrder" });
  }
});

ordersAPIs.get("/Orders/GetAllOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.send({
      orders: allOrders,
      message: "GetAllOrdersSuccess",
    });
  } catch (err) {
    console.error(`Error in GetAllOrders API ${err}`);
    res.send({
      message: "GetAllOrdersFailed",
    });
  }
});

module.exports = ordersAPIs;
