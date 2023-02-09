import { VStack, Heading, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import CustomNavLink from "./nav-link";
export default function Sidebar() {
  return (
    <VStack spacing="6" position="fixed">
      <Link to="/">
        <Heading>Instagram</Heading>
      </Link>

      <VStack spacing="2">
        {navLinks.map((link) => (
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
    label: "Profile",
  },
];
