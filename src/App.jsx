import React from "react";
import { Navbar, Foot, Error } from "./components/index";
import Home from "./Pages/Home";
import CADetails from "./Pages/CADetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadetails/:id" element={<CADetails />} />
          <Route
            path="/*"
            element={<Error errorMsg={"404 Page Not Found"} />}
          />
        </Routes>
        <Foot />
        <Toaster />
      </Router>
    </main>
  );
};

export default App;
