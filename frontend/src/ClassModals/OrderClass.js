class OrderClass {
  constructor(
    product_name = "",
    product_price = "20",
    order_qty = "",
    orderer_name = "",
    orderer_phonenumber = "",
    order_status = "Unverified",
    shipping_address = ""
  ) {
    this.product_name = product_name;
    this.product_price = product_price;
    this.order_qty = order_qty;
    this.orderer_name = orderer_name;
    this.orderer_phonenumber = orderer_phonenumber;
    this.order_status = order_status;
    this.shipping_address = shipping_address;
  }
}

export default OrderClass;
