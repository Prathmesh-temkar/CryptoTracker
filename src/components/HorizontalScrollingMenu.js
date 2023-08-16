import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrow";
import "react-horizontal-scrolling-menu/dist/styles.css";

const HorizontalScrollingMenu = ({ items }) => {
  return (
    <div className="crypto-card-container">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {items.map((item) => (
          <Link
            to={`/crypto/${item.uuid}`}
            title={item.uuid}
            itemId={item.uuid}
            key={item.uuid}
          >
            <Card
              className="crypto-card"
              title={`${item.rank}. ${item.name}`}
              extra={
                <img className="crypto-image" src={item.iconUrl} alt="crypto" />
              }
              hoverable
            >
              <p>Price: {millify(item.price)}</p>
              <p>Market Cap: {millify(item.marketCap)}</p>
              <p>Daily Change: {millify(item.change)}%</p>
            </Card>
          </Link>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScrollingMenu;
