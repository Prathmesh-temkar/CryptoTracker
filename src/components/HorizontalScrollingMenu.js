import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Typography, Avatar } from "antd";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrow";
import moment from "moment";
import "react-horizontal-scrolling-menu/dist/styles.css";
const { Text, Title } = Typography;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const HorizontalScrollingMenu = ({ items, news }) => {
  console.log(items);
  return (
    <div className="horizonal-menu-container">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {news
          ? items.map((item, index) => (
              <Card hoverable className="news-card" itemId={index} key={index}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img
                    src={item?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <Title level={3}>{item.name} </Title>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          item.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                        alt="news"
                      />
                      <Text className="provider-name">
                        {item.provider[0]?.name}
                      </Text>
                    </div>
                    <Text>
                      {moment(item.datePublished).startOf("ss").fromNow()}
                    </Text>
                  </div>
                </a>
              </Card>
            ))
          : items.map((item) => (
              <Link
                to={`/crypto/${item.uuid}`}
                title={item.name}
                itemId={item.uuid}
                key={item.uuid}
              >
                <Card className="crypto-card" hoverable>
                  <img
                    className="crypto-image"
                    src={item.iconUrl}
                    alt="crypto"
                  />
                  <Title level={3} style={{ color: "#fff" }}>
                    #{`${item.rank} ${item.name}`}
                  </Title>
                  <p>Price: $ {millify(item.price)}</p>
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
