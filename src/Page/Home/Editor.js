import React, { useState } from "react";
import { Box } from "rebass";
import Textarea from "react-textarea-autosize";

import EntryDate from "./EntryDate";
import Progress from "./Progress";

const notEmpty = word => word.trim() !== "";
const countWordsIn = text => text.split(/\s/).filter(notEmpty).length;

// https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
// https://github.com/JornWildt/SolidRC/blob/master/wwwroot/js/logbookRepository.js
// https://github.com/dindy/solid-discussion-app/blob/3ceccfb08a1e855e5b4519e6e6c59def3d4e051d/src/actions/api.js
const Editor = () => {
  const [numberOfWords, setNumberOfWords] = useState(0);
  const handleChange = event =>
    setNumberOfWords(countWordsIn(event.target.value));

  return (
    <Box>
      <form>
        <label htmlFor="entry-content">
          <EntryDate date={new Date()} />
        </label>

        <Box w={1} my={3} p={3} css={{ borderLeft: "1px solid lightgrey" }}>
          <Textarea
            onChange={handleChange}
            autoFocus
            spellCheck
            minRows={6}
            name="entry-content"
            style={{
              lineHeight: "1.3",
              background: "transparent",
              fontSize: "1rem",
              border: "none",
              width: "100%",
              resize: "none"
            }}
          />
        </Box>
        <Progress numberOfWords={numberOfWords} />
      </form>
    </Box>
  );
};

export default Editor;
