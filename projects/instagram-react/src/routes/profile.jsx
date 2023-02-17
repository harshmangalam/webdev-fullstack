import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../services/user";
import { VStack, Heading, Text, HStack, Badge } from "@chakra-ui/react";
export default function Profile() {
  const { username } = useParams();
  const { data, isLoading, isError } = useQuery(
    [username],
    () => getUserDetails(username),
    {
      enabled: !!username,
    }
  );

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error...";
  }

  return (
    <div>
      <VStack>
        <HStack>
          <Heading>{data.user.name}</Heading>
          <Badge ml="1" colorScheme="green">
            {data.user.isActive ? "Active" : "Not Active"}
          </Badge>
        </HStack>
        <Text>{data.user.username}</Text>
        <Text>{new Date(data.user.createdAt).toLocaleDateString()}</Text>
      </VStack>
    </div>
  );
}
