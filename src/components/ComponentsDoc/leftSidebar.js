import React from "react";

/**
 * @author
 * @function LeftSideBar
 **/

const LeftSideBar = (props) => {
  return (
    <div class="middle" style={{ display: "none" }}>
      <button
        data-trigger="left-side-bar"
        class="d-xl-none btn btn-xs mid-menu"
        type="button"
      >
        <i class="icon">
          <svg
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.75 11.7256L4.75 11.7256"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </i>
      </button>
    </div>
  );
};

export default LeftSideBar;
