import { Flex, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex h={"10vh"} bg="red.500" alignItems="center">
      <Heading textColor="white" ml={4}>
        LOGO
      </Heading>
    </Flex>
  );
}
