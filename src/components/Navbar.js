import "./Navbar.css";
import { Suspense, useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const changeSideview = () => {
    setSidebar(true);
    console.log("hello");
  };
  return (
    <>
      {sidebar && <Sidebar />}
      <div className="nav-bar">
        <div className="nav-header">
          <div>
            <h2 className="heading">
              <a href="/">
                <img
                  src="./images/Entransparent.png"
                  className="teamlogo"
                  alt="enpassant's logo"
                ></img>
              </a>
            </h2>
          </div>
          <button className="nav-toggle">
            <i className="fas fa-bars baricon"></i>
          </button>
        </div>
        <div className="nav-items">
          <ul className="links">
            <i
              // className="fas fa-bars"
              className={`fas ` + (sidebar ? `fa-times` : `fa-bars`)}
              onClick={() => {
                setSidebar(!sidebar);
              }}
            ></i>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
