import React from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../index.js";

const Header = () => {
  return (
    <div id="header">
      <div className="switch">
        <label style={{ padding: 20 + "px" }}>Light</label>
        <ThemeContext.Consumer>
          {({ theme, toogleTheme }) => (
            <ReactSwitch
              width={30}
              height={15}
              onChange={toogleTheme}
              checked={theme === "dark"}
            />
          )}
        </ThemeContext.Consumer>
        <label style={{ padding: 20 + "px" }}>Dark</label>
      </div>
    </div>
  );
};

export default Header;
