/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from "./components/ListingPage";
import FileReader from "./components/FileReader";

const Rpoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/:fileName" element={<FileReader />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rpoutes;
