import React from "react";

const ColorText = ({ colorBgText, colorBg, children }) => (
  <div className="text-color text--default">
    <p className={colorBg ? `text-color--${colorBg}` : ''}>{colorBgText}</p>
    {children}
  </div>
);

export default ColorText;
