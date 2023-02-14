import React from "react";
import Navbar from "../Navbar/Navbar";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Merrin's portfolio</h1>
          </div>
          <div>
            <Navbar
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navbar>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="home-page">
          <h2>Welcome</h2>
          <h5>To</h5>
          <h1>Merrin's portfolio</h1> 
        </div>
      </section>
    </div>
  );
}

export default Header;
