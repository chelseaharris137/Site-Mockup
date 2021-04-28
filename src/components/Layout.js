import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div id="container">
    <header>
      <Header />
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);
export default Layout;
