import React from "react";
import { Navbar } from "../components";
import { Layout, Typography, Space } from "antd";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout style={{ paddingBottom: "20px" }}>
          <div className="routes">
            <Outlet />
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoTracker <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
