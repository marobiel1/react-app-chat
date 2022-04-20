import "./css/styles.css";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import Nav from "./app/site-parts/Nav.js";
import Header from "./app/site-parts/Header.js";
import Footer from "./app/site-parts/Footer.js";
import Content from "./app/site-parts/Content.js";

const handleAction = () => {
  console.log("Action performed!!");
};

const handleSearch = (e) => {
  e.preventDefault();
  console.log("Search performed!!");
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="app" id={theme}>
        <Header />
        <Nav handleAction={handleAction} handleSearch={handleSearch} />
        <Content />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

root.render(<App />);
