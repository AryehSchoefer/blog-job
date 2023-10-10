"use client";

import { Flex, Spinner } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PostCard from "./PostCard";
import { Post, fetchPosts } from "@/lib/fetchPosts";

export default function InfiniteScrollPosts({
  initialPosts,
}: {
  initialPosts: Post[];
}) {
  // state variables used for pagination logic
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  // ref tracking for infinite scroll functionality:
  // when the dom object of the ref comes in view, the useEffect
  // is triggered which then loads more posts
  const ref = useRef(null);
  const lastPostInView = useInView(ref);

  async function loadMorePosts() {
    const next = page + 1;
    const newPosts = await fetchPosts((next - 1) * 10);

    if (!newPosts) {
      throw new Error("Error while fetching posts");
    }

    setPage(next);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
  }

  useEffect(() => {
    if (lastPostInView) {
      loadMorePosts();
    }
  }, [lastPostInView]);

  return (
    <Flex direction="column" gap="10" align="center" pt="10" pb="10">
      {posts.map((post) => (
        <div key={post.id.toString()}>
          <PostCard postId={post.id} title={post.title} body={post.body} />
        </div>
      ))}
      {page <= 10 && <Spinner h="10" w="10" ref={ref} />}
    </Flex>
  );
}
