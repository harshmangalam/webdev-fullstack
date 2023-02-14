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
export default function Signup() {
  return (
    <Box>
      <Card maxW="sm" mx="auto">
        <CardBody>
          <VStack spacing="4" as="form">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>

            <Button w="full" colorScheme="blue">
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
