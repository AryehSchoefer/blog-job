import { fetchPostById } from "@/lib/fetchPosts";
import { Text, Flex, Stack, StackDivider, Button, Box } from "@chakra-ui/react";
import Link from "next/link";

async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPostById(params.id);

  if (!post) {
    throw new Error(`Post with ID ${params.id} does not exist`);
  }

  return (
    <>
      <Flex
        pt="10vh"
        gap="10"
        justify="center"
        direction="column"
        align="center"
      >
        <Stack
          w={{ base: "90%", md: "75%" }}
          divider={<StackDivider />}
          spacing="4"
        >
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
            {post.data.title}
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }}>{post.data.body}</Text>
        </Stack>
        <Box w={{ base: "90%", md: "75%" }}>
          <Link href="/">
            <Button>Go Back</Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default PostPage;
