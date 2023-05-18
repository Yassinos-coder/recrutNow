import "./Admin.css";
import React from "react";
import rectangle from "../../assets/imgs/rectangle.png";

const Admin = () => {
  return (
    <>
      <div className="admin">
        <div className="adminDash">
          <p className="title">In the last 30 days, </p>
          <div className="data">
            <div className="rectData">
              <div className="image-container">
                <img src={rectangle} alt="" srcset="" />
              </div>{" "}
              <div className="imgInfo">
                <p className="numbers">30,000</p>
                <p className="Datatype">Total sales</p>
              </div>
            </div>
            <div className="rectData">
              <div className="image-container">
                <img src={rectangle} alt="" srcset="" />
              </div>
              <div className="imgInfo">
                <p className="numbers">250</p>
                <p className="Datatype">Pending Orders</p>
              </div>
            </div>
            <div className="rectData">
              <div className="image-container">
                <img src={rectangle} alt="" srcset="" />
              </div>{" "}
              <div className="imgInfo">
                <p className="numbers">$80,000</p>
                <p className="Datatype">Revenue Generated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
