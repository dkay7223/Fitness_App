import React from "react";
import {
  About,
  Contact,
  Gallery,
  Home,
  NotFound,
  Plans,
  Trainers,
} from "./pages/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Plans" element={<Plans />} />
        <Route path="Trainers" element={<Trainers />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
