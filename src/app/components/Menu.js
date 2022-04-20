import React from "react";
import MenuItem from "./MenuItem.js";

const Menu = ({ labels }) => {
  return (
    <div id="menu_mid">
      {labels.map((item, index) => {
        return <MenuItem key={index} label={item} />;
      })}
    </div>
  );
};

export default Menu;
