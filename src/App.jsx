/* eslint-disable no-unused-vars */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import React from "react";
import { ScreenShare } from "lucide-react";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSeller from "./components/TopSeller";
import PopularBlog from "./components/PopularBlog";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="rounded flex w-full justify-center flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <div className="">
            <TopSeller />
            <PopularBlog />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
