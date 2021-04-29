import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div id="container">
    <header>
      <Header />
    </header>

    <div>{children}</div>

    <footer>
      <Footer />
    </footer>
  </div>
);
export default Layout;
