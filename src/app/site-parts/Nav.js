import React from "react";
import ActionButton from "../components/ActionButton.js";
import Menu from "../components/Menu.js";
import Searcher from "../components/Searcher.js";

const Nav = ({ handleAction, handleSearch }) => {
  return (
    <div id="nav">
      <ActionButton
        action={handleAction}
        label="My Smart Button"
        holder="Text me"
      />
      <Menu labels={["1", "2", "4", 4, 5, 6, 7]} />
      <Searcher
        action={handleSearch}
        placeholder="Search text"
        label="Search"
      />
    </div>
  );
};

export default Nav;
