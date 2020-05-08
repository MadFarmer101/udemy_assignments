import React from "react";

const Char = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid purple",
    boxShadow: "0px 2px 15px purple",
  };
return <div style={style} onClick={props.click}>{props.character}</div>;
};

export default Char;
