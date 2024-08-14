import React from "react";
import Navbar from "./sections/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ats_resume from "./pages/Ats_resume";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/ats/resume" element={<Ats_resume />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
