import React from "react";
import { Heading } from "rebass";

const EntryDate = ({ date }) => {
  const userLang = (navigator && navigator.language) || "en_US";
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return (
    <Heading as="h2">{date.toLocaleDateString(userLang, dateOptions)}</Heading>
  );
};

export default EntryDate;
