import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg  text-white navbar-custom navbar-dark "
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid justify-content-lg-end px-2 px-lg-3">
          <Link to="#" className="navbar-brand">
            pulse<span className="dot-icon">.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end text-bg-white"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body  dark flex-column flex-lg-row">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                <li className="nav-item px-0">
                  <Link
                    className="nav-link active rounded-pill px-3  bg-dark"
                    to="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item px-0">
                  <Link className="nav-link my-assets " to="#">
                    My Assets
                  </Link>
                </li>
                <li className="nav-item px-0">
                  <Link className="nav-link" to="#">
                    Trade
                  </Link>
                </li>
                <li className="nav-item px-0">
                  <Link className="nav-link" to="#">
                    Earn
                  </Link>
                </li>
                <li className="nav-item px-0">
                  <Link className="nav-link" to="#">
                    Rewards
                  </Link>
                </li>
                <li className="nav-item px-0">
                  <Link className="nav-link" to="#">
                    Web3
                  </Link>
                </li>
                <li className="nav-item px-0">
                  <Link className="nav-link" to="#">
                    News
                  </Link>
                </li>
              </ul>
              <form className="d-flex me-2">
                <div
                  className="input-group px-0  rounded-pill mb-2"
                  style={{ borderRadius: "50px" }}
                >
                  <span
                    className="input-group-text"
                    id="search-icon"
                    style={{
                      borderTopLeftRadius: "50px",
                      borderBottomLeftRadius: "50px",
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    className="form-control search-input bg-dark"
                    type="search"
                    placeholder="Search for an asset..."
                    aria-label="Search"
                    style={{
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  />
                </div>
              </form>

              <button className="btn buy-sell me-2 mb-2 buy-sell rounded-pill d-inline-block d-md-block  d-xs-none d-sm-none ">
                Buy & Sell
              </button>
              <button className="btn btn-dark me-2 mb-2 send-receive  shadow  text-muted rounded-pill d-md-block d-xs-none d-sm-none">
                Send & Receive
              </button>
              <Link to="#" className="me-2">
                <div className="bell-icon pt-2">
                  <i className="bi bi-bell  p-2 text-white  rounded-pill bg-dark"></i>
                </div>
              </Link>

              <div className="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDG_79Giti7inxsp3ZM1SbUyp5mLfVbFJ_qYKq-qqd3652o46EJYrW6pjTT4_6I1YLukE&usqp=CAU"
                  alt="User Avatar"
                  className="user-avatar "
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
