import React, { useState } from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import uuid from "uuid";

function App() {
  const allPаges = {
    home: {
      id: null,
      title: "Home",
      selected: true,
      component: Home
    },
    contact: {
      id: null,
      title: "Contact",
      selected: true,
      component: Contact
    },
    about: {
      id: null,
      title: "About",
      selected: true,
      component: About
    }
  };
  const [_pages, setPages] = useState([]);

  const unselectAllPages = pages => {
    return pages.map(page => {
      page.selected = false;
      return page;
    });
  };

  const changeSelection = (pages, selectedPageIndex) => {
    pages[selectedPageIndex].selected = true;
    return pages;
  };

  const hasSelectedPage = pages => {
    const selectedPages = pages.filter(({ selected }) => selected);
    return selectedPages.length !== 0;
  };

  const addPage = title => {
    const pageToAdd = allPаges[title];
    pageToAdd.id = uuid.v4();
    setPages([...unselectAllPages(_pages), pageToAdd]);
  };

  const removePage = index => {
    const newPages = [..._pages];
    newPages.splice(index, 1);
    if (newPages.length !== 0 && !hasSelectedPage(newPages)) {
      newPages[newPages.length - 1].selected = true;
    }
    setPages(newPages);
  };

  const selectPage = index => {
    const newPages = unselectAllPages(_pages);
    setPages(changeSelection(newPages, index));
  };

  return (
    <div className="App">
      <button onClick={() => addPage("home")}>Home</button>
      <button onClick={() => addPage("contact")}>Contact</button>
      <button onClick={() => addPage("about")}>About</button>
      <NavBar pages={_pages} removePage={removePage} selectPage={selectPage} />
      <Content pages={_pages} />
    </div>
  );
}

export default App;
