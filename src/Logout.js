import React from "react";

const Logout = ({ children, onClick }) => (
  <p>
    You are logged in as <span>{children}</span>.
    <button onClick={onClick}>Log out</button>
  </p>
);

export default Logout;
