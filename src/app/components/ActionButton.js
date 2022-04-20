import React from "react";

const ActionButton = ({ label, action, holder }) => {
  return (
    <div id="menu">
      <input type="text" placeholder={holder} />
      <button onClick={action}>{label}</button>
    </div>
  );
};

export default ActionButton;
