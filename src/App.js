import React, { useState } from "react";
import NavBar from "./NavBar";
import Content from "./Content";

function App() {
  const [_pages, setPages] = useState([
    {
      id: 1,
      title: "Home",
      path: "",
      selected: true,
      state: ""
    },
    {
      id: 2,
      title: "Contact",
      path: "contact",
      selected: false,
      state: ""
    },
    {
      id: 3,
      title: "About",
      path: "about",
      selected: false,
      state: ""
    }
  ]);

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

  const addPage = (title, path) => {
    let newId;

    if (_pages.length === 0) {
      newId = 1;
    } else {
      const { id } = _pages[_pages.length - 1];
      newId = id + 1;
    }

    const newPages = [
      ...unselectAllPages(_pages),
      {
        id: newId,
        title: title,
        path: path,
        selected: true,
        state: ""
      }
    ];

    setPages(newPages);
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

  const changeState = (pageId, newState) => {
    const newPages = _pages.map(page => {
      if (page.id === pageId) {
        return { ...page, state: newState };
      } else {
        return page;
      }
    });

    setPages(newPages);
  };

  return (
    <div className="App">
      <button onClick={() => addPage("Home", "")}>Home</button>
      <button onClick={() => addPage("Contact", "contact")}>Contact</button>
      <button onClick={() => addPage("About", "about")}>About</button>
      <NavBar pages={_pages} removePage={removePage} selectPage={selectPage} />
      <Content pages={_pages} changeState={changeState} />
    </div>
  );
}

export default App;
