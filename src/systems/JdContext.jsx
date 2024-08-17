import React, { createContext, useState, useContext } from "react";

const JdContext = createContext();

export const JdProvider = ({ children }) => {
  const [prompt1, setPrompt1] = useState("");

  return (
    <JdContext.Provider value={{ prompt1, setPrompt1 }}>
      {children}
    </JdContext.Provider>
  );
};

export const useJdContext = () => useContext(JdContext);
