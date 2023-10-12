import React from "react";

const TextParser = ({ children }) => {
  let childrenSplit = children.split("\n");
  console.log(childrenSplit);

  return (
    <div className="text-parser">
      {childrenSplit.map((child) => {
        return <p>{child}</p>;
      })}
    </div>
  );
};

export default TextParser;
