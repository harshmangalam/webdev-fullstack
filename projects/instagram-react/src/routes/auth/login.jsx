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
  FormErrorMessage,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/auth";
import Cookies from "js-cookie";
import { useAuthContext } from "../../context/auth";
export default function Login() {
  const { handleAuthenticate } = useAuthContext();
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

      const token = data.token;
      const user = data.user;

      Cookies.set("accesToken", token);

      handleAuthenticate(user);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const usernameError =
    loginMutation.isError &&
    loginMutation?.error?.response?.data?.errors?.username?.msg;

  const passwordError =
    loginMutation.isError &&
    loginMutation?.error.response?.data?.errors?.password?.msg;

  const alertMessage = loginMutation?.error?.response?.data?.message;

  return (
    <Box>
      <Card maxW="sm" mx="auto">
        <CardBody>
          {alertMessage && (
            <Alert status="error">
              <AlertIcon />
              {alertMessage}
            </Alert>
          )}

          <VStack spacing="4" as="form" onSubmit={handleLogin} mt="4">
            <FormControl isInvalid={!!usernameError}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && (
                <FormErrorMessage>{usernameError}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={!!passwordError}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <FormErrorMessage>{passwordError}</FormErrorMessage>
              )}
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
