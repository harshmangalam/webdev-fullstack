import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/auth";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginMutation = useMutation((data) => loginUser(data));

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const data = await loginMutation.mutateAsync({
        username,
        password,
      });

      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box>
      <Card maxW="sm" mx="auto">
        <CardBody>
          <VStack spacing="4" as="form" onSubmit={handleLogin}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button type="submit" w="full" colorScheme="blue">
              Log in
            </Button>
          </VStack>

          <Flex
            w="full"
            as={Link}
            color="blue.500
          "
            justifyContent="center"
            to="/signup"
            py="4"
          >
            Create new account
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
}
