import React from "react";
import { Box, Text, Flex } from "rebass";

const GOAL_IN_WORDS = 750;
const THRESHOLD_OF_USER_INTEREST = 15;

const Progress = ({ numberOfWords }) => {
  const hasReached = threshold => numberOfWords >= threshold;

  if (!hasReached(THRESHOLD_OF_USER_INTEREST)) return null;

  return (
    <Flex fontSize={0}>
      <Text
        width={[1 / 3, 1 / 4, 1 / 5]}
        textAlign="center"
        color={hasReached(GOAL_IN_WORDS) ? "green" : "gray"}
      >
        {numberOfWords} words
      </Text>
      <Box width={[2 / 3, 3 / 4, 4 / 5]}>
        <progress
          value={numberOfWords}
          max={GOAL_IN_WORDS}
          style={{ width: "100%", fontSize: "0.5rem" }}
        />
      </Box>
    </Flex>
  );
};

export default Progress;
