import React from "react";
const style = {
  textAlign: "center",
  color: "White",
  backgroundColor: "transparent",
  border: "1px solid #D73E4D",
  fontSize: "14px",
  fontWeight: "400",
  textTransform: "uppercase",
  lineHeight: "50px",
  padding: "0 33px",
  position: "relative",
  zIndex: "9",
  outline: "none",
  display:"inline-block"
};

const Button = ({ children }) => {
  return (
    <button className="button" style={style}>
      {children}
    </button>
  );
};

export default Button;
