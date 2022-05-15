import React from "react";
import ComponentsSection from "./componentsSection";
import ContentsSection from "./contentSection";
import FormsSection from "./formsSection";

/**
 * @author
 * @function Middle
 **/

const Middle = (props) => {
  return (
    <div class="bd-cheatsheet container-fluid bg-trasprent mt-n5">
      <ComponentsSection />

      <FormsSection />

      <ContentsSection />
    </div>
  );
};

export default Middle;
