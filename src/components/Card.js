import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack bg="white" borderRadius='10px' color="black">
      <Image
        borderRadius='10px'
        src={imageSrc?.substring(1)}
        alt={title}
      />
      <VStack p="15px" align="flex-start" >
        <Heading as='h4' size='md' mb={2}>{title}</Heading>
        <Text color="gray.500" pb={2}>{description}</Text>
        <Link href='#' display="flex" alignItems="center" fontSize="sm">
          <Text mr={2}>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;


