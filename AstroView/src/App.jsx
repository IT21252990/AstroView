import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import dotenv from "dotenv";
import WellcomePage from "./pages/WellcomePage";
import Learnmore from "./pages/Learnmore";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import Gallery from "./pages/Gallery";
import Search from "./pages/Search";
import Mars from "./pages/Mars";
import Epic from "./pages/Epic";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPasswordPage from "./pages/ForgotPassword";

import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WellcomePage />} />
            <Route path="/lern_more" element={<Learnmore />} />
            <Route path="/home" element={<Home />} />
            <Route path="/apod" element={<Apod />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/search" element={<Search />} />
            <Route path="/mars_rover_images" element={<Mars />} />
            <Route path="/epic" element={<Epic />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot_password" element={<ForgotPasswordPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
