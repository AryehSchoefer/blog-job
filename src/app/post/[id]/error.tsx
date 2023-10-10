"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function PostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Flex justify="center" align="center" minH="100vh">
      <Flex gap="10" w="3xl" align="center" direction="column">
        <Text align="center" fontSize={{ base: "4xl", lg: "5xl" }}>
          {error.message}
        </Text>
        <Box textAlign="center" fontSize="3xl">
          <Link href="/">
            <Button>Go Back To Home</Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
