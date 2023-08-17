import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import HorizontalScrollingMenu from "./HorizontalScrollingMenu";

const { Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 500;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(cryptos);

  useEffect(() => {
    const filteredCoins = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredCoins);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {simplified ? (
        <HorizontalScrollingMenu  items={cryptos} />
      ) : (
        <div>
          <div className="search-crypto">
            <Input
              placeholder="Search Crypto"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Row gutter={[32, 32]} className="crypto-card-container">
            {cryptos?.map((currency) => (
              <Col
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={currency.uuid}
              >
                <Link to={`/crypto/${currency.uuid}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      <img
                        className="crypto-image"
                        src={currency.iconUrl}
                        alt="crypto"
                      />
                    }
                    hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default Cryptocurrencies;
