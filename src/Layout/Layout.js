import React from "react";
import { Box } from "rebass";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box color="navy" p={4}>
      <Header />
      <div>{children}</div>
    </Box>
  );
};

export default Layout;
