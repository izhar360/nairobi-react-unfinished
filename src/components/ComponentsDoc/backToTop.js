import React from "react";

/**
 * @author
 * @function BackToTop
 **/

const BackToTop = (props) => {
  return (
    <div id="back-to-top" style={{ display: "none" }}>
      <a
        class="btn btn-primary btn-xs p-0 position-fixed top"
        id="top"
        href="#"
      >
        <svg
          width="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15.5L12 8.5L19 15.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default BackToTop;
