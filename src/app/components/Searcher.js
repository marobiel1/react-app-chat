import React from "react";

const Searcher = ({ label, action, placeholder }) => {
  return (
    <form onSubmit={action}>
      <div id="searcher">
        <label forhtml="searcher_but">{label}</label>
        <input id="searcher_but" type="text" placeholder={placeholder} />
        <button type="submit">{label}</button>
      </div>
    </form>
  );
};

export default Searcher;
