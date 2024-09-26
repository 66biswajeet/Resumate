import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { ResumeProvider } from "../src/systems/ResumeContext";
import { JdProvider } from "./systems/JdContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ats_resume from "./pages/Ats_resume";
import Ats_score from "./pages/Ats_score";
import Ats_meter from "./pages/Ats_meter";
import Home from "./pages/Home";

import { Navigate } from "react-router-dom";

import "./App.css";
import { useUser } from "@clerk/clerk-react";

import Login from "./pages/Login";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <ResumeProvider>
          <JdProvider>
            <Routes>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/ats/resume"
                element={
                  <ProtectedRoute>
                    <Ats_resume />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ats/score"
                element={
                  <ProtectedRoute>
                    <Ats_score />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ats/meter"
                element={
                  <ProtectedRoute>
                    <Ats_meter />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </JdProvider>
        </ResumeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
