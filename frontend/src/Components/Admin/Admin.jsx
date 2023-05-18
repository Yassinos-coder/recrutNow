import "./Admin.css";
import React from "react";
import rectangle from "../../assets/imgs/rectangle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon style={{paddingRight: '7px'}} icon={faFilter} />
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
