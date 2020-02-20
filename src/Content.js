import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function Content({ pages, changeState }) {
  let selectedPage = "";
  if (pages.length !== 0) {
    selectedPage = pages.filter(page => page.selected)[0];
  }

  switch (selectedPage.title) {
    case "Home":
      return <Home />;
    case "Contact":
      return <Contact page={selectedPage} changeState={changeState} />;
    case "About":
      return <About />;
    default:
      return <p>EMPTY</p>;
  }
}

export default Content;
