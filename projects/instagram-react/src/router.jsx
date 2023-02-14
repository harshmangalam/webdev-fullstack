import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Explore from "./routes/explore";
import Profile from "./routes/profile";
import RootLayout from "./routes/root-layout";
import Login from "./routes/auth/login";
import Signup from "./routes/auth/signup";
export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/:username",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
