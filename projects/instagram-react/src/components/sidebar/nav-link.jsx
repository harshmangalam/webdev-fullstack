import { HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export default function CustomNavLink({ icon, label, href }) {
  return (
    <NavLink to={href}>
      <HStack>
        {icon}
        <Text>{label}</Text>
      </HStack>
    </NavLink>
  );
}
