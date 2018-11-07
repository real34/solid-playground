import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Layout from "./Layout";
import Home from "./Page/Home";
// import {
//   LoggedOut,
//   LoggedIn,
//   AuthButton,
//   Value,
//   Image,
//   Link,
//   Name,
//   List
// } from '@solid/react';

// https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
// https://github.com/JornWildt/SolidRC/blob/master/wwwroot/js/logbookRepository.js
// https://github.com/dindy/solid-discussion-app/blob/3ceccfb08a1e855e5b4519e6e6c59def3d4e051d/src/actions/api.js
const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Home />
    </Layout>
  </ThemeProvider>
);

render(<App />, document.getElementById("app"));
