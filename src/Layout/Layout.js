import React from "react";
import { Box } from "rebass";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box
      color="navy"
      p={4}
      m="auto"
      css={{
        maxWidth: "900px"
      }}
    >
      <Header />
      <div>{children}</div>
    </Box>
  );
};

export default Layout;
