import { z } from "zod";

// Shape of 'Post data object' for data validation
export const postSchema = z.object({
  userId: z.coerce.number().int().positive(),
  id: z.coerce.number().int().positive(),
  title: z.string(),
  body: z.string(),
});

export const postsSchema = z.array(postSchema);

export type Post = z.infer<typeof postSchema>;

export async function fetchPosts(start = 0, limit = 10) {
  // Fetch all posts based on a start and limit parameter (limit usually stays 10)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    { cache: "no-store" }
  );
  const maybePosts: unknown = await res.json();

  // Validate if retrieved posts have the correct shape,
  // if the shape is incorrect 'log' the error and return undefined
  const validatedPosts = postsSchema.safeParse(maybePosts);
  if (!validatedPosts.success) {
    console.error(validatedPosts.error);
    return;
  }

  return validatedPosts.data;
}

export async function fetchPostById(id: string) {
  // Fetch post of a certain ID
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const maybePost: unknown = await res.json();

  // Validate if retrieved post has the correct shape,
  // if the shape is incorrect 'log' the error and return undefined
  const validatedPost = postSchema.safeParse(maybePost);
  if (!validatedPost.success) {
    console.error(validatedPost.error);
    return;
  }

  return validatedPost;
}
