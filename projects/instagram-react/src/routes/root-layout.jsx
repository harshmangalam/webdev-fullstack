import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
export default function RootLayout() {
  return (
    <Box>
      <Sidebar />
      <Box as="main" ml="60" px="4" py="8">
        <Outlet />
      </Box>
    </Box>
  );
}
