import InfiniteScrollPosts from "@/components/InfiniteScrollPosts";
import { Flex } from "@chakra-ui/react";
import { fetchPosts } from "@/lib/fetchPosts";

export default async function Home() {
  const initialPosts = await fetchPosts();
  if (!initialPosts) {
    throw new Error("Error while fetching posts");
  }

  return (
    <main>
      <Flex justify={"center"}>
        <InfiniteScrollPosts initialPosts={initialPosts} />
      </Flex>
    </main>
  );
}
