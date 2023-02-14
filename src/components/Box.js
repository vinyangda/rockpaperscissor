import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "Tie" &&
    props.result !== ""
  ) {
    result = props.result === "WIN" ? "LOSE" : "WIN";
  } else {
    result = props.result;
  }
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box; //대문자여야 컴포넌트로 인식됨
