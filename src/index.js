import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Layout from "./Layout";
import Home from "./Page/Home";

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Home />
    </Layout>
  </ThemeProvider>
);

render(<App />, document.getElementById("app"));
