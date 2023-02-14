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
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <Box>
      <Card maxW="sm" mx="auto">
        <CardBody>
          <VStack spacing="4" as="form">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>

            <Button w="full" colorScheme="blue">
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
