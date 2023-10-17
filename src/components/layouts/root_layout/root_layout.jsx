import React from "react";
import Nav from "../../nav/Nav";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default RootLayout;
