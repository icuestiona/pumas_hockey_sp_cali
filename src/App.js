import React from "react";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import Support from "./pages/Support";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/support" element={<Support/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
