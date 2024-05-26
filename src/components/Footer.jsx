import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#fff1e5" px={4} py={2} boxShadow="md" mt={10}>
      <Flex justify="space-between" align="center">
        <Text fontSize="sm" color="black">
          &copy; {new Date().getFullYear()} Financial Times
        </Text>
        <Flex>
          <Link href="/contact" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#e2e8f0" }}>
            Contact
          </Link>
          <Link href="/privacy" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#e2e8f0" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "#e2e8f0" }}>
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;