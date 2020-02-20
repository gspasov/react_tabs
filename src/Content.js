import React from "react";

function Content({ pages }) {
  return pages.map(page => {
    return (
      <div key={page.id} style={{ display: page.selected ? "block" : "none" }}>
        <page.component />
      </div>
    );
  });
}

export default Content;
