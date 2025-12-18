// client/src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations"; // MUST EXIST
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact"; // MUST EXIST
import Booking from "./pages/Booking";
import SingleTour from "./pages/SingleTour";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />

        {/* legacy routes */}
        <Route path="/tours/:id" element={<SingleTour />} />
      </Route>
    </Routes>
  );
}
