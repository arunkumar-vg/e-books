/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PDFViewer from "./components/PDFViewer";

const Rpoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pdf-viewer/:filename" element={<PDFViewer />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rpoutes;
