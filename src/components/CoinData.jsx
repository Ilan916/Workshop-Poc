import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded  row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="mb-2 coin-data-category">Capitalisation Boursière</span>
              <span>{data.market_cap} $</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="mb-2 coin-data-category">
              Prix le plus haut sur 24h
              </span>
              <span>{data.high_24h} $</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="mb-2 coin-data-category">Volume en 24h</span>
              <span>{data.total_volume} $</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="mb-2 coin-data-category">Prix le plus bas sur 24h</span>
              <span>{data.low_24h} $</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="mb-2 coin-data-category">
              Volume d'échange
              </span>
              <span>{data.circulating_supply} $</span>
            </div>
            <hr />
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
