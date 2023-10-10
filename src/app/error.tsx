"use client";

import { Button, Flex, Text } from "@chakra-ui/react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Flex justify="center" align="center" minH="92vh">
      <Flex gap="10" w="3xl" align="center" direction="column">
        <Text align="center" fontSize={{ base: "4xl", lg: "5xl" }}>
          Something went wrong!
        </Text>
        <Button w="75%" onClick={() => reset()}>
          Try Again
        </Button>
      </Flex>
    </Flex>
  );
}
