import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size='xl' name='Pete' src='https://i.pravatar.cc/150?img=7' />
    <Heading as='h6' size='xs' pt="5px">{greeting}</Heading>

    <Heading as='h1' pt="30px">{bio1}</Heading>
    <Heading as='h2'>{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
