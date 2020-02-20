import React from "react";
import Page from "./Page";

function NavBar({ pages, removePage, selectPage }) {
  return (
    <div style={{ background: "gray", height: "29px" }}>
      <table>
        <tbody>
          <tr>
            {pages.map((page, index) => (
              <Page
                index={index}
                key={index}
                page={page}
                removePage={removePage}
                selectPage={selectPage}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NavBar;
