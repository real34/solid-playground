import React from "react";

const Login = ({ onClick }) => (
  <p>
    You are not logged in. Come on!
    <button onClick={onClick}>Log in</button>
  </p>
);

export default Login;
