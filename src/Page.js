import React from "react";

function Page({ page: { title, selected }, index, removePage, selectPage }) {
  const tdStyle = {
    border: "1px solid black",
    background: selected ? "green" : ""
  };
  const btnStyle = {
    margin: "0px 0px 0px 5px"
  };

  const tabStyle = {
    cursor: "pointer"
  };
  return (
    <td style={tdStyle}>
      <span style={tabStyle} onClick={() => selectPage(index)}>
        {title}
      </span>
      <button style={btnStyle} onClick={() => removePage(index)}>
        X
      </button>
    </td>
  );
}

export default Page;
