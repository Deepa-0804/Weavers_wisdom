import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Only import these from react-router-dom
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Safe from "./components/Safe";
import Footer from "./components/Footer";
import Social from "./components/Social";
import New from "./components/New";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin =() => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={!isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/safe" element={<Safe />} />
          <Route path="/social" element={<Social />} />
          <Route path="/new" element={<New />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <HeroSection/>: <Dashboard /> }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
