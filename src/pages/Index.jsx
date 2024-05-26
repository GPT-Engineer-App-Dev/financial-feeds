import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#fff1e5" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="white" p={4} boxShadow="md" borderRadius="md">
              <Image src="/images/news1.jpg" alt="News 1" mb={4} />
              <Heading as="h3" size="md">News Headline 1</Heading>
              <Text mt={2}>Summary of the news article 1.</Text>
            </Box>
            <Box bg="white" p={4} boxShadow="md" borderRadius="md">
              <Image src="/images/news2.jpg" alt="News 2" mb={4} />
              <Heading as="h3" size="md">News Headline 2</Heading>
              <Text mt={2}>Summary of the news article 2.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <Box bg="white" p={4} boxShadow="md" borderRadius="md">
            <Text>Stock prices and indices will be displayed here.</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;