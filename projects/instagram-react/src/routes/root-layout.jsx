import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getCurrentUser } from "../services/auth";
import { useAuthContext } from "../context/auth";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export default function RootLayout() {
  const { handleAuthenticate } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    async function authenticate() {
      try {
        // const accessToken = Cookies.get("accessToken");
        const data = await getCurrentUser();
        handleAuthenticate(data?.user);
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    }

    authenticate();
  }, []);
  return (
    <Box>
      <Sidebar />
      <Box as="main" ml="60" px="4" py="8">
        <Outlet />
      </Box>
    </Box>
  );
}
