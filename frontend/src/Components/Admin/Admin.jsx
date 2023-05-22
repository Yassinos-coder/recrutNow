import "./Admin.css";
import React from "react";
import rectangle from "../../assets/imgs/rectangle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { GetAllOrders } from "../../redux/OrdersReducer";

const Admin = () => {
  const dispatch = useDispatch();
  const Orders = useSelector((state) => state.OrdersReducer.Orders);
  const [currentPage, setCurrentPage] = useState(1);
  const orderPerPage = 6;
  const lastIndex = currentPage * orderPerPage;
  const firstIndex = lastIndex - orderPerPage;
  const orderToDisplay = Orders.slice(firstIndex, lastIndex);
  const pageNumber = Math.ceil(Orders.length / orderPerPage);
  const numbers = [...Array(pageNumber + 1).keys()].slice(1);

  useEffect(() => {
    dispatch(GetAllOrders());
  }, []);

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="admin">
        <div className="adminDash">
          <p className="title">In the last 30 days, </p>
          <div className="data">
            <div className="rectData">
              <div className="image-container">
                <img src={rectangle} alt="" />
              </div>{" "}
              <div className="imgInfo">
                <p className="numbers">30,000</p>
                <p className="Datatype">Total sales</p>
              </div>
            </div>
            <div className="rectData">
              <div className="image-container">
                <img src={rectangle} alt="" />
              </div>
              <div className="imgInfo">
                <p className="numbers">250</p>
                <p className="Datatype">Pending Orders</p>
              </div>
            </div>
            <div className="rectData">
              <div className="image-container">
                <img src={rectangle} alt="" />
              </div>{" "}
              <div className="imgInfo">
                <p className="numbers">$80,000</p>
                <p className="Datatype">Revenue Generated</p>
              </div>
            </div>
          </div>
          <div className="filtersOthers">
            <div className="leftSide">
              <p className="secTitle">All Orders</p>
              <p className="secDesc">Monitor sales and status.</p>
            </div>
            <div className="rightSide">
              <div className="filter_SearchBar">
                <div className="searchBar">
                  <span className="loopeSearch">
                    <FontAwesomeIcon
                      style={{ fontSize: "18px" }}
                      color="black"
                      icon={faMagnifyingGlass}
                    />
                  </span>
                  <input
                    className="inputSearchBar"
                    type="text"
                    placeholder="Search artists"
                    name="searchBar"
                  />
                </div>
                <div className="filter">
                  <button type="submit" className="buttonFilter">
                    <FontAwesomeIcon
                      style={{ paddingRight: "7px" }}
                      icon={faFilter}
                    />
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dataTable">
            <table className="table">
              <thead className="table-thead">
                <tr className="table-thead">
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Unity Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {orderToDisplay.map((order, index) => (
                  <tr key={index}>
                    <td>{order.orderer_name.split(" ")[0]}</td>
                    <td>0{order.orderer_phonenumber}</td>
                    <td>
                      <span
                        className={`orderStatus ${
                          order.order_status === "Verified"
                            ? "verifiedStatus"
                            : order.order_status === "Pending"
                            ? "pendingStatus"
                            : ""
                        }`}
                      >
                        {order.order_status}
                      </span>
                    </td>
                    <td>${order.product_price}</td>
                    <td>{order.order_qty}</td>
                    <td>${order.order_qty * order.product_price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="6">
                    <div className="tableActions">
                      <button
                        className="tableActionBTN"
                        onClick={handlePrevPage}
                      >
                        Previous Page
                      </button>
                      <ul className="tableActionUL">
                        {numbers.map((number, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              setCurrentPage(number);
                            }}
                          >
                            <div className={`numberPage ${currentPage === number ? 'active': ''}`}>{number}</div>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="tableActionBTN"
                        onClick={handleNextPage}
                      >
                        Next Page
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
