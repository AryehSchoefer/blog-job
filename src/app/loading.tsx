import { Flex, Spinner } from "@chakra-ui/react";

export default function RootLoading() {
  return (
    <Flex direction="column" justify="center" align="center" h="92vh">
      <Spinner w="5rem" h="5rem" />
    </Flex>
  );
}
