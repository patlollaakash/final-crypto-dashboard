import React from "react";
import { Link } from "react-router-dom";
// import CryptoTable from "./TableComponent";
import LineChart from "./charts/Linecharts";
import CryptoTable from "./tablescomponent/Tablecomponet";

function Selection() {
  const cryptoData = [
    {
      name: "Bitcoin",
      shortname: "BTC",
      price: "S$54.20",
      change: "-1.80%",
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fAZMSq6nkCg8-Zs9AFrLKK3n54fOdIKnQ&s",
      changeClass: "text-danger",
    },
    {
      name: "Ethereum",
      price: "S$58.50",
      shortname: "ETH",
      change: "+5.80%",
      iconUrl:
        // "https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fAZMSq6nkCg8-Zs9AFrLKK3n54fOdIKnQ&s",

      changeClass: "text-success",
    },

    {
      name: "Tether USD",
      price: "S$53.10",
      change: "-3.80%",
      shortname: "USDT",
      iconUrl:
        // "https://w7.pngwing.com/pngs/986/635/png-transparent-tether-hd-logo.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fAZMSq6nkCg8-Zs9AFrLKK3n54fOdIKnQ&s",

      changeClass: "text-danger",
    },
    {
      name: "Binance",
      price: "S$51.10",
      change: " +5.80%",
      shortname: "BNB",
      iconUrl:
        // "https://play-lh.googleusercontent.com/T1_WHAGs5WZePQejNSqqrxZah4uhBvYr698nTCFhXMjMZo5oSCoko5yW2wtmeO1ClRU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fAZMSq6nkCg8-Zs9AFrLKK3n54fOdIKnQ&s",

      changeClass: "text-success",
    },
    {
      name: "Litecoin",
      price: "S$7.40.10",
      change: "+2.20%",
      shortname: "LTC",
      iconUrl:
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYJLsvo_qp8TOvVk86BPDavoKL7bmjR5dGg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fAZMSq6nkCg8-Zs9AFrLKK3n54fOdIKnQ&s",

      changeClass: "text-success",
    },
    {
      name: "Tether",
      price: "S$1.10",
      change: "-2.80%",
      shortname: "XMR",
      iconUrl:
        // "https://w7.pngwing.com/pngs/124/305/png-transparent-monero-hd-logo.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fAZMSq6nkCg8-Zs9AFrLKK3n54fOdIKnQ&s",

      changeClass: "text-danger",
    },
  ];

  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xxl-4 col-12">
            <div className="card">
              <div className="card-body mt-2">
                {/* <h3 className="card-title  d-flex justify-content-between">
                  My Balance
                  <div className="toogle-text-bg">
                    <i className="fas fa-ellipsis-h toogle-text"></i>
                  </div>
                </h3> */}
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="card-title mb-0">My Balance</h3>
                  <div className="toogle-text-bg">
                    <i className="fas fa-ellipsis-h toogle-text"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h2 className="big-number">$670,519.00</h2>
                  <p className="change text-success mt-2">
                    +$420.00
                    <span className="text-muted"> this week</span>
                  </p>
                </div>

                <LineChart />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xxl-4 col-12">
            <div className="card spending-overview">
              <div className="card-body mt-2">
                <div className="d-flex justify-content-between align-items-center">
                  {/*  */}
                  <h3 className="card-title mb-0">Spending Overview </h3>
                  <div className="toogle-text-bg">
                    <i className="fas fa-ellipsis-h toogle-text"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="big-number">$120,420.00</p>
                  <p className="change text-danger mt-2">
                    -$30.00 <span className="text-muted">this week</span>
                  </p>
                </div>
                <div
                  className="progress"
                  style={{ height: "10px", background: "black" }}
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "60%" }}
                  ></div>
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "30%" }}
                  ></div>
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <div className="progress-label mt-3">
                  <small className=" d-flex justify-content-between mb-1">
                    <div>
                      <span className="bg-primary ms-2"></span> Withdrawn
                    </div>{" "}
                    <div>$10.00</div>
                  </small>
                  <small className=" d-flex justify-content-between mb-1">
                    <div>
                      <span className="bg-warning ms-2"></span> Subscription
                    </div>{" "}
                    <div>$5.00</div>
                  </small>
                  <small className="d-flex justify-content-between">
                    <div>
                      <span className="bg-dark ms-2"></span> Other
                    </div>
                    <div>$15.00</div>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-xxl-4 col-12">
            <div className="card top-mover">
              <div className="card-body mt-2">
                <h1 className="card-title d-flex justify-content-between mb-4">
                  Top Movers
                  <div className="sell-all">
                    <Link
                      to="#"
                      className="text-white  rounded-pill p-2 bg-dark"
                    >
                      <span className="sell-all-text px-2">See All</span>{" "}
                    </Link>
                  </div>
                </h1>
                <div className="scr">
                  <div className="scroll-container">
                    <ul className="list-unstyled">
                      {cryptoData.map((crypto, index) => (
                        <li key={index} className="scrollable-list">
                          <div className="d-flex align-items-center justify-content-between">
                            <span>
                              <img
                                src={crypto.iconUrl}
                                alt={crypto.name}
                                className="crypto-icon me-3"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <div className="d-flex justify-content-between">
                                <div className="top-mover-text">
                                  {crypto.name}
                                </div>
                                <div className="top-mover-text">
                                  {crypto.price}
                                </div>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div className="text-muted top-mover-text-muted">
                                  {crypto.shortname}
                                </div>
                                <div
                                  className={`top-mover-text-muted ${crypto.changeClass}`}
                                >
                                  {crypto.change}
                                </div>
                              </div>
                            </div>
                          </div>
                          {index < cryptoData.length - 1 && (
                            <hr className="mt-2 horiziontal-line" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-8 col-12 ">
            <div className="card table-data ">
              <div className="card-body ">
                <CryptoTable />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 mt-1 col-12">
            <div className="card transfer-card">
              <div className="card-body mt-1">
                <div className="card-title  transfer-text d-flex justify-content-between">
                  <div className="col-md-9">
                    <h5 className="crytpo-pluse-heading mb-0">
                      Transfer your crypto <br /> into Pulse
                    </h5>
                    <p className="cryptocurrency-text mb-0">
                      Pulse provides the most secure
                      <br /> environment for safeguarding your
                      <br /> cryptocurrency assets.
                    </p>
                    <Link to="#" className="crypto-text-link mt-4">
                      Store your crypto &nbsp;→
                    </Link>
                  </div>
                  <div className="shield-iconssss col-md-3">
                    <i className="fas fa-shield-alt fa-2x text-white shield-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
