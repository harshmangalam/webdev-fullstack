import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Explore from "./routes/explore";
import Profile from "./routes/profile";
import RootLayout from "./routes/root-layout";
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
    ],
  },
]);
