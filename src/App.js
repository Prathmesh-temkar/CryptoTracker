import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Homepage, Cryptocurrencies, CryptoDetails, News } from "./components";
import RootLayout from "./layout/RootLayout";
import "./App.css";

const state = { greeting: "Hello" };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage state={state} />} />
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
