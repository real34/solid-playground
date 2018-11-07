import React from "react";
import { LoginButton, LoggedOut, LoggedIn, Name } from "@solid/react";
import { Box, Link, Card, Text } from "rebass";
import Editor from "./Editor";

const Home = () => {
  return (
    <div>
      <LoggedOut>
        <Box width={[1, 2 / 3, 1 / 2]} mx="auto" my={5} fontSize={3}>
          <p>
            Hello! This application allows you to write your words and learn a
            new habit of Writing Every Day.
          </p>
          <p>
            It was inspired by the great{" "}
            <Link href="https://750words.com/">750words.com</Link> application
            but is built on top of{" "}
            <Link href="https://solid.inrupt.com/">Solid</Link>… meaning that
            <strong>you own your writings!</strong>
          </p>
        </Box>

        <Card bg="navy" color="white" p={4}>
          <Text textAlign="center">
            In order to use the application you must{" "}
            <LoginButton popup="solid/login.html" />
          </Text>
        </Card>
      </LoggedOut>

      <LoggedIn>
        <p>
          Welcome here <Name src="user" />!<br />
          What will you write today?
        </p>
        <Editor />
      </LoggedIn>
    </div>
  );
};

export default Home;
