import React from "react";

const Box = (props) => {
  console.log(props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src="" />
      <h2>WIN</h2>
    </div>
  );
};

export default Box; //대문자여야 컴포넌트로 인식됨
