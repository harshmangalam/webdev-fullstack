import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../services/user";
import {
  VStack,
  Heading,
  Text,
  HStack,
  Badge,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { useAuthContext } from "../context/auth";
import { EditUserModal } from "../components/user/edit-user-modal";
export default function Profile() {
  const { state } = useAuthContext();
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

  const allowToPerformAction = state?.user?.username === username;

  return (
    <div>
      <VStack>
        <Avatar size="2xl" name={data.user?.name} />
        <HStack>
          <Heading>{data.user.name}</Heading>
          <Badge ml="1" colorScheme="green">
            {data.user.isActive ? "Active" : "Not Active"}
          </Badge>
        </HStack>
        <Text>{data.user.username}</Text>
        <Text>{new Date(data.user.createdAt).toLocaleDateString()}</Text>

        {allowToPerformAction && (
          <HStack>
            <EditUserModal
              username={data?.user?.username}
              userId={data.user._id}
              name={data.user?.name}
            />

            <Button colorScheme="red" leftIcon={<MdDelete />}>
              Remove
            </Button>
          </HStack>
        )}
      </VStack>
    </div>
  );
}
