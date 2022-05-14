import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main class="main-content">
        <div class="position-relative">
          <Navbar />
        </div>

        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
