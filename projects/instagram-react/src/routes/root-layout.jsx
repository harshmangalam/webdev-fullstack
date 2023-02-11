import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
export default function RootLayout() {
  return (
    <Box>
      <Sidebar />
      <Box as="main" ml="60" px="4">
        <Outlet />
      </Box>
    </Box>
  );
}
