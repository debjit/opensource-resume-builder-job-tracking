import React from "react";
import Nav from "./components/Layout/Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="">
        {children}
      </main>
    </>
  );
}

export default Layout;
