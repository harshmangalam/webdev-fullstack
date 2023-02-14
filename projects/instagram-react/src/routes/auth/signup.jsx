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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signupUser } from "../../services/auth";
export default function Signup() {
  const signupMutation = useMutation((data) => signupUser(data));
  const navigate = useNavigate();

  async function handleSignup(e) {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      const name = formData.get("name");
      const username = formData.get("username");
      const password = formData.get("password");

      const data = await signupMutation.mutateAsync({
        name,
        username,
        password,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box>
      <Card maxW="sm" mx="auto">
        <CardBody>
          <VStack spacing="4" as="form" onSubmit={handleSignup}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" />
            </FormControl>

            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
            </FormControl>

            <Button type="submit" w="full" colorScheme="blue">
              Create account
            </Button>
          </VStack>

          <Flex
            w="full"
            as={Link}
            color="blue.500
          "
            justifyContent="center"
            to="/login"
            py="4"
          >
            Log into your account
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
}
