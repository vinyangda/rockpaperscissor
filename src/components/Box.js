import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ38TBstKfakVftAsZWyUW2O5fbPniEx3lDk1novZubeie57UUy5gNVPTOPF6AXZ2lkHj6ceF8RBcC2XoAxMSo"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box; //대문자여야 컴포넌트로 인식됨
