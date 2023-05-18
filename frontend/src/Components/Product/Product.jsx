import "./Product.css";
import React, { useState } from "react";
import pr1 from "../../assets/imgs/products/pr1.png";
import Button from "../../StyledComponents/Button";
import OrderClass from "../../ClassModals/OrderClass";
import { useDispatch } from "react-redux";
import { SubmitOrder } from "../../redux/OrdersReducer";

const Product = () => {
  const [orderQTY, setOrderQTY] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [newOrder, setNewOrder] = useState(new OrderClass());
  const dispatch = useDispatch();

  const products = {
    pr1: {
      image: pr1,
      name: "Green Chair",
      price: 20,
    },
  };

  const handleQtyUpdate = (event) => {
    console.log(event, orderQTY, totalPrice);
    const price = 20;
    const qty = parseInt(event.currentTarget.value);
    if (!isNaN(qty)) {
      setOrderQTY(qty);
      if (qty > 0) {
        setTotalPrice(qty * price);
      } else {
        setTotalPrice(0);
      }
    }
  };

  const handleSelectProduct = (e) => {
    let productName =
      e.currentTarget.options[e.currentTarget.selectedIndex].text;
    setNewOrder({ ...newOrder, product_name: productName });
  };

  const handleOrder = () => {
    dispatch(SubmitOrder({ orderData: newOrder }));
  };

  return (
    <>
      <div className="productMain">
        <div className="productOrderingBox">
          <div className="ProductImageDisplay">
            <img src={products.pr1.image} alt="" />
          </div>
          <div className="BuyerInfoInputs">
            <label htmlFor="Product">Product</label>
            <select
              name="Product"
              id="Product"
              onChange={(e) => {
                handleSelectProduct(e);
              }}
            >
              <option value='0'>Choose product from list</option>
              <option value={products.pr1.name}>{products.pr1.name}</option>
            </select>
            <div className="OrderInformation">
              <div>
                <label htmlFor="qty">Quantity</label>
                <input
                  className="input orderinfoInput"
                  type="number"
                  name="qty"
                  id="qty"
                  onChange={(event) => {
                    handleQtyUpdate(event);
                    setNewOrder({
                      ...newOrder,
                      order_qty: event.currentTarget.value,
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="uprice">Unity Price</label>
                <input
                  className="input orderinfoInput"
                  type="text"
                  name="uprice"
                  id="uprice"
                  placeholder="$20"
                  disabled={true}
                />
              </div>
              <div>
                <label htmlFor="tprice">Total Price</label>
                <input
                  className="input orderinfoInput"
                  type="text"
                  name="tprice"
                  id="tprice"
                  value={totalPrice}
                />
              </div>
            </div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="EX: Sara Lamoudi"
              onChange={(e) => {
                setNewOrder({
                  ...newOrder,
                  orderer_name: e.currentTarget.value,
                });
              }}
            />
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              className="input"
              name="Phone"
              placeholder="EX: 0654593277"
              onChange={(e) => {
                setNewOrder({
                  ...newOrder,
                  orderer_phonenumber: e.currentTarget.value,
                });
              }}
            />
            <label htmlFor="adress">Address</label>
            <textarea
              name="adress"
              id="adress"
              placeholder="EX: 2, RUE AHMED EL MAJJATI, MAARIF"
              style={{ resize: "none" }}
              onChange={(e) => {
                setNewOrder({
                  ...newOrder,
                  shipping_address: e.currentTarget.value,
                });
              }}
            ></textarea>
          </div>
          <div className="validationButton">
            <Button btnType="submit" btnText="Validate" handler={handleOrder} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
