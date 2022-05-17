import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
  render() {
    return (
      <div className="mBody">
        <div className="topMenu">
          <a className="active" href="#home">
            Home
          </a>
          <a href="https://www.google.com/">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>

          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button className="searchButton" type="submit">
                <i> Go</i>
              </button>
            </form>
          </div>
        </div>

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Programming Battleground</h2>
        </div>
        <div className="container">
          <svg
            className="svg1"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              className="path1"
              d="M0, 100 C150, 200 350,
                0 500, 100 L500, 00 L0, 0 Z"
            ></path>
          </svg>
        </div>

        <div className="container">
          <svg
            className="svg2"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              className="path2"
              d="M0, 80 C300, 0 400,
                300 500, 50 L500, 00 L0, 0 Z"
            ></path>
          </svg>
        </div>

        <div className="container">
          <svg
            className="svg3"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              className="path3"
              d="M0, 100 C150, 300 350,
                0 500, 100 L500, 00 L0, 0 Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default Counter;
