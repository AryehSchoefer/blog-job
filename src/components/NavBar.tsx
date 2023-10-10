import { Text, Flex, Link } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex justify="center" align="center" h="8vh">
      <Link href="/">
        <Text fontSize="4xl" fontWeight="bold">
          🐝 Blog
        </Text>
      </Link>
    </Flex>
  );
}
