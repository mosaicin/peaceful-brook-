import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
