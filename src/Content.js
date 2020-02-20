import React from "react";

function Content({ pages }) {
  return pages.map((page, index) => {
    return (
      <div key={index} style={{ display: page.selected ? "block" : "none" }}>
        <page.component />
      </div>
    );
  });
}

export default Content;
