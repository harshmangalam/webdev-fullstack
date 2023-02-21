import {
  VStack,
  Flex,
  HStack,
  Avatar,
  Heading,
  Text,
  Button,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import PostCard from "../components/post-card";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/posts";
import { useAuthContext } from "../context/auth";
import { Link } from "react-router-dom";
import { getAllUsers } from "../services/user";
import UserItem from "../components/user/user-item";
export default function Home() {
  const { state } = useAuthContext();
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const userSuggestionsQuery = useQuery(["users"], getAllUsers);

  if (postsQuery.isLoading) {
    return <p>Fetching posts...</p>;
  }

  if (postsQuery.isError) {
    console.log(postsQuery.error);
    return <p>There is some problem in fetching posts.</p>;
  }

  return (
    <Flex justify="center" gap="10">
      <VStack spacing="4">
        {postsQuery.data?.posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </VStack>

      <VStack align="flex-start" maxW="xs" w="full">
        {state.isAuthenticated ? (
          <HStack>
            <Avatar size="md" name={state.user.name}></Avatar>

            <div>
              <Heading size="md">{state.user.username}</Heading>
              <Text>{state.user.name}</Text>
            </div>
          </HStack>
        ) : (
          <Button variant="ghost" colorScheme="purple" as={Link} to="/login">
            Click to login
          </Button>
        )}

        {/* suggestion  */}
        <Flex justify="space-between" w="full" py="4">
          <Heading size="sm">Suggestions</Heading>
          <Button size="sm" variant="link" as={Link} to="/users">
            See all
          </Button>
        </Flex>

        <SimpleGrid spacing={"4"} w="full">
          {userSuggestionsQuery.data?.users?.map((user) => (
            <GridItem column="1" key={user._id}>
              <UserItem name={user.name} username={user.username} />
            </GridItem>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
}
