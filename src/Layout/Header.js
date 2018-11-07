import React from "react";
import { Flex, Box, Heading } from "rebass";
import { AuthButton } from "@solid/react";

// TODO Style the AuthButton

const Header = () => {
  return (
    <Flex alignItems="stretch" mb={4}>
      <Box width={2 / 3}>
        <Heading as="h1">750 words</Heading>
      </Box>
      <Box width={1 / 3}>
        <AuthButton popup="solid/login.html" />
      </Box>
    </Flex>
  );
};

export default Header;
