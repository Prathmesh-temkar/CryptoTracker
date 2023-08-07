import React from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import RootLayout from "./layout/RootLayout";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="exchanges" element={<Exchanges />} />
      <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
      <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
      <Route exact path="news" element={<News />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
