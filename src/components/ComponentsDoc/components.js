import React from "react";
import Aside from "./aside";
import BackToTop from "./backToTop";
import Hero from "./hero";
import LeftSideBar from "./leftSidebar";
import Middle from "./middle";
import Modal from "./modal";

/**
 * @author
 * @function Components
 **/

const Components = (props) => {
  return (
    <div>
      <div class="wrapper">
        <span class="uisheet screen-darken"></span>
        <div class="hash-tag-btn">
          <span>#BuildWithHopeUI</span>
        </div>
        <Hero />
        <div class=" body-class-1 container">
          <Aside />
          <Middle />

          <Modal />
        </div>
        <BackToTop />
        <LeftSideBar />
      </div>
    </div>
  );
};

export default Components;
