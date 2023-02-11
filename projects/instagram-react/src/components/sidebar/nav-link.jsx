import { Box, HStack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function CustomNavLink({ icon, label, href }) {
  const { pathname } = useLocation();

  const isActive = pathname === href;
  return (
    <Box
      as={NavLink}
      to={href}
      px="4"
      py="2"
      backgroundColor={isActive ? "gray.100" : ""}
      _hover={{
        background: "gray.100",
      }}
    >
      <HStack>
        {icon}
        <Text>{label}</Text>
      </HStack>
    </Box>
  );
}
