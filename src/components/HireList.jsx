import React from "react";
import HireItem from "./HireItem";

function HireList({data}) {
  return (
    <div className="flex_main">
      <div className="hire_list">
        {data.map((item, idx) => (
          <HireItem key={idx} obj={item} />
        ))}
      </div>
    </div>
  );
}

export default HireList;
