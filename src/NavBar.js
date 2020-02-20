import React from "react";
import Page from "./Page";

function NavBar({ pages, removePage, selectPage }) {
  const divStyle = {
    background: "gray",
    minHeight: "22px",
    display: "flex",
    flexWrap: "wrap",
    padding: "2px"
  };
  return (
    <div style={divStyle}>
      {pages.map((page, index) => (
        <Page
          index={index}
          key={index}
          page={page}
          removePage={removePage}
          selectPage={selectPage}
        />
      ))}
    </div>
  );
}

export default NavBar;
