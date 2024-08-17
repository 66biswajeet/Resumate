import React from "react";
import Navbar from "./sections/Navbar";
import { ResumeProvider } from "../src/systems/ResumeContext";
import { JdProvider } from "./systems/JdContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ats_resume from "./pages/Ats_resume";
import Ats_score from "./pages/Ats_score";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <ResumeProvider>
          <JdProvider>
            <Routes>
              <Route path="/ats/resume" element={<Ats_resume />} />
              <Route path="/ats/score" element={<Ats_score />} />
            </Routes>
          </JdProvider>
        </ResumeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
