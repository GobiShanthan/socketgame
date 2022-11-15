import React from "react";
import {Link} from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <div class="navbar-brand">
            GAME 
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link  to={`/`} class="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to={`game`} class="nav-link">
                Game
              </Link>
              <Link class="nav-link">
                Pricing
              </Link>
              <Link class="nav-link disabled">Disabled</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
