import React, { useState } from "react";
import { Link } from "react-router-dom";

const CryptoTable = () => {
  const [selectedName, setSelectedName] = useState(""); // State for selected name
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items per page, default 5

  const data = [
    {
      name: "Binance",
      price: "$260.31",
      //   chartUrl: <AreaChart />

      iconUrl:
        "https://play-lh.googleusercontent.com/T1_WHAGs5WZePQejNSqqrxZah4uhBvYr698nTCFhXMjMZo5oSCoko5yW2wtmeO1ClRU",
      change: 8.11,
      marketCap: "$2600.40",
      shortname: "BNB",
      percentage: "4.35% APY",
    },
    {
      name: "Ethererum",
      price: "$150.68",
      // chartUrl: <AreaChart />,
      //   chartUrl: <AreaChart3 />,

      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIkv2cG2lmgQiY3QXNiUzNeUkFbVORifuuQ&s",
      change: -4.71,
      marketCap: "$1400.20",
      shortname: "XMR",
      percentage: "1.35% APY",
    },
    {
      name: "Monero",
      price: "$310.20",
      // chartUrl: <AreaChart1 />,
      //   chartUrl: <AreaChart3 />,

      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pIq6z1UEL5NUV5sBEcpTe6r_zj1S6si_1Q&s",
      change: -2.59,
      marketCap: "$1500.60",
      shortname: "ETH",
      percentage: "-2.50% APY",
    },
    {
      name: "Binance",
      price: "$260.31",
      //   chartUrl: <AreaChart />,
      iconUrl:
        "https://play-lh.googleusercontent.com/T1_WHAGs5WZePQejNSqqrxZah4uhBvYr698nTCFhXMjMZo5oSCoko5yW2wtmeO1ClRU",
      change: 8.11,
      marketCap: "$2600.40",
      shortname: "BNB",
      percentage: "4.35% APY",
    },
    {
      name: "Solana",
      price: "$100.15",
      //   chartUrl: <AreaChart />,

      iconUrl:
        "https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_400x400.jpg",
      change: 1.8,
      marketCap: "$210.60",
      shortname: "SOL",
      percentage: "-3.50% APY",
    },

    // Add more data as needed
  ];

  const uniqueNames = [...new Set(data.map((item) => item.shortname))]; // Unique names for dropdown

  // Filter data based on selected name
  const filteredData = selectedName
    ? data.filter((item) => item.shortname === selectedName)
    : data;

  // Get current data for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle changing the number of rows per page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10)); // Update items per page
    setCurrentPage(1); // Reset to first page on changing rows per page
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="prices-text">Prices</h2>

        <div className="d-flex align-items-center ms-auto">
          <form className="d-flex align-items-center me-3">
            <label
              htmlFor="sel1"
              className="slected-name form-label me-2"
            ></label>
            <select
              className="form-select me-2 rounded-pill bg-dark text-white" // Added rounded class
              id="sel1"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)} // Update state on change
            >
              <option value="">Watchlist </option>
              {uniqueNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </form>

          <div className="sell-all">
            <Link to="#" className="text-white rounded-pill p-2 bg-dark">
              <span className="sell-all-text px-2">See All</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="table table-responsive">
        <table className="table border-dark">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      className="cryptocurreny-icon-table"
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p className="crypto-currency-text mb-0">{item.name}</p>
                      <b className="text-muted muted-text">
                        {item.shortname} | {item.percentage}
                      </b>
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>

                <td
                  className={item.change >= 0 ? "text-success" : "text-danger"}
                >
                  {item.change >= 0 ? `+${item.change}%` : `${item.change}%`}
                </td>
                <td>{item.marketCap}</td>
                <td>
                  <button className="btn px-3 bg-primary rounded-pill text-white btn-sm">
                    Buy
                  </button>
                </td>
                <td>
                  <i className="fas fa-ellipsis-h toggle-text rounded-pill bg-dark"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="form-group d-flex align-items-center">
          <label htmlFor="rowsPerPage" className="me-2 rowsPerPage-text">
            Show rows per page
          </label>
          <select
            id="rowsPerPage"
            className="form-select selected-selction bg-dark text-white"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
          </select>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <ul className="pagination mb-0">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <Link
                className="page-link"
                to="#"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &lt;
              </Link>
            </li>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <li
                key={pageIndex}
                className={`page-item ${
                  currentPage === pageIndex + 1 ? "active" : ""
                }`}
              >
                <Link
                  className="page-link"
                  to="#"
                  onClick={() => handlePageChange(pageIndex + 1)}
                >
                  {pageIndex + 1}
                </Link>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <Link
                className="page-link"
                to="#"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &gt;
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CryptoTable;
