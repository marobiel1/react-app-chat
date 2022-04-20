import React from "react";

const ThemeViewer = ({ value, theme }) => {
  const stringToReplace = (
    <img src="/LUL.jpg" style={{ width: "2rem" }} alt="" />
  );
  const newFormatMessage = (rawMessage) => {
    let fragments = rawMessage.trim().split(" second ");
    let result = [];

    if (fragments.length <= 1) return rawMessage;

    for (let i = 0; i < fragments.length; i++) {
      result.push(fragments[i] + " ");
      if (i < fragments.length - 1) {
        result.push(" ");
        result.push(
          <img src="/LUL.jpg" style={{ width: "2rem" }} alt="" key={i} />
        );
        result.push(" ");
      }
    }
    // return result.join(" ");
    return result;
  };

  const formatMessage = (rawMessage) => {
    let message = rawMessage.trim();
    const pattern = " second ";
    const foundPattern = (
      <img src="/LUL.jpg" style={{ width: "2rem" }} alt="" />
    );

    let out = message.replaceAll(pattern, foundPattern);
    return out;
  };

  return (
    <>
      <div>{newFormatMessage(value)}</div>
    </>
  );
};

export default ThemeViewer;
