import React from "react";
import { Link } from "react-router-dom";

function Page({ page: { title, selected }, index, removePage, selectPage }) {
  const tdStyle = {
    border: "1px solid black",
    background: selected ? "green" : ""
  };
  const btnStyle = {
    margin: "0px 0px 0px 5px"
  };
  return (
    <td style={tdStyle}>
      <Link to="#" onClick={() => selectPage(index)}>
        {title}
      </Link>
      <button style={btnStyle} onClick={() => removePage(index)}>
        X
      </button>
    </td>
  );
}

export default Page;
