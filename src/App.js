
import React, { useState } from "react";
import "./App.css";
import About from "./components/About/About";

import Header from "./components/Header/Header";
function App() {
  const [currentTab, handleTabChange] = useState("about");

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (currentTab === "About") {
      return <About/>;
    }
  }

  return (
    <>
    <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
    </>
  );
}

export default App;
