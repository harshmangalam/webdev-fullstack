import { VStack, Heading, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import CustomNavLink from "./nav-link";
import { useAuthContext } from "../../context/auth";
import { AiOutlineLogin } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";
export default function Sidebar() {
  const { state } = useAuthContext();

  const navLinks = [
    {
      href: "/",
      icon: <BiHomeAlt size={24} />,
      label: "Home",
    },
    {
      href: "/explore",
      icon: <MdOutlineExplore size={24} />,
      label: "Explore",
    },
    {
      href: "/harshmangalam",
      icon: (
        <Avatar
          src="https://avatars.githubusercontent.com/u/57381638?v=4"
          size="sm"
        />
      ),
      label: state.user?.username,
    },
  ];
  return (
    <VStack
      align="stretch"
      spacing="6" // 6* 4 = 24px
      position="fixed"
      borderRightWidth={"1px"}
      borderRightColor="gray.300"
      top={0}
      left={0}
      bottom={0}
      maxW="60"
      width={"full"}
    >
      <Link to="/">
        <Heading px="4" py="4">
          Instagram
        </Heading>
      </Link>

      <VStack align="stretch" spacing="2">
        {state.isAuthenticated
          ? navLinks.map((link) => (
              <CustomNavLink
                key={link.label}
                icon={link.icon}
                label={link.label}
                href={link.href}
              />
            ))
          : authLinks.map((link) => (
              <CustomNavLink
                key={link.label}
                icon={link.icon}
                label={link.label}
                href={link.href}
              />
            ))}
      </VStack>
    </VStack>
  );
}

const authLinks = [
  {
    href: "/login",
    icon: <AiOutlineLogin size={24} />,
    label: "Login",
  },
  {
    href: "/signup",
    icon: <SiGnuprivacyguard size={24} />,
    label: "Signup",
  },
];
