import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function PostCard({
  title,
  body,
  postId,
}: {
  title: string;
  body: string;
  postId: number;
}) {
  return (
    <Link href={`post/${postId}`}>
      <Card maxW="3xl" minW="75%">
        <CardHeader>
          <Heading fontSize="2xl">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Text>{body}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="blue.400" decoration="underline">
                View Post
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
}
