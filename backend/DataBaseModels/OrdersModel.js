const mongoose = require("mongoose");

const orders = mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  order_qty: {
    type: Number,
    required: true,
  },
  orderer_name: {
    type: String,
    required: true,
  },
  orderer_phonenumber: {
    type: Number,
    required: true,
  },
  order_status: {
    type: String,
    required: true,
  },
  shipping_address: {
    type: String,
    required: true,
  },
});

const OrdersModel = mongoose.model("orders", orders);
module.exports = OrdersModel;
