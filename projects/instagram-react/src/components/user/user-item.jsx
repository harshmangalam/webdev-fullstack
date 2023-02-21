import { HStack, Avatar, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function UserItem({ username, name }) {
  return (
    <Flex justify="space-between" w="full">
      <HStack as={Link} to={`/${username}`}>
        <Avatar name={name} size="xs" />
        <div>
          <Heading size="sm">{username}</Heading>
          <Text>{name}</Text>
        </div>
      </HStack>
      <Button variant="outline" size="sm" colorScheme="blue">
        Follow
      </Button>
    </Flex>
  );
}
