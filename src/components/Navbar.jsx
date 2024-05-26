import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="#fff1e5" px={4} py={2} boxShadow="md">
      <Flex align="center">
        <Text fontSize="2xl" fontWeight="bold" color="black">
          Financial Times
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#e2e8f0" }}>
            Home
          </Link>
          <Link as={NavLink} to="/markets" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#e2e8f0" }}>
            Markets
          </Link>
          <Link as={NavLink} to="/world" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#e2e8f0" }}>
            World
          </Link>
          <Link as={NavLink} to="/opinion" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#e2e8f0" }}>
            Opinion
          </Link>
          <Link as={NavLink} to="/more" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#e2e8f0" }}>
            More
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;