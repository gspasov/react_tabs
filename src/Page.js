import React from "react";

function Page({ page: { title, selected }, index, removePage, selectPage }) {
  const divStyle = {
    border: "1px solid black",
    background: selected ? "green" : "",
    margin: "1px",
    padding: "1px"
  };
  const btnStyle = {
    margin: "0px 0px 0px 5px"
  };

  const tabStyle = {
    cursor: "pointer"
  };
  return (
    <div style={divStyle}>
      <span style={tabStyle} onClick={() => selectPage(index)}>
        {title}
      </span>
      <button style={btnStyle} onClick={() => removePage(index)}>
        X
      </button>
    </div>
  );
}

export default Page;
