import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LabProject from "./pages/LabProject";
import Members from "./pages/Members";
import Publication from "./pages/Publication";
import News from "./pages/News";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Members/:pk" element={<Members />} />
        <Route path="/LabProject" element={<LabProject />} />
        <Route path="/Publication" element={<Publication />} />
        <Route path="/News" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
